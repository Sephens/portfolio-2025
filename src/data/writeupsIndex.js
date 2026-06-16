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

{
  id: "WR-002",
  title: "Troubleshooting SQL Queries in Google BigQuery",
  author: "Steve",
  category: "Data Engineering",
  tags: ["BigQuery", "SQL", "Google Cloud", "Debugging", "Analytics"],
  topic: "Data Engineering",
  abstract:
    "Diagnosing and fixing 10 real-world SQL errors across syntax, logic, and data quality categories — using BigQuery's query validator and analytical reasoning on the Google Merchandise Store ecommerce dataset.",
  highlights: [
    "10+ SQL errors diagnosed: typos, missing commas, wrong aggregation functions, and NULL handling",
    "WHERE vs HAVING distinction applied to filter post-aggregation results correctly",
    "Uncovered upstream data quality anomaly — raw front-end template code captured by analytics",
  ],
  href: "/writeups/BigQuery_SQL_Troubleshooting.html",
  date: "2026-01-01",
  readTime: "7 min read",
  accent: "#1a6bb5",
  accentBg: "#e8f2fc",
  isPublished: true,
  isFeatured: false,
},

{
  id: "WR-003",
  title: "Troubleshooting and Solving Data Join Pitfalls",
  category: "Data Engineering",
  tags: ["BigQuery", "SQL", "Google Cloud", "Data Integrity", "Joins"],
  abstract: "Diagnosing four critical SQL join pitfalls on a live ecommerce dataset — from many-to-many key multiplication and silent record loss, to unintentional cross joins that triple output without warning.",
  highlights: [
    "154 units of inventory silently reported as 462 due to N:N key join",
    "819 SKUs (43% of dataset) dropped by a wrong INNER JOIN",
    "Unintentional cross join inflated 82 rows to 246 after a lookup table grew",
  ],
  href: "/writeups/BigQuery_Join_Pitfalls.html",
  readTime: "9 min read",
  accent: "#1a6bb5",
  accentBg: "#e8f2fc",
  isPublished: true,
  isFeatured: false,
},

{
  id: "WR-004",
  title: "Cleaning and Transforming Your Data",
  category: "Data Engineering",
  tags: ["BigQuery", "SQL", "Data Quality", "ETL", "Google Cloud", "Data Cleaning"],
  abstract:
    "A comprehensive study of the five data integrity principles — validity, accuracy, completeness, consistency, and uniformity — alongside every essential SQL cleaning technique in BigQuery and a comparison of Google Cloud's ETL tool ecosystem.",
  highlights: [
    "20+ SQL techniques from NULL handling and SAFE_CAST to production-grade multi-stage CTE pipelines",
    "Five data quality dimensions explained with real-world analogies including the $125M NASA Mars Orbiter failure",
    "Comparative guide to Cloud Data Fusion, Dataflow, Dataprep, and Dataproc — when to use each",
  ],
  href: "/writeups/Data_Cleaning_Transforming.html",
  readTime: "12 min read",
  accent: "#1a6bb5",
  accentBg: "#e8f2fc",
  isPublished: true,
  isFeatured: false,
},

{
  id: "WR-006",
  title: "Creating Permanent Tables and Access-Controlled Views in BigQuery",
  category: "Data Engineering",
  tags: ["BigQuery", "SQL", "Google Cloud", "Access Control", "Data Architecture"],
  abstract:
    "Diagnosing six broken CREATE TABLE statements, building a production-grade revenue reporting table with formal schema constraints, and implementing SESSION_USER-gated views with expiry timestamps and domain-based row-level access control.",
  highlights: [
    "Six CREATE TABLE errors diagnosed — including Rule 2's silent positional column mismatch, the most dangerous failure mode",
    "97-transaction revenue table built with NOT NULL enforcement, CAST type conversion, and DISTINCT deduplication",
    "Domain-based row-level security via SESSION_USER() with 90-day view expiry — the foundation of BigQuery Row Access Policies",
  ],
  href: "/writeups/BigQuery_Tables_Views.html",
  readTime: "10 min read",
  accent: "#1a6bb5",
  accentBg: "#e8f2fc",
  isPublished: true,
  isFeatured: false,
}

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