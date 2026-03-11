import type { Metadata } from "next";
import SearchBar from "../components/SearchBar";

export const metadata: Metadata = {
    title: "Resources — DevHub",
    description:
        "Browse our curated collection of developer tools, frameworks, and platforms.",
};

export default function ResourcesPage() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Developer <span className="gradient-text">Resources</span>
                </h1>
                <p className="mt-3 text-gray-400 sm:text-lg">
                    Explore tools and frameworks loved by the community.
                </p>
            </div>

            <SearchBar />
        </section>
    );
}
