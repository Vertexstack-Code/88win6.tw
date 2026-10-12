import type { ReactNode } from "react";

/**
 * Page-width wrapper. Every section shares the header's 1200px cap and side
 * gutters, so content lines up with the nav instead of running edge to edge.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
