#!/usr/bin/env python3
"""
Convert all raster images (JPG, JPEG, PNG) in assets directories to WebP with quality=85.
Supports RGBA transparency, EXIF orientation, and syncs across:
  - public/assets/
  - tham khảo slide/
"""

import os
import sys
from pathlib import Path
from PIL import Image, ImageOps

ASSET_DIRS = [
    Path("public/assets"),
    Path("tham khảo slide")
]

def convert_image(src_path: Path, quality: int = 85) -> tuple[Path, int, int]:
    """Convert a single image to webp with quality=85. Returns (webp_path, orig_size, new_size)."""
    webp_path = src_path.with_suffix(".webp")
    orig_size = src_path.stat().st_size
    
    with Image.open(src_path) as img:
        # Handle EXIF orientation
        try:
            img = ImageOps.exif_transpose(img)
        except Exception:
            pass

        # Handle color modes
        if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
            # Has alpha channel
            img = img.convert("RGBA")
            img.save(webp_path, format="WEBP", quality=quality, method=6)
        else:
            img = img.convert("RGB")
            img.save(webp_path, format="WEBP", quality=quality, method=6)
            
    new_size = webp_path.stat().st_size
    return webp_path, orig_size, new_size

def process_directory(asset_dir: Path, quality: int = 85, force: bool = False):
    if not asset_dir.exists():
        print(f"Directory does not exist yet: {asset_dir}")
        return

    print(f"\nProcessing {asset_dir}...")
    raster_exts = {".jpg", ".jpeg", ".png"}
    files = [p for p in asset_dir.iterdir() if p.suffix.lower() in raster_exts]
    
    total_orig = 0
    total_new = 0
    count = 0
    skipped = 0

    for src_path in sorted(files):
        # Skip temporary or backup files
        if ".test." in src_path.name or ".orig." in src_path.name:
            continue
        webp_path = src_path.with_suffix(".webp")
        # If webp exists and is newer than source, and not forced, skip
        if not force and webp_path.exists() and webp_path.stat().st_mtime >= src_path.stat().st_mtime:
            skipped += 1
            continue

        try:
            webp_path, orig_sz, new_sz = convert_image(src_path, quality)
            total_orig += orig_sz
            total_new += new_sz
            count += 1
            saved_pct = (1 - new_sz / orig_sz) * 100 if orig_sz > 0 else 0
            print(f"  ✓ {src_path.name} -> {webp_path.name} ({orig_sz//1024}KB -> {new_sz//1024}KB, -{saved_pct:.1f}%)")
        except Exception as e:
            print(f"  ✗ Error converting {src_path.name}: {e}")

    if count > 0:
        saved_mb = (total_orig - total_new) / (1024 * 1024)
        print(f"Converted {count} images in {asset_dir} (skipped {skipped} up-to-date):")
        print(f"  Total original: {total_orig / (1024*1024):.2f} MB")
        print(f"  Total WebP:     {total_new / (1024*1024):.2f} MB")
        print(f"  Savings:        {saved_mb:.2f} MB ({(1 - total_new/total_orig)*100:.1f}% reduction)")
    else:
        print(f"All {skipped} images up to date.")

if __name__ == "__main__":
    quality = 85
    force = False
    for arg in sys.argv[1:]:
        if arg == "--force":
            force = True
        else:
            try:
                quality = int(arg)
            except ValueError:
                pass
            
    root_dir = Path(__file__).resolve().parent.parent
    os.chdir(root_dir)
    print(f"Starting WebP conversion (quality={quality}, force={force})...")
    for d in ASSET_DIRS:
        process_directory(d, quality, force)
