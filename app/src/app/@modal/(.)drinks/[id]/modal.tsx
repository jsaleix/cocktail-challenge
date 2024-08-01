"use client";

import React, { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    console.log("called");
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10000,
        height: "100vh",
        width: "100vw",
        background: "black",
      }}
    >
      AYO
    </div>
  );
}
