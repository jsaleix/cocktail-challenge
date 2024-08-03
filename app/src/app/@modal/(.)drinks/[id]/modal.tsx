"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { CocktailFullI } from "@/lib/types/cocktail";
import DrinkBasis from "@/components/drink/basis";
import Btn from "@/components/common/btn";

interface Props {
  drink: CocktailFullI | null;
}

export function Modal({ drink }: Props) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop" onClick={onDismiss}>
      <dialog
        ref={dialogRef}
        className="modal bg-transparent h-screen lg:h-fit w-100 lg:w-3/6 slideInWithFade"
        onClose={onDismiss}
      >
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="hideScrollBar overflow-scroll flex flex-col gap-5 p-5 h-full w-full bg-dark-blue bg-opacity-5 shadow-2xl rounded-md"
        >
          <button
            onClick={onDismiss}
            className="absolute top-5 right-5 close-button ml-auto hover:opacity-80"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13099 0.515417L10.4996 7.88398L17.8299 0.553596C17.9919 0.381251 18.1869 0.243381 18.4034 0.148254C18.6199 0.0531259 18.8534 0.00269992 19.0898 0C19.5961 0 20.0817 0.201121 20.4397 0.55912C20.7977 0.917118 20.9988 1.40267 20.9988 1.90895C21.0033 2.143 20.9598 2.37548 20.8712 2.59213C20.7826 2.80879 20.6506 3.00505 20.4834 3.16886L13.0576 10.4992L20.4834 17.9251C20.798 18.2329 20.9825 18.6497 20.9988 19.0895C20.9988 19.5958 20.7977 20.0814 20.4397 20.4394C20.0817 20.7974 19.5961 20.9985 19.0898 20.9985C18.8466 21.0086 18.6038 20.968 18.3771 20.8792C18.1503 20.7905 17.9445 20.6556 17.7727 20.4831L10.4996 13.1145L3.15008 20.464C2.98879 20.6306 2.7961 20.7636 2.58313 20.8553C2.37016 20.9471 2.14113 20.9957 1.90926 20.9985C1.40298 20.9985 0.917428 20.7974 0.55943 20.4394C0.201432 20.0814 0.000310599 19.5958 0.000310599 19.0895C-0.00414012 18.8555 0.0392827 18.623 0.127914 18.4064C0.216546 18.1897 0.348517 17.9934 0.515728 17.8296L7.94156 10.4992L0.515728 3.07342C0.201104 2.76561 0.0166123 2.3488 0.000310599 1.90895C0.000310599 1.40267 0.201432 0.917118 0.55943 0.55912C0.917428 0.201121 1.40298 0 1.90926 0C2.36741 0.00572686 2.80647 0.190895 3.13099 0.515417Z"
                fill="white"
              />
            </svg>
          </button>
          {!drink && (
            <p className="italic text-sm text-gray-300">Drink not found</p>
          )}
          {drink && (
            <DrinkBasis drink={drink}>
              <Btn onClick={() => window.location.reload()} className="w-full">
                Full Recipe
              </Btn>
            </DrinkBasis>
          )}
        </div>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
