"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold">
          armadhanihiro.dev<span className="text-violet-500">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-5 py-2 text-sm transition hover:bg-white hover:text-black md:inline-flex"
        >
          Let&apos;s Talk ↗
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4 text-sm text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
