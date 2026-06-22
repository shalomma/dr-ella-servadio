/** Small section label: a pulse dot + tracked uppercase caption. */
export default function Eyebrow({
  children,
  tone = "aqua",
}: {
  children: React.ReactNode;
  tone?: "aqua" | "light";
}) {
  const text = tone === "light" ? "text-mist-deep" : "text-aqua-ink";
  return (
    <p className={`inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase ${text}`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-aqua opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
      </span>
      {children}
    </p>
  );
}
