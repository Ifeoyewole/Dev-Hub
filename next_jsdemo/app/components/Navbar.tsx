"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/resources", label: "Resources" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
                        D
                    </span>
                    <span className="text-lg font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
                        DevHub
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-violet-500/15 text-violet-400"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Burger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex md:hidden flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-40" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-1 px-6 pb-4">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                                            ? "bg-violet-500/15 text-violet-400"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
