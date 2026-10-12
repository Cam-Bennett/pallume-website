type Props = {
  lines: readonly string[];
  as?: "h1" | "h2";
  className?: string;
};

// DESIGN.md §3: first sentence in --text, second in --text-muted. One per section.
export default function TwoTone({ lines, as: Tag = "h2", className = "pl-h2" }: Props) {
  const [first, ...rest] = lines;
  return (
    <Tag className={className} style={{ margin: 0, color: "var(--text)" }}>
      {first}
      {rest.length > 0 && <span style={{ color: "var(--text-muted)" }}> {rest.join(" ")}</span>}
    </Tag>
  );
}
