import { site2026 } from "@/content/siteContent";
import generated from "@/content/modules.generated.json";

// The modules, in site2026's order. Words come from the module master via
// content/modules.generated.json (npm run sync:modules). Two columns at most,
// hairlines instead of cards (DESIGN.md §4).
export default function Modules() {
  const { modulesIntro, moduleOrder } = site2026.howItWorks;
  const byKey = new Map(generated.modules.map((m) => [m.key, m]));
  const modules = moduleOrder.flatMap((key) => byKey.get(key) ?? []);

  return (
    <div style={{ marginTop: "96px" }}>
      <p className="pl-body" style={{ margin: 0, color: "var(--text)" }}>
        {modulesIntro}
      </p>
      <ul className="grid md:grid-cols-2" style={{ listStyle: "none", margin: "40px 0 0", padding: 0, columnGap: "64px" }}>
        {modules.map((m) => (
          <li key={m.key} style={{ padding: "32px 0", borderTop: "1px solid var(--line)" }}>
            <h3 className="pl-h3" style={{ margin: 0, color: "var(--text)" }}>
              {m.name}
            </h3>
            <p className="pl-body" style={{ margin: "12px 0 0" }}>
              {m.site}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
