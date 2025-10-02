import os
import json
import zipfile
from bs4 import BeautifulSoup

# Paths
zip_path = "_content.zip"   # your uploaded blogs zip
output_json = "mblogs.js"

# Extract zip
extract_folder = "_content"
with zipfile.ZipFile(zip_path, "r") as zip_ref:
    zip_ref.extractall(extract_folder)

blogs = []
id_counter = 1

for root, _, files in os.walk(extract_folder):
    for file in files:
        if file.endswith(".md"):
            file_path = os.path.join(root, file)

            # Read markdown file
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Create excerpt (first 50 words max)
            excerpt = " ".join(content.split()[:50]) + "..."

            # Try to extract a title (first markdown heading)
            title = "Untitled Blog"
            for line in content.splitlines():
                if line.strip().startswith("#"):
                    title = line.lstrip("#").strip()
                    break

            blogs.append({
                "id": id_counter,
                "title": title,
                "excerpt": excerpt,
                "date": "2025-01-01",   # placeholder, can update
                "readTime": f"{max(1, len(content.split()) // 200)} min read",
                "category": "General",
                "content": content   # full markdown here
            })

            id_counter += 1

# Save as JS export
with open(output_json, "w", encoding="utf-8") as f:
    f.write("export const blogPosts = [\n")
    for blog in blogs:
        f.write("  {\n")
        f.write(f"    id: {blog['id']},\n")
        f.write(f"    title: {json.dumps(blog['title'])},\n")
        f.write(f"    excerpt: {json.dumps(blog['excerpt'])},\n")
        f.write(f"    date: {json.dumps(blog['date'])},\n")
        f.write(f"    readTime: {json.dumps(blog['readTime'])},\n")
        f.write(f"    category: {json.dumps(blog['category'])},\n")
        f.write(f"    content: {json.dumps(blog['content'])},\n")
        f.write("  },\n")
    f.write("]\n")

print(f"✅ Exported {len(blogs)} blogs to {output_json}")
