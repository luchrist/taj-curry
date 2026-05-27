import config from "@/config/restaurant";

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-[100dvh] bg-bone pt-24 pb-20">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <div className="mb-10">
          <a href="/" className="text-sm text-body/60 hover:text-ink transition-colors">
            ← {config.name}
          </a>
          <h1 className="mt-4 font-display text-3xl md:text-4xl">{title}</h1>
          <div className="mt-3 h-[3px] w-12 bg-ink/70 rounded-full" />
        </div>
        <div className="prose prose-sm max-w-none text-body leading-relaxed [&_h2]:font-display [&_h2]:text-ink [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-1">
          {children}
        </div>
      </div>
    </main>
  );
}
