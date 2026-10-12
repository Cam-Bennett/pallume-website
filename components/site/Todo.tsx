// Visible marker for words Productization has not written yet. Never ship
// invented copy in its place; every marker is listed in the Phase 0 report.
export default function Todo() {
  return <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>[TODO: copy]</span>;
}
