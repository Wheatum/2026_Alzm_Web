"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/memory-check", label: "Memory Check" },
  { href: "/risk-factors", label: "Risk Factors" },
  { href: "/brain-health", label: "Brain Health" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/exercise", label: "Exercise" },
  { href: "/dashboard", label: "Monitoring Dashboard" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-normal text-ink"
          aria-label="NestMemory home"
        >
          NestMemory
        </Link>
        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <div
          id="primary-menu"
          className={`${open ? "absolute left-0 right-0 top-full block border-b border-slate-200 bg-white px-4 py-3 shadow-soft" : "hidden"} md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-center md:justify-end">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-teal text-white"
                        : "text-slate-700 hover:bg-mist hover:text-ink"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
