import { Modal } from "./modal";
import React from "react";

export default function DrinkModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <Modal>{photoId}</Modal>;
}
