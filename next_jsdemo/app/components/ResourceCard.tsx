import Link from "next/link";

interface ResourceCardProps {
    slug: string;
    name: string;
    description: string;
    category: string;
}

export default function ResourceCard({
    slug,
    name,
    description,
    category,
}: ResourceCardProps) {
    return (
        <Link
            href={`/resources/${slug}`}
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.05] hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1"
        >
            {/* Category badge */}
            <span className="w-fit rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-400 tracking-wide uppercase">
                {category}
            </span>

            {/* Name */}
            <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                {name}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400 line-clamp-2">
                {description}
            </p>

            {/* Arrow indicator */}
            <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-violet-400 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                View details
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}
