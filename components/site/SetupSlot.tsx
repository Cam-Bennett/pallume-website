type Props = {
  kind: string;
  id: string;
  shows: string;
};

// A marked placeholder for a screenshot or video Camden records. Never a fake.
export default function SetupSlot({ kind, id, shows }: Props) {
  return (
    <div
      role="note"
      style={{
        marginTop: "24px",
        padding: "16px",
        border: "1px dashed var(--icon)",
        borderRadius: "8px",
        color: "var(--text-muted)",
        fontSize: "15px",
        lineHeight: 1.6,
      }}
    >
      <p style={{ margin: 0, fontWeight: 500, color: "var(--text-soft)" }}>
        {kind.toUpperCase()} SLOT · {id}
      </p>
      <p style={{ margin: "8px 0 0" }}>Must show: {shows}</p>
    </div>
  );
}
