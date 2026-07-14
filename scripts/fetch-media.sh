#!/bin/bash
# ============================================================
# AUTHENTIC MEDIA LOCALIZER — run on your own machine:
#   bash scripts/fetch-media.sh
# Downloads every wp-content image/video referenced on the SCM
# machine pages into public/media/<machine>/ so the new site
# owns its assets before launch. Then update lib/assets.js to
# point at /media/... paths instead of the live SCM URLs.
# ============================================================
set -e
PAGES=(
  "ccfw   https://southerncoastalmachinery.com/ccfw-machines/"
  "bcfw   https://southerncoastalmachinery.com/bcfw-machines/"
  "climb  https://southerncoastalmachinery.com/climb-machines/"
  "nylon  https://southerncoastalmachinery.com/nylon-machines/"
  "web    https://southerncoastalmachinery.com/meltblown-web-machines/"
  "swfw   https://southerncoastalmachinery.com/scm-filter-winder/"
  "about  https://southerncoastalmachinery.com/about-us/"
)
for entry in "${PAGES[@]}"; do
  name=$(echo "$entry" | awk '{print $1}')
  url=$(echo "$entry" | awk '{print $2}')
  dir="public/media/$name"
  mkdir -p "$dir"
  echo "== $name ($url)"
  curl -sL "$url" \
    | grep -oE 'https://southerncoastalmachinery\.com/wp-content/uploads/[^"'"'"' )]+\.(jpe?g|png|webp|mp4|m4v)' \
    | sort -u \
    | while read -r asset; do
        fname=$(basename "$asset")
        if [ ! -f "$dir/$fname" ]; then
          echo "   downloading $fname"
          curl -sL "$asset" -o "$dir/$fname"
        fi
      done
done
echo ""
echo "Done. Files are in public/media/. Update lib/assets.js to use"
echo "local /media/<machine>/<file> paths, then commit and push."
