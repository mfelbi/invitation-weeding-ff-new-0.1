#!/bin/bash

# Optimasi gambar untuk web
echo "🖼️  Optimizing images for web..."

# Buat folder backup
mkdir -p backup
cp *.webp backup/ 2>/dev/null || true

# Optimasi dengan cwebp jika tersedia
if command -v cwebp &> /dev/null; then
    echo "Using cwebp for optimization..."
    cwebp -q 75 cewe1.webp -o cewe1_opt.webp
    cwebp -q 75 cowo1.webp -o cowo1_opt.webp
    cwebp -q 80 bg1.webp -o bg1_opt.webp

    # Replace original files
    mv cewe1_opt.webp cewe1.webp
    mv cowo1_opt.webp cowo1.webp
    mv bg1_opt.webp bg1.webp
else
    echo "cwebp not found. Images remain unchanged."
    echo "Consider installing webp-tools for better optimization."
fi

echo "✅ Image optimization complete!"
ls -lh *.webp