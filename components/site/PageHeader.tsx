import type { ReactNode } from "react";

// Top of an inner page: clears the fixed nav, holds the H1 and its lead.
export default function PageHeader({ children }: { children: ReactNode }) {
  return (
    <header style={{ padding: "176px 16px 0" }}>
      <div className="pl-container">
        <div className="pl-reading pl-reveal">{children}</div>
      </div>
    </header>
  );
}
