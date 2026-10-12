import type { Metadata } from "next";

// Private design previews: never indexed (robots.txt also disallows /preview/).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
