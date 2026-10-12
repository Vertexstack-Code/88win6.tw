import type { IconName } from "@/lib/types";

// Small hand-rolled outline icon set — avoids an icon library dependency for
// the ~24 glyphs this site uses.
const ICON_PATHS: Record<IconName, React.ReactNode> = {
  cards: (
    <>
      <rect x="3" y="6" width="11" height="15" rx="2" transform="rotate(-8 8.5 13.5)" />
      <rect x="10" y="4" width="11" height="15" rx="2" transform="rotate(8 15.5 11.5)" />
    </>
  ),
  dice: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  slot: (
    <>
      <rect x="3" y="5" width="18" height="13" rx="2.5" />
      <path d="M9 5v13" />
      <path d="M15 5v13" />
      <path d="M6 21h12" />
    </>
  ),
  sports: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3.2 12 8" />
      <path d="m4.2 8.6 4.4 2.6" />
      <path d="m19.8 8.6-4.4 2.6" />
      <path d="M8.6 20.4 10.6 15" />
      <path d="M15.4 20.4 13.4 15" />
      <path d="m8.6 11.2 3.4 2.4 3.4-2.4-1.3-4H9.9l-1.3 4Z" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a2.3 2.3 0 0 0 0 4.6v1.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a2.3 2.3 0 0 0 0-4.6V8.5Z" />
      <path d="M14 7v10" strokeDasharray="2 2" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c3-4 6.5-6 10-6s6.5 2 8 6c-1.5 4-4.5 6-8 6s-7-2-10-6Z" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M21 12c-1.2 1.2-2.4 1.8-3.6 1.8" />
    </>
  ),
  crown: (
    <>
      <path d="M3 8.5 6.5 13 12 5.5 17.5 13 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8.5Z" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="9" width="18" height="11" rx="2" />
      <path d="M3 13h18" />
      <path d="M12 9v11" />
      <path d="M12 9C10.5 6 9 4.5 7.5 4.5A2.25 2.25 0 0 0 7.5 9H12Z" />
      <path d="M12 9c1.5-3 3-4.5 4.5-4.5A2.25 2.25 0 0 1 16.5 9H12Z" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4.5" height="6" rx="2" />
      <rect x="17" y="13" width="4.5" height="6" rx="2" />
      <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <circle cx="12" cy="15.2" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11a1.5 1.5 0 0 1 1.5 1.5v1" />
      <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" />
      <circle cx="16.5" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M12 20V6" />
      <path d="M17 20v-9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.3c2.6.5 4.5 2.5 4.5 5.2" />
    </>
  ),
  star: <path d="M12 3l2.7 5.9 6.3.7-4.7 4.4 1.3 6.3L12 17.3 6.4 20.3l1.3-6.3-4.7-4.4 6.3-.7L12 3Z" />,
  check: <path d="M4 12l5 5L20 6" />,
  bank: (
    <>
      <path d="M3.5 10 12 4l8.5 6" />
      <path d="M4 10h16" />
      <path d="M4 20h16" />
      <path d="M6 10v10" />
      <path d="M10 10v10" />
      <path d="M14 10v10" />
      <path d="M18 10v10" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.2" />
      <path d="M3 10.5h18" />
      <path d="M7 15h4" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4.5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4.7A2.2 2.2 0 0 0 4 9.3c.4 1 1.4 1.7 2.5 1.7H7" />
      <path d="M17 5h2.3A2.2 2.2 0 0 1 20 9.3c-.4 1-1.4 1.7-2.5 1.7H17" />
      <path d="M12 13v3" />
      <path d="M9 20.5h6" />
      <path d="M9.6 16.5h4.8l.6 4h-6l.6-4Z" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l7 6-7 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="M19 15l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17" />
      <path d="M3.5 14.5h17" />
      <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" />
    </>
  ),
  chat: <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3.5V6Z" />,
  download: (
    <>
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 17.5v1.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1.5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 15.5v-11" />
      <path d="m7.5 9.5 4.5-4.5 4.5 4.5" />
      <path d="M4.5 17.5v1.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.6a2.8 2.8 0 1 1 4.3 2.4c-.9.6-1.5 1.2-1.5 2.2" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  bulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
      <path d="M9.5 18.5h5" />
      <path d="M10.3 21h3.4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4" />
      <path d="M12 18.6V21" />
      <path d="m4.9 6.9 1.7 1.7" />
      <path d="m17.4 15.4 1.7 1.7" />
      <path d="M3 12h2.4" />
      <path d="M18.6 12H21" />
      <path d="m4.9 17.1 1.7-1.7" />
      <path d="m17.4 8.6 1.7-1.7" />
    </>
  ),
  dots: (
    <>
      <circle cx="6" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  line: (
    <>
      <path d="M4 5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8L7 20v-3.5H6a2 2 0 0 1-2-2v-9Z" />
      <path d="M8 10.5v-2" />
      <path d="M12 10.5v-2" />
      <path d="M16 8.5v2a1.3 1.3 0 0 0 1.3 1.3H18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" />
    </>
  ),
  alertTriangle: (
    <>
      <path d="M12 4 21.5 20h-19L12 4Z" />
      <path d="M12 10v4.5" />
      <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
