"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center">B</div>
          <span className="text-lg">Brand</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900">
              {n.label}
            </a>
          ))}
          <Button className="rounded-2xl">Book a Call</Button>
        </nav>
        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-gray-700">
                {n.label}
              </a>
            ))}
            <Button className="rounded-2xl w-full">Book a Call</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header }
