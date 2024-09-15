"use client";
import { BotaoMenu } from "@/components/botao-menu";
import { Procurar } from "@/components/procurar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuPrincipalAberto, setMenuPrincipalAberto] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-[4rem] items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <BotaoMenu
              className="sm:hidden"
              open={menuPrincipalAberto}
              onClick={() => setMenuPrincipalAberto((estado) => !estado)}
            />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:gap-x-6">
            {/* Logo */}
            <Link href="/" className="flex flex-shrink-0 items-center rounded-md bg-gray-700 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                <path d="M16 17h4" />
                <path d="M4 13h4" />
              </svg>
              <span className="font-mono text-lg font-semibold tracking-wider">QPA</span>
            </Link>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Contato
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Termos de uso
                </a>
              </div>
            </div>
          </div>
        </div>

        <Procurar className="self-center" />
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {menuPrincipalAberto && (
        <div className="h-[calc(100dvw_-_4rem)] sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Contato
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Termos de uso
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
