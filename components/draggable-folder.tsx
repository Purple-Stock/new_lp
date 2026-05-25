"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { MacOSFolderIcon } from "@/components/macos-folder-icon";
import type { ComponentProps, ComponentType } from "react";

interface DraggableFolderProps {
  label: string;
  folderColor: "blue" | "purple" | "green" | "yellow" | "red" | "orange";
  icon?: ComponentType<ComponentProps<typeof MacOSFolderIcon>>;
  onDoubleClick?: () => void;
  onClick?: () => void;
  initialPosition?: { x: number; y: number };
  storageKey?: string;
  isSelected?: boolean;
}

const STORAGE_VERSION = "v3";

// Hidden marker rendered inside the sidebar slot — used only for initial positioning
export function FolderAnchor() {
  return <div className="w-0 h-0 invisible" />;
}

export function DraggableFolder({
  label,
  folderColor,
  icon: Icon = MacOSFolderIcon,
  onDoubleClick,
  onClick,
  initialPosition,
  storageKey,
  isSelected: externalSelected,
}: DraggableFolderProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef(position);
  positionRef.current = position;
  const [isDragging, setIsDragging] = useState(false);
  const [internalSelected, setInternalSelected] = useState(false);
  const isSelected =
    externalSelected !== undefined ? externalSelected : internalSelected;

  const dragOriginRef = useRef<{
    mx: number;
    my: number;
    fx: number;
    fy: number;
  } | null>(null);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const actuallyDraggedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  const storageVersionedKey = storageKey
    ? `folder-${STORAGE_VERSION}-${storageKey}`
    : null;

  // --- convert sidebar-slot coordinates to viewport on first mount ---
  useEffect(() => {
    const saved = storageVersionedKey
      ? localStorage.getItem(storageVersionedKey)
      : null;
    if (saved) {
      try {
        setPosition(JSON.parse(saved));
        setMounted(true);
        return;
      } catch {
        /* stale */
      }
    }

    const el = document.getElementById(`folder-slot-${storageKey}`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.top });
    setMounted(true);
  }, [storageKey, storageVersionedKey]);

  // --- drag handlers ---
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      actuallyDraggedRef.current = false;
      if (externalSelected === undefined) setInternalSelected(true);
      dragOriginRef.current = {
        mx: e.clientX,
        my: e.clientY,
        fx: positionRef.current.x,
        fy: positionRef.current.y,
      };
    },
    [externalSelected]
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const o = dragOriginRef.current;
      if (!o) return;
      const dx = e.clientX - o.mx;
      const dy = e.clientY - o.my;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3)
        actuallyDraggedRef.current = true;
      if (actuallyDraggedRef.current) {
        e.preventDefault();
        setIsDragging(true);
        setPosition({
          x: Math.max(0, Math.min(o.fx + dx, window.innerWidth - 80)),
          y: Math.max(30, Math.min(o.fy + dy, window.innerHeight - 100)),
        });
      }
    };
    const onUp = () => {
      const was = actuallyDraggedRef.current;
      if (was && storageVersionedKey) {
        localStorage.setItem(
          storageVersionedKey,
          JSON.stringify(positionRef.current)
        );
      }
      actuallyDraggedRef.current = false;
      dragOriginRef.current = null;
      setIsDragging(false);
      if (!was) {
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
          clickTimeoutRef.current = null;
          onDoubleClick?.();
        } else {
          clickTimeoutRef.current = setTimeout(() => {
            onClick?.();
            clickTimeoutRef.current = null;
          }, 300);
        }
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [storageVersionedKey, onClick, onDoubleClick]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed select-none",
        isDragging
          ? "z-[110] cursor-grabbing"
          : "transition-transform duration-150 z-[100] cursor-move",
        isSelected && !isDragging && "z-[105]"
      )}
      style={{
        left: position.x,
        top: position.y,
        transform: isDragging
          ? "scale(1.1)"
          : isSelected
            ? "scale(1.05)"
            : "scale(1)",
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-1 p-2 rounded-lg",
          isSelected && !isDragging && "bg-blue-500/20 ring-2 ring-blue-400/50",
          isDragging && "shadow-2xl"
        )}
      >
        <div
          className={cn(
            isDragging && "scale-110",
            isSelected && !isDragging && "scale-105"
          )}
        >
          <Icon color={folderColor} className="h-16 w-16" />
        </div>
        <span
          className={cn(
            "text-[11px] font-medium text-slate-900 text-center px-1 py-0.5 rounded whitespace-nowrap",
            isSelected &&
              !isDragging &&
              "bg-blue-500/40 shadow-lg ring-1 ring-blue-300/30"
          )}
        >
          {label}
        </span>
      </div>
    </div>,
    document.body
  );
}
