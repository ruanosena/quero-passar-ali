"use client";
import { cn } from "@/lib/utils";
import { FormEvent, HTMLAttributes, useCallback, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Procurar({ className, ...props }: Props) {
  const inputRef = useCallback((node: HTMLInputElement | null) => {
    if (node !== null) node.focus();
  }, []);
  const nomePlaceholder = useMemo(() => {
    const nomes = ["Barraca da Ana Maria", "Vendinha do José", "Tenda do Mario"];
    return nomes[Math.floor(Math.random() * nomes.length)];
  }, []);

  const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }, []);

  return (
    <div className={cn("relative flex h-14 w-full max-w-xl items-center justify-center", className)} {...props}>
      <form className="w-full" onSubmit={onFormSubmit}>
        <label htmlFor="pesquisar" className="sr-only">
          Procurar
        </label>
        <input
          ref={inputRef}
          type="text"
          name="pesquisa"
          id="pesquisar"
          className="block h-12 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-xl text-background ring-4 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-indigo-800 sm:text-xl"
          placeholder={nomePlaceholder}
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
    </div>
  );
}
