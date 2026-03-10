import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "../../data/resources";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const resource = resources.find((r) => r.slug === slug);

    if (!resource) {
        return { title: "Resource Not Found — DevHub" };
    }

    return {
        title: `${resource.name} — DevHub`,
        description: resource.description,
    };
}

export function generateStaticParams() {
    return resources.map((r) => ({ slug: r.slug }));
}

export default async function ResourcePage({ params }: PageProps) {
    const { slug } = await params;
    const resource = resources.find((r) => r.slug === slug);

    if (!resource) {
        notFound();
    }

    return (
        <section className="mx-auto max-w-3xl px-6 py-16">
            {/* Back button */}
            <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-violet-400 transition-colors mb-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                Back to Resources
            </Link>

            {/* Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                {/* Category + name */}
                <span className="inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-400 tracking-wide uppercase mb-4">
                    {resource.category}
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl gradient-text mb-4">
                    {resource.name}
                </h1>

                {/* Description */}
                <p className="text-base leading-relaxed text-gray-400 sm:text-lg mb-8">
                    {resource.description}
                </p>

                {/* Visit link */}
                <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5 animated-gradient"
                >
                    Visit {resource.name}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
