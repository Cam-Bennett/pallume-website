type Props = {
  items: readonly string[];
  first?: string;
};

export default function Paragraphs({ items, first = "40px" }: Props) {
  return (
    <div className="flex flex-col" style={{ gap: "24px", marginTop: first }}>
      {items.map((p) => (
        <p key={p} className="pl-body" style={{ margin: 0 }}>
          {p}
        </p>
      ))}
    </div>
  );
}
