import { LogoMark } from "@/components/ui/Logo";

/**
 * First-visit intro: the mark on white with a gold ring drawing around it,
 * then the whole layer lifts away. It's an overlay only (the page renders
 * and is crawlable underneath), it's driven entirely by CSS (so it ends on
 * its own even if JavaScript never runs), and it plays once per browser
 * session: the inline script in the root layout tags <html> with
 * `data-intro-seen` on later page views, which hides it before first
 * paint. Reduced-motion users never see it. Styles live in globals.css.
 */
export function IntroLoader() {
  return (
    <div id="intro-loader" aria-hidden="true">
      <div className="intro-mark">
        <svg viewBox="0 0 120 120" className="intro-ring">
          <circle cx="60" cy="60" r="56" />
        </svg>
        <LogoMark className="h-[72px] w-[72px]" />
      </div>
      <p className="intro-word">PRESTIGE</p>
    </div>
  );
}
