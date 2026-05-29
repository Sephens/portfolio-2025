/**
 * writeupsIndex.js
 *
 * Data source for the Writeups section.
 * Each entry represents a hands-on lab writeup or technical deep-dive
 * that lives as a standalone HTML file in /public/writeups/.
 *
 * Add new writeups by pushing a new object into this array.
 * The `href` field should match the file path under /public.
 */

const writeups = [
  {
    id: "WR-001",
    title: "BigQuery SQL Lab",
    author: "Steve",
    category: "Data Engineering",
    tags: ["BigQuery", "SQL", "Google Cloud", "Analytics"],
    topic: "Data Engineering",
    abstract:
      "Querying 21 million rows of Google Merchandise Store analytics data using Standard SQL on Google Cloud BigQuery — covering deduplication, CTEs, funnel analysis, and abandoned cart detection.",
    highlights: [
      "615 duplicate rows identified via GROUP BY across all 32 fields",
      "35.68% cart-to-purchase conversion rate uncovered",
      "CTEs, CASE statements, and composite key construction",
    ],
    href: "/writeups/BigQuery.html",
    date: "2026-01-01",
    readTime: "8 min read",
    accent: "#1a6bb5",
    accentBg: "#e8f2fc",
    isPublished: true,
    isFeatured: true,
  },

  /* ── Add future writeups below ──────────────────────────────────
  {
    id: "WR-002",
    title: "Your Next Writeup",
    author: "Steve",
    category: "Category",
    tags: ["Tag1", "Tag2"],
    topic: "Topic",
    abstract: "Short description of what this writeup covers.",
    highlights: ["Key finding 1", "Key finding 2", "Key finding 3"],
    href: "/writeups/your-writeup.html",
    date: "2026-02-01",
    readTime: "5 min read",
    accent: "#c9963a",
    accentBg: "#fdf6e8",
    isPublished: true,
    isFeatured: false,
  },
  ─────────────────────────────────────────────────────────────── */
]

export default writeups.filter((w) => w.isPublished)