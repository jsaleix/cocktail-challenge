import { Modal } from "./modal";
import React from "react";

export default function DrinkModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
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
