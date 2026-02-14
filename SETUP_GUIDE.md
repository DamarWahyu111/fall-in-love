# Valentine's Day Web App - Setup & Customization Guide

## Daftar Isi
1. [Cara Menggunakan Aplikasi](#cara-menggunakan-aplikasi)
2. [Cara Mengubah Musik](#cara-mengubah-musik)
3. [Cara Menambah/Mengubah Foto](#cara-menambahmenggubah-foto)
4. [Cara Mengubah Warna Tema](#cara-mengubah-warna-tema)
5. [Lokasi File Penting](#lokasi-file-penting)

---

## Cara Menggunakan Aplikasi

### Tab 1: Buat Kartu
1. Klik pada kartu merah besar di tengah (tulisan "Happy Valentine's Day")
2. Form akan terbuka, isi 2 field:
   - **Nama Penerima**: Siapa yang akan menerima kartu ini
   - **Pesanmu**: Tulis pesan Valentine yang indah
3. Klik tombol "Lihat Preview" untuk melihat bagaimana kartu akan terlihat
4. Di halaman preview, Anda bisa:
   - **Kirim**: Mengirim pesan (akan ada notifikasi sukses)
   - **Edit**: Kembali ke form untuk mengubah pesan
   - **Buat Baru**: Membuat kartu baru dari awal

### Tab 2: Galeri Foto
1. Foto akan otomatis bergeser ke kanan setiap 3.5 detik
2. Musik akan diputar saat Anda klik tombol "Play" (opsional)
3. Kontrol galeri:
   - **Tombol ← →**: Navigasi manual ke foto sebelum/sesudah
   - **Nomor (1-14)**: Klik langsung ke foto tertentu
   - **Resume**: Lanjutkan auto-play setelah Anda navigasi manual
   - **Pause**: Hentikan musik

---

## Cara Mengubah Musik

### Langkah 1: Persiapan URL Musik
Anda perlu URL musik (link publik) dari salah satu sumber:
- Mixkit (gratis): https://mixkit.co
- Pexels Music (gratis): https://www.pexels.com/music/
- Freepik (gratis): https://www.freepik.com/search?format=music
- YouTube Music (dengan premium)
- Spotify (dengan API)

Pastikan formatnya .mp3 dan link bisa diakses publik.

### Langkah 2: Buka File Photo Gallery
File: `components/photo-gallery-3d.tsx`

### Langkah 3: Cari Audio Tag
Cari baris yang terlihat seperti:
```html
<audio
  ref={audioRef}
  src="https://assets.mixkit.co/active_storage/sfx/2822/2822-preview.mp3"
  loop
  ...
```

### Langkah 4: Ganti URL Musik
Ganti link ini:
```
https://assets.mixkit.co/active_storage/sfx/2822/2822-preview.mp3
```

Dengan link musik Anda sendiri. Contoh:
```
https://assets.mixkit.co/active_storage/sfx/XXXX/XXXX-preview.mp3
```

### Langkah 5: Simpan dan Reload
Simpan file, aplikasi akan otomatis reload. Musik baru akan langsung digunakan!

---

## Cara Menambah/Mengubah Foto

### Menambah Foto Baru

#### Langkah 1: Persiapkan URL Foto
Sama seperti musik, siapkan URL gambar publik dari:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com
- Atau upload ke image hosting seperti Imgur, imgBB

#### Langkah 2: Buka File Photo Gallery
File: `components/photo-gallery-3d.tsx`

#### Langkah 3: Cari Array Foto
Cari bagian:
```typescript
const photos: PhotoItem[] = [
  { id: 1, title: 'Moment 1', color: 'from-pink-400 to-red-400' },
  { id: 2, title: 'Moment 2', color: 'from-red-400 to-purple-400' },
  ...
];
```

#### Langkah 4: Tambah Foto Baru
Tambahkan baris baru sebelum tanda `];`:
```typescript
  { id: 15, title: 'Moment 15', color: 'from-orange-400 to-red-400' },
```

**Penjelasan:**
- `id`: Nomor unik (harus berbeda dari yang lain, bisa naik 15, 16, 17, dst)
- `title`: Nama foto yang muncul saat diklik
- `color`: Gradient warna, pilih dari Tailwind colors berikut:

**Warna Gradient Pilihan:**
```
from-pink-400 to-red-400
from-red-400 to-purple-400
from-purple-400 to-pink-400
from-pink-300 to-rose-300
from-red-300 to-pink-300
from-purple-300 to-rose-300
from-orange-400 to-yellow-400
from-blue-400 to-purple-400
from-green-400 to-emerald-400
```

#### Langkah 5: Simpan
Simpan file, aplikasi auto-reload. Foto baru akan muncul sebagai nomor terakhir di galeri!

### Mengubah Foto Existing

Jika ingin mengubah data foto yang sudah ada (contoh: mengubah title atau warna):
1. Buka file `components/photo-gallery-3d.tsx`
2. Cari foto yang ingin diubah berdasarkan `id`
3. Ubah `title` atau `color`
4. Simpan, aplikasi akan langsung berubah

---

## Cara Mengubah Warna Tema

Tema Valentine sekarang menggunakan warna:
- **Primary (Merah Muda)**: #FF1493
- **Secondary (Merah)**: #DC143C

Untuk mengubah ke warna lain:

### Langkah 1: Buka File Global CSS
File: `app/globals.css`

### Langkah 2: Cari Section `:root`
Temukan bagian:
```css
:root {
  --primary: 346 100% 50%;
  --secondary: 335 87% 51%;
  ...
}
```

### Langkah 3: Ubah Warna Primary
Format: `hue saturation lightness`
- `hue`: 0-360 (0=red, 120=green, 240=blue)
- `saturation`: 0-100%
- `lightness`: 0-100%

Contoh warna:
```css
/* Red/Pink (Valentine) - Default */
--primary: 346 100% 50%;

/* Purple Valentine */
--primary: 280 100% 50%;

/* Blue */
--primary: 217 100% 50%;

/* Green */
--primary: 120 100% 50%;

/* Orange */
--primary: 30 100% 50%;
```

### Langkah 4: Ubah Warna Secondary
Lakukan hal sama untuk `--secondary`

### Langkah 5: Simpan
Semua elemen akan berubah warna otomatis! (buttons, background, text, etc)

---

## Lokasi File Penting

### File Komponen
```
/components/
├── greeting-card.tsx        → Kartu Valentine (form, preview)
├── photo-gallery-3d.tsx     → Galeri foto & musik
└── floating-hearts.tsx      → Animasi hati di background
```

### File Styling & Konfigurasi
```
/app/
├── page.tsx                 → Halaman utama
├── layout.tsx               → Layout umum & metadata
└── globals.css              → Tema warna & animasi
```

### File Dokumentasi
```
/
├── SETUP_GUIDE.md           → File ini
└── README.md                → Informasi proyek
```

---

## Tips & Tricks

### Musik Loop
Musik sudah auto-loop, jadi tidak ada batas. Jika ingin menghenti loop:
- Buka `components/photo-gallery-3d.tsx`
- Cari `<audio loop`
- Hapus kata `loop`

### Interval Auto-Play Foto
Saat ini foto berganti setiap 3.5 detik. Untuk mengubah:
- Buka `components/photo-gallery-3d.tsx`
- Cari `3500` (dalam milliseconds)
- Ubah ke nilai lain (misal 2000 = 2 detik, 5000 = 5 detik)

### Jumlah Foto yang Ditampilkan
Jika sudah menambah foto sampai 20 foto, pastikan array `photos` memiliki id dan data lengkap untuk semua.

---

## Troubleshooting

**Q: Musik tidak memutar?**
A: Periksa URL musik, pastikan link masih aktif dan akses publik. Coba dengan URL dari Mixkit atau Pexels.

**Q: Foto baru tidak muncul?**
A: Pastikan sudah menambah ke array `photos` dengan format yang benar dan incremented `id`.

**Q: Warna tidak berubah?**
A: Pastikan format HSL benar (hue 0-360, saturation 0-100, lightness 0-100). Cek tidak ada typo.

**Q: Kartu tidak bisa dikirim?**
A: Ini normal! Fitur kirim hanya menampilkan notifikasi. Untuk integrasi WA bisnis, hubungi developer.

---

## Support
Jika ada pertanyaan atau masalah, silakan periksa kembali panduan ini atau hubungi tim developer.

Selamat menggunakan aplikasi Valentine's Day! 💝
