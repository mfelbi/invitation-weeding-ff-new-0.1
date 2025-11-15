# Wedding Invitation - Vercel Deployment

## 🚀 Deploy ke Vercel

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Import ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New..." → "Project"
   - Import repository GitHub kamu
   - Vercel akan otomatis mendeteksi sebagai static site

3. **Konfigurasi Build**
   - Framework Preset: "Other"
   - Build Command: `npm run build:public`
   - Output Directory: `public`
   - Install Command: `npm install`

4. **Deploy**
   - Klik "Deploy"
   - Tunggu beberapa menit
   - Website akan live di subdomain Vercel

### ⚙️ Custom Domain (Opsional)

1. Buka dashboard Vercel
2. Klik project → Settings → Domains
3. Add custom domain
4. Update DNS records

### 📝 Checklist Sebelum Deploy:

- [ ] Update data pernikahan di `wedding-config.js`
- [ ] Ganti foto prewedding di `assets/images/`
- [ ] Optimasi gambar (jalankan `optimize-images.sh`)
- [ ] Test semua fitur di local
- [ ] Pastikan musik dan video work

### 🔧 Fitur yang Tersedia:
- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Countdown timer
- ✅ Image gallery
- ✅ Google Maps integration
- ✅ Background music
- ✅ Love story
- ✅ Confetti animation
- ✅ Save to calendar

### ❌ Fitur yang Dinonaktifkan (Static Hosting):
- Comment system
- Like system
- Admin panel
- Dynamic data

### 📊 Optimasi:
- Gambar dioptimasi untuk web
- Caching headers disetel
- Bundle size minimal
- Fast loading

## 🌐 Hasil

Website akan dapat diakses melalui:
- Local: `npm run dev`
- Production: `https://your-project.vercel.app`