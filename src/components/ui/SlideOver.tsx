"use client";

import { useEffect, useRef } from "react";
import { CloseIcon } from "./icons";

export function SlideOver({
  open,
  onClose,
  label,
  closeLabel,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  closeLabel: string;
  children: React.ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40" role="presentation">
      <button
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-foreground/60"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="absolute inset-y-0 left-0 flex w-full max-w-xl flex-col overflow-y-auto bg-card px-6 py-6 shadow-2xl sm:px-10 sm:py-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="ml-auto inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {closeLabel}
          <CloseIcon className="h-4 w-4" />
        </button>
        <div className="mt-8 flex-1">{children}</div>
      </aside>
    </div>
  );
}
