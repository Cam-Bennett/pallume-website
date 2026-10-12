import { site2026 } from "@/content/siteContent";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.about.meta, path: "/about" });

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumb("About", "/about")} />
      {children}
    </>
  );
}
