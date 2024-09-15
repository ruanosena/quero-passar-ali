"use client";
import { cn } from "@/lib/utils";
import {
  FormEvent,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  padraoAberto?: boolean;
}

export function Procurar({ padraoAberto = false, className, ...props }: Props) {
  const [aberto, setAberto] = useState(padraoAberto);
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const eventsType: (keyof HTMLElementEventMap)[] = [
        "pointerenter",
        "click",
      ];
      eventsType.forEach((type) =>
        node.addEventListener(type, () => setAberto(true), {
          once: true,
        }),
      );
    }
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }, []);

  useEffect(() => {
    if (aberto) inputRef.current?.focus();
  }, [aberto]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-14 w-full max-w-xl items-center justify-center",
        className,
      )}
      {...props}
    >
      {aberto ? (
        <form onSubmit={onFormSubmit}>
          <label htmlFor="pesquisar" className="sr-only">
            Procurar
          </label>
          <input
            ref={inputRef}
            type="text"
            name="pesquisa"
            id="pesquisar"
            className="block h-12 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-xl text-black ring-4 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-indigo-800 sm:text-xl"
            placeholder="Vendinha do José"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm text-gray-400 hover:text-gray-800 focus:ring-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </form>
      ) : (
        <button
          type="button"
          className="pointer-events-none relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Procurar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      )}
    </div>
  );
}
