function Loading() {
  return (
    <div
      className=" dark backdrop-blur-xl
      fixed inset-0 z-9999
      flex items-center justify-center
      bg-charcoal-900/70
      text-offwhite-100 
    "
    >
      <div className="flex flex-col items-center gap-6">
        {/* Brand mark / wordmark */}
        <div className="overflow-hidden">
          <p
            className="
              font-serif text-2xl tracking-[0.25em]
              animate-fade-slide
            "
          >
            CULTRE&nbsp;BOAT
          </p>
        </div>

        {/* Subtle divider */}
        <div className="w-16 h-px bg-charcoal-900/40" />

        {/* Loading pulse */}
        <div className="flex gap-2">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
