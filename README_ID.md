# 💝 Valentine's Day Web App

Aplikasi Valentine interaktif dengan kartu ucapan yang indah dan galeri foto otomatis.

## ✨ Fitur

### 🎀 Tab 1: Buat Kartu
- Kartu Valentine yang indah dan interaktif
- Form untuk input nama penerima & pesan
- Preview kartu sebelum mengirim
- Tombol Kirim (notifikasi manual)
- Edit atau buat kartu baru kapan saja

### 📸 Tab 2: Galeri Foto
- 14 foto yang bergeser otomatis setiap 3.5 detik
- Musik latar (tombol play/pause)
- Navigasi dengan tombol panah (← →)
- Klik nomor (1-14) untuk langsung ke foto
- Resume tombol untuk lanjut auto-play

### 🎨 Desain
- Background "love" yang transparan dan berulang di seluruh halaman
- Animasi floating hearts
- Gradient warna Valentine (merah-pink)
- Responsive di mobile & desktop
- Dark mode support

## 🚀 Quick Start

### 1. Ganti Musik
- File: `components/photo-gallery-3d.tsx`
- Cari: `src="https://assets.mixkit.co/..."`
- Ganti dengan URL musik Anda (dari Mixkit, Pexels, dll)

### 2. Tambah Foto
- File: `components/photo-gallery-3d.tsx`
- Cari: `const photos: PhotoItem[] = [`
- Tambah baris: `{ id: 15, title: 'Moment 15', color: 'from-orange-400 to-red-400' },`

### 3. Ganti Warna Tema
- File: `app/globals.css`
- Cari: `--primary: 346 100% 50%;`
- Ubah nilai HSL sesuai keinginan

## 📚 Dokumentasi Lengkap

Baca file berikut untuk panduan detail:
- **`QUICK_START.md`** - Panduan cepat (3 langkah)
- **`SETUP_GUIDE.md`** - Panduan lengkap dengan penjelasan

## 📁 Struktur File

```
/components/
├── greeting-card.tsx        ← Kartu Valentine
├── photo-gallery-3d.tsx     ← Galeri foto & musik
└── floating-hearts.tsx      ← Animasi background

/app/
├── page.tsx                 ← Halaman utama
├── layout.tsx               ← Layout & metadata
└── globals.css              ← Tema & animasi

/
├── QUICK_START.md           ← Panduan 3 langkah
├── SETUP_GUIDE.md           ← Panduan detail
└── README_ID.md             ← File ini
```

## 🎵 URL Musik Gratis

- **Mixkit**: https://mixkit.co (pilih dan copy link preview)
- **Pexels Music**: https://www.pexels.com/music/
- **Pixabay**: https://pixabay.com/music/
- **Freepik**: https://www.freepik.com/search?format=music

## 🎨 Warna Tema

Default: Valentine Red/Pink
```css
--primary: 346 100% 50%      /* Merah Muda Terang */
--secondary: 335 87% 51%     /* Merah Gelap */
```

Contoh alternatif:
```css
/* Purple Valentine */
--primary: 280 100% 50%
--secondary: 260 100% 50%

/* Blue Romantic */
--primary: 217 100% 50%
--secondary: 200 100% 50%
```

## 🎯 Cara Menggunakan

### Buat Kartu
1. Klik kartu merah di tengah
2. Isi nama & pesan
3. Klik "Lihat Preview"
4. Klik "Kirim" untuk mengirim
5. Gunakan "Edit" atau "Buat Baru"

### Galeri Foto
1. Swipe ke tab "Galeri Foto"
2. Klik "Play" untuk musik (opsional)
3. Foto berganti otomatis setiap 3.5 detik
4. Gunakan tombol panah atau nomor untuk navigasi manual
5. Klik "Resume" untuk lanjut auto-play

## 🔧 Customize

### Background "Love" Pattern
- Transparan di seluruh halaman
- Teks "love" kecil berulang
- Ada di belakang semua konten

### Floating Hearts
- Hati-hati kecil berjatuhan otomatis
- Animasi smooth & interaktif

### Animasi
- Slide-up saat page load
- Heartbeat pada icon love
- Sparkle pada dots
- Transition smooth pada semua elemen

## 📱 Responsive

- ✓ Mobile (< 640px)
- ✓ Tablet (640px - 1024px)
- ✓ Desktop (> 1024px)

## 🌙 Dark Mode

Aplikasi otomatis mengikuti preferensi sistem:
- Light mode: Background putih
- Dark mode: Background gelap

## ⚙️ Interval Auto-Play

Default: 3.5 detik per foto

Untuk mengubah:
1. Buka `components/photo-gallery-3d.tsx`
2. Cari `3500` (dalam milliseconds)
3. Ubah ke nilai lain (misal 2000 = 2 detik, 5000 = 5 detik)

## 🎁 Bonus Features

- Floating hearts background
- Toast notification saat aksi
- Smooth animations
- Clean & modern UI
- No external API required (kecuali musik)

## 📝 Notes

- Kirim pesan hanya menampilkan notifikasi (manual)
- Untuk integrasi WhatsApp Business, perlu API key terpisah
- Musik loop otomatis
- Foto simpel tanpa upload, hanya placeholder dengan gradient

## 💬 Tips

- Gunakan pesan yang singkat & bermakna untuk kartu
- Pilih musik yang sesuai suasana Valentine
- Kombinasikan gradient warna yang harmonis untuk foto
- Test di mobile untuk memastikan responsive

## 🎉 Selesai!

Aplikasi Anda sudah siap digunakan. Selamat membuat kartu Valentine yang indah!

---

**Created with ❤️ for Valentine's Day 2025**
