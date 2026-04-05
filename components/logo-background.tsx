export function LogoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_42%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.7))]" />

      <div className="absolute -left-24 top-12 h-[340px] w-[340px] animate-[float_18s_ease-in-out_infinite] opacity-[0.04]">
        <img
          src="/TOUGHTORQ-logo.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute right-[-80px] top-[22%] h-[300px] w-[300px] animate-[float_22s_ease-in-out_infinite_reverse] opacity-[0.035]">
        <img
          src="/TOUGHTORQ-logo.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute left-[18%] bottom-[-60px] h-[380px] w-[380px] animate-[float_26s_ease-in-out_infinite] opacity-[0.03]">
        <img
          src="/TOUGHTORQ-logo.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
    </div>
  );
}