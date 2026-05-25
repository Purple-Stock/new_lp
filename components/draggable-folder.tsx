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
  const positionRef = useRef(position);
  positionRef.current = position;

  const [isDragging, setIsDragging] = useState(false);
  const [internalSelected, setInternalSelected] = useState(false);
  const isSelected =
    externalSelected !== undefined ? externalSelected : internalSelected;
  const dragOriginRef = useRef<{
    mouseX: number;
    mouseY: number;
    folderX: number;
    folderY: number;
  } | null>(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const actuallyDraggedRef = useRef(false);

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
        // fall through
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

      const pos = positionRef.current;
      dragOriginRef.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        folderX: pos.x,
        folderY: pos.y,
      };
    },
    [externalSelected]
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const origin = dragOriginRef.current;
    if (!origin) return;

    const deltaX = e.clientX - origin.mouseX;
    const deltaY = e.clientY - origin.mouseY;

    const threshold = 5;
    const hasMoved =
      Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold;

    if (hasMoved) {
      actuallyDraggedRef.current = true;
    }

    if (actuallyDraggedRef.current) {
      e.preventDefault();

      const newX = origin.folderX + deltaX;
      const newY = origin.folderY + deltaY;

      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 100;

      setIsDragging(true);
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(30, Math.min(newY, maxY)),
      });
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    const wasDragging = actuallyDraggedRef.current;

    if (wasDragging && storageKey && typeof window !== "undefined") {
      localStorage.setItem(
        `folder-${storageKey}`,
        JSON.stringify(positionRef.current)
      );
    }

    actuallyDraggedRef.current = false;
    dragOriginRef.current = null;

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
  }, [storageKey, onClick, onDoubleClick]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => handleMouseMove(e);
    const onUp = () => handleMouseUp();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <>
      <div ref={containerRef} className="absolute invisible" />
      {mounted && (
        <div
          ref={folderRef}
          className={cn(
            "fixed select-none",
            !isDragging && "transition-all cursor-move",
            isDragging && "z-[110] cursor-grabbing",
            isSelected && !isDragging && "z-[105] cursor-grab",
            !isSelected && !isDragging && "z-[100]"
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
              "flex flex-col items-center gap-1 p-2 rounded-lg",
              !isDragging && "transition-all",
              isSelected &&
                !isDragging &&
                "bg-blue-500/20 ring-2 ring-blue-400/50",
              isDragging && "shadow-2xl"
            )}
          >
            <div
              className={cn(
                !isDragging && "transition-transform",
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
