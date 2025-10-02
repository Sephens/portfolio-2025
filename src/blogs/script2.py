import os
import zipfile
import yaml
import json
import math

# --- CONFIG ---
ZIP_FILE = "_content.zip"         # your blogs zip file
OUTPUT_JS = "blogList.js"         # metadata-only output

# --- Step 1: Extract zip ---
extract_path = "_content"
if not os.path.exists(extract_path):
    with zipfile.ZipFile(ZIP_FILE, "r") as zip_ref:
        zip_ref.extractall(extract_path)

# --- Step 2: Parser for Markdown with optional frontmatter ---
def parse_markdown_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read().strip()

    metadata = {}
    content = text

    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            try:
                metadata = yaml.safe_load(parts[1]) or {}
            except Exception:
                metadata = {}
            content = parts[2].strip()

    return metadata, content

# --- Step 3: Estimate read time ---
def estimate_read_time(content, wpm=200):
    words = content.split()
    minutes = math.ceil(len(words) / wpm)
    return f"{minutes} min read"

# --- Step 4: Build blog objects (metadata only) ---
blogs = []
for root, _, files in os.walk(extract_path):
    for file in files:
        if file.endswith(".md"):
            path = os.path.join(root, file)
            slug = os.path.splitext(file)[0]
            metadata, content = parse_markdown_file(path)

            blogs.append({
                "id": len(blogs) + 1,
                "title": metadata.get("title", slug.replace("-", " ").title()),
                "excerpt": metadata.get("excerpt", content[:120].strip() + "..."),
                "date": metadata.get("date", "2025-01-01"),
                "readTime": estimate_read_time(content),
                "category": metadata.get("category", "General"),
            })

# --- Step 5: Export to JS file ---
with open(OUTPUT_JS, "w", encoding="utf-8") as f:
    f.write("export const blogPostsMeta = [\n")
    for blog in blogs:
        f.write("  {\n")
        f.write(f"    id: {blog['id']},\n")
        f.write(f"    title: {json.dumps(blog['title'])},\n")
        f.write(f"    excerpt: {json.dumps(blog['excerpt'])},\n")
        f.write(f"    date: {json.dumps(blog['date'])},\n")
        f.write(f"    readTime: {json.dumps(blog['readTime'])},\n")
        f.write(f"    category: {json.dumps(blog['category'])},\n")
        f.write("  },\n")
    f.write("]\n")

print(f"✅ Exported {len(blogs)} blog previews into {OUTPUT_JS}")
