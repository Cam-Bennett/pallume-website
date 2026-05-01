import Image from "next/image";
import Link from "next/link";

export default function AuthorByline() {
  return (
    <div className="flex items-center gap-3" style={{ marginTop: "20px" }}>
      <Image
        src="/images/camden-headshot.jpg"
        alt="Camden Bennett"
        width={40}
        height={40}
        style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
      <div>
        <Link
          href="/about"
          className="font-body font-medium"
          style={{
            fontSize: "14px",
            color: "#F8F6F0",
            textDecoration: "none",
            display: "block",
            lineHeight: 1.3,
          }}
        >
          Camden Bennett
        </Link>
        <p
          className="font-body"
          style={{ fontSize: "12px", color: "#B0B8C4", margin: 0, lineHeight: 1.3 }}
        >
          Founder, Pallume
        </p>
      </div>
    </div>
  );
}
