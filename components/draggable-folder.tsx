"use client";

import { useState, useRef, useCallback, useEffect } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [internalSelected, setInternalSelected] = useState(false);
  const isSelected =
    externalSelected !== undefined ? externalSelected : internalSelected;
  const [dragStart, setDragStart] = useState<{
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const actuallyDraggedRef = useRef(false);

  // On mount, convert initialPosition (relative to container) to fixed viewport coords
  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const saved = storageKey
      ? localStorage.getItem(`folder-${storageKey}`)
      : null;

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPosition(parsed);
        setMounted(true);
        return;
      } catch {
        // fall through to initial
      }
    }

    const containerRect = container.getBoundingClientRect();
    const initPos = initialPosition || { x: 0, y: 0 };
    setPosition({
      x: containerRect.left + initPos.x,
      y: containerRect.top + initPos.y,
    });
    setMounted(true);
  }, [initialPosition, storageKey]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;

      actuallyDraggedRef.current = false;

      if (externalSelected === undefined) {
        setInternalSelected(true);
      }
      const rect = folderRef.current?.getBoundingClientRect();
      if (rect) {
        setDragStart({
          x: e.clientX,
          y: e.clientY,
          offsetX: e.clientX - rect.left,
          offsetY: e.clientY - rect.top,
        });
      }
    },
    [externalSelected]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragStart) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      const threshold = 5;
      const hasMoved =
        Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold;

      if (!isDragging && hasMoved) {
        setIsDragging(true);
        actuallyDraggedRef.current = true;
        e.preventDefault();
      }

      if (isDragging || hasMoved) {
        const newX = position.x + deltaX;
        const newY = position.y + deltaY;

        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 100;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(30, Math.min(newY, maxY)),
        });

        setDragStart({
          x: e.clientX,
          y: e.clientY,
          offsetX: dragStart.offsetX,
          offsetY: dragStart.offsetY,
        });
      }
    },
    [dragStart, isDragging, position]
  );

  const handleMouseUp = useCallback(() => {
    const wasDragging = actuallyDraggedRef.current;

    if (wasDragging && storageKey && typeof window !== "undefined") {
      localStorage.setItem(`folder-${storageKey}`, JSON.stringify(position));
    }

    actuallyDraggedRef.current = false;

    if (!wasDragging) {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
        if (onDoubleClick) onDoubleClick();
      } else {
        clickTimeoutRef.current = setTimeout(() => {
          if (onClick) onClick();
          clickTimeoutRef.current = null;
        }, 300);
      }
    }

    setIsDragging(false);
    setDragStart(null);
  }, [position, storageKey, onClick, onDoubleClick]);

  useEffect(() => {
    if (dragStart !== null) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();

      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }
  }, [dragStart, handleMouseMove, handleMouseUp]);

  // Hidden anchor for initial positioning
  return (
    <>
      <div ref={containerRef} className="absolute invisible" />
      {mounted && (
        <div
          ref={folderRef}
          className={cn(
            "fixed cursor-move select-none transition-all",
            isDragging && "z-[110] cursor-grabbing",
            isSelected && !isDragging && "z-[105] cursor-grab",
            !isSelected && "z-[100]"
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `${isDragging ? "scale(1.1)" : isSelected ? "scale(1.05)" : "scale(1)"} translateZ(0px)`,
          }}
          onMouseDown={handleMouseDown}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-all",
              isSelected &&
                !isDragging &&
                "bg-blue-500/20 ring-2 ring-blue-400/50",
              isDragging && "shadow-2xl"
            )}
          >
            <div
              className={cn(
                "transition-transform",
                isDragging && "scale-110",
                isSelected && !isDragging && "scale-105"
              )}
            >
              <Icon color={folderColor} className="h-16 w-16" />
            </div>
            <span
              className={cn(
                "text-[11px] font-medium text-slate-900 text-center px-1 py-0.5 rounded transition-all whitespace-nowrap",
                isSelected &&
                  !isDragging &&
                  "bg-blue-500/40 shadow-lg ring-1 ring-blue-300/30"
              )}
            >
              {label}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
