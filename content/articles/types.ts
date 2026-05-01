export interface Article {
  slug: string;
  title: string;
  date: string;
  dateModified?: string;
  category: string;
  excerpt: string;
  schemaDescription?: string;
  sections: ArticleSection[];
}

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "bold-paragraph"; label: string; text: string; trailingLink?: { text: string; href: string } }
  | { type: "italic-paragraph"; text: string }
  | { type: "rich-paragraph"; segments: Array<{ text: string; href?: string }> };
