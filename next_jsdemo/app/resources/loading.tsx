export default function Loading() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            {/* Header skeleton */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <div className="h-9 w-64 rounded-lg bg-white/10 skeleton-pulse" />
                <div className="h-5 w-80 rounded-lg bg-white/[0.06] skeleton-pulse [animation-delay:0.2s]" />
            </div>

            {/* Search skeleton */}
            <div className="mx-auto mb-10 max-w-md">
                <div className="h-12 w-full rounded-xl bg-white/[0.06] skeleton-pulse [animation-delay:0.3s]" />
            </div>

            {/* Card skeletons */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                    >
                        <div
                            className="h-6 w-20 rounded-full bg-white/[0.08] skeleton-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                        <div
                            className="h-5 w-3/4 rounded-lg bg-white/[0.08] skeleton-pulse"
                            style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
                        />
                        <div className="flex flex-col gap-2">
                            <div
                                className="h-4 w-full rounded bg-white/[0.05] skeleton-pulse"
                                style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                            />
                            <div
                                className="h-4 w-2/3 rounded bg-white/[0.05] skeleton-pulse"
                                style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
