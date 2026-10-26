"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Building2, Download, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Programmes & Services", href: "/programmes" },
    { name: "Actualités", href: "/actualites" },
    { name: "Documents", href: "/documents" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo & Nom */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2.5 bg-blue-900 text-white rounded-xl shadow-md">
              <Building2 className="h-7 w-7" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 tracking-tight block">
                C.S. SHUKRANI
              </span>
              <span className="text-xs text-blue-700 font-semibold tracking-wider uppercase block">
                Excellence & Discipline
              </span>
            </div>
          </Link>
          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Boutons d'action Rapide */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/documents"
              className="flex items-center space-x-2 text-sm font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-lg transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Ressources</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 px-5 py-2.5 rounded-lg shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 text-sm font-semibold text-white bg-blue-900 py-3 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Nous contacter</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}