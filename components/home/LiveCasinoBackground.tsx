/**
 * Animated backdrop ported from the 88win1.tw live-casino hero
 * (.w88cat-hero): a dark navy base lit by a neon orb, with a grid that
 * scrolls continuously. No people or photos — CSS only, see the
 * "Live-casino backdrop" block in styles/globals.css. The grid stops under
 * prefers-reduced-motion.
 *
 * `orb` places the glow: "top" (centred above the content, as on 88win1.tw)
 * or "side" (top-right, for bands with a heading on the left).
 */
export function LiveCasinoBackground({ orb = "top" }: { orb?: "top" | "side" }) {
  return (
    <div aria-hidden="true" className="lc-bg pointer-events-none absolute inset-0 overflow-hidden">
      <div className="lc-grid" />
      <div className={`lc-orb ${orb === "side" ? "lc-orb-side" : ""}`} />
    </div>
  );
}
