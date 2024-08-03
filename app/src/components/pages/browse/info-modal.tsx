"use client";

import { type ElementRef, use, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export function InfoModal({ isOpen, close }: Props) {
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen, close]);

  return hasRendered
    ? createPortal(
        <div className="modal-backdrop" onClick={close}>
          <dialog
            ref={dialogRef}
            className="modal bg-transparent h-72 w-100 lg:w-2/5 slideInWithFade"
            onClose={close}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="hideScrollBar overflow-scroll flex flex-col justify-center gap-5 px-5 py-10 h-full w-full bg-dark-blue bg-opacity-5 shadow-2xl rounded-md"
            >
              <button
                onClick={close}
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
              <div className="w-full flex gap-5 items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7 19.5H14.3V11.7H11.7V19.5ZM13 9.1C13.3683 9.1 13.6773 8.9752 13.9269 8.7256C14.1765 8.476 14.3009 8.16746 14.3 7.8C14.2991 7.43253 14.1743 7.124 13.9256 6.8744C13.6769 6.6248 13.3683 6.5 13 6.5C12.6317 6.5 12.3231 6.6248 12.0744 6.8744C11.8257 7.124 11.7009 7.43253 11.7 7.8C11.6991 8.16746 11.8239 8.47643 12.0744 8.7269C12.3249 8.97736 12.6334 9.10173 13 9.1ZM13 26C11.2017 26 9.51166 25.6585 7.93 24.9756C6.34833 24.2927 4.9725 23.3666 3.8025 22.1975C2.6325 21.0284 1.70647 19.6525 1.0244 18.07C0.342335 16.4875 0.000868312 14.7975 1.64557e-06 13C-0.000865021 11.2025 0.340602 9.51253 1.0244 7.93C1.7082 6.34747 2.63423 4.97163 3.8025 3.8025C4.97077 2.63337 6.3466 1.70733 7.93 1.0244C9.5134 0.341467 11.2034 0 13 0C14.7966 0 16.4866 0.341467 18.07 1.0244C19.6534 1.70733 21.0292 2.63337 22.1975 3.8025C23.3658 4.97163 24.2922 6.34747 24.9769 7.93C25.6616 9.51253 26.0026 11.2025 26 13C25.9974 14.7975 25.6559 16.4875 24.9756 18.07C24.2953 19.6525 23.3692 21.0284 22.1975 22.1975C21.0258 23.3666 19.6499 24.2931 18.07 24.9769C16.4901 25.6607 14.8001 26.0017 13 26Z"
                    fill="#05FFF0"
                  />
                </svg>
                <div className="w-1/2 flex flex-col gap-2">
                  <p className={"text-gray-200"}>
                    Due to the api limitations, you cannot search a cocktail by
                    its name while using filters.
                  </p>
                  <p className={"text-gray-200"}>
                    <span className="font-bold">Update: </span>cross filtering
                    is not functional either, so when you select a filter it
                    disables the other filters.
                  </p>
                </div>
              </div>
            </div>
          </dialog>
        </div>,
        document.getElementById("modal-root")!
      )
    : null;
}
