import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
}

export function BotaoMenu({ open, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
        className,
      )}
      aria-controls="mobile-menu"
      aria-expanded="false"
      {...props}
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Abrir menu principal</span>
      {!open ? (
        <svg
          className="size-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      ) : (
        <svg
          className="size-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
}
