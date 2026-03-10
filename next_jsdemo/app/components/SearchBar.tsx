"use client";

import { useState } from "react";
import { resources, type Resource } from "../data/resources";
import ResourceCard from "./ResourceCard";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const filtered: Resource[] = resources.filter(
        (r) =>
            r.name.toLowerCase().includes(query.toLowerCase()) ||
            r.description.toLowerCase().includes(query.toLowerCase()) ||
            r.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            {/* Search input */}
            <div className="relative mx-auto mb-10 max-w-md">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                    type="text"
                    placeholder="Search resources…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-violet-500/50 focus:bg-violet-500/[0.04]"
                />
            </div>

            {/* Results */}
            {filtered.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((resource) => (
                        <ResourceCard
                            key={resource.slug}
                            slug={resource.slug}
                            name={resource.name}
                            description={resource.description}
                            category={resource.category}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-3 py-16 text-center">
                    <span className="text-4xl">🔍</span>
                    <p className="text-gray-400">
                        No resources found for &ldquo;{query}&rdquo;
                    </p>
                    <button
                        onClick={() => setQuery("")}
                        className="mt-2 rounded-lg bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-400 hover:bg-violet-500/25 transition-colors"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </>
    );
}
