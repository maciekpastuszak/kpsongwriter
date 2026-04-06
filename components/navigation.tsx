"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "STRONA GŁÓWNA", path: "/home" },
  { label: "PORTFOLIO", path: "/portfolio" },
  { label: "KATALOG PIOSENEK", path: "/katalog-piosenek" },
  { label: "KATALOG TEKSTÓW", path: "/katalog-tekstow" },
  { label: "LISTA UTWORÓW", path: "/lista-utworow" },
  { label: "LICENCJE", path: "/licencje" },
  { label: "DEMO", path: "/demo" },
  { label: "KONTAKT", path: "/kontakt" },
  { label: "LOGOWANIE", path: "/logowanie" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1929]/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-330 mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="transition-transform hover:scale-105">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs tracking-wider transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    boxShadow:
                      pathname === item.path
                        ? "0 0 8px rgba(212,175,55,0.6)"
                        : "none",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm tracking-wider transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
