# 📂 Daftar File - Cara Edit & Lokasi

## 🎯 File yang HARUS Diubah untuk Customize

### 1️⃣ UNTUK GANTI MUSIK
**File**: `components/photo-gallery-3d.tsx`

**Baris**: ~95-100

**Cari ini**:
```typescript
<audio
  ref={audioRef}
  src="https://assets.mixkit.co/active_storage/sfx/2822/2822-preview.mp3"
  loop
```

**Ubah menjadi**:
```typescript
<audio
  ref={audioRef}
  src="YOUR_MUSIC_URL_HERE.mp3"
  loop
```

**Contoh musik valid**:
- `https://assets.mixkit.co/active_storage/sfx/2825/2825-preview.mp3`
- `https://download.blender.org/...`
- Atau link dari Mixkit/Pexels/Pixabay

---

### 2️⃣ UNTUK TAMBAH/GANTI FOTO
**File**: `components/photo-gallery-3d.tsx`

**Baris**: ~20-35

**Cari ini**:
```typescript
const photos: PhotoItem[] = [
  { id: 1, title: 'Moment 1', color: 'from-pink-400 to-red-400' },
  { id: 2, title: 'Moment 2', color: 'from-red-400 to-purple-400' },
  ...
  { id: 14, title: 'Moment 14', color: 'from-pink-500 to-purple-400' },
];
```

**Untuk tambah foto baru**, tambahkan sebelum `];`:
```typescript
{ id: 15, title: 'Momen Spesial', color: 'from-blue-400 to-purple-400' },
{ id: 16, title: 'Kenangan Indah', color: 'from-orange-400 to-red-400' },
```

**Untuk ganti foto existing**, ubah `title` atau `color` dari foto yang ada.

---

### 3️⃣ UNTUK GANTI WARNA TEMA
**File**: `app/globals.css`

**Baris**: ~180-185 (di section `:root {`)

**Cari ini**:
```css
:root {
  ...
  --primary: 346 100% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 335 87% 51%;
  --secondary-foreground: 0 0% 100%;
  ...
}
```

**Ubah ke warna baru** (format HSL):
```css
--primary: 280 100% 50%;        /* Purple */
--secondary: 260 100% 50%;      /* Purple gelap */
```

**Daftar hue untuk warna populer**:
- Red: 0
- Pink: 346
- Purple: 280
- Blue: 217
- Green: 120
- Orange: 30
- Yellow: 50

---

## 📚 File DOKUMENTASI (Jangan Diedit)

### `QUICK_START.md`
Panduan 3 langkah untuk:
- Ganti musik
- Tambah foto
- Ganti warna

**Baca ini** jika ingin cepat-cepat setup.

### `SETUP_GUIDE.md`
Panduan lengkap dengan penjelasan detail untuk setiap fitur.

**Baca ini** jika ingin mengerti lebih dalam.

### `README_ID.md`
Ringkasan aplikasi & fitur.

**Baca ini** untuk overview umum.

---

## 🔧 File KOMPONEN (Untuk Developer)

### `components/greeting-card.tsx`
**Fungsi**: Kartu ucapan Valentine

**Customizable**:
- Warna gradient (baris ~53)
- Text pada kartu (baris ~57-59)
- Style & animasi

**Jangan ubah**: Logic state management (step, form handling)

---

### `components/photo-gallery-3d.tsx`
**Fungsi**: Galeri foto & musik

**Customizable**:
- URL musik (baris ~95)
- Array foto (baris ~20-35)
- Interval auto-play (baris ~45 - cari `3500`)
- Styling carousel

**Jangan ubah**: Transform calculations & logic

---

### `components/floating-hearts.tsx`
**Fungsi**: Animasi hati jatuh di background

**Customizable**:
- Jumlah hati (baris ~7)
- Warna hati
- Ukuran hati

**Jangan ubah**: Animation logic

---

## 🎨 File STYLING

### `app/globals.css`
**Fungsi**: CSS global, tema warna, animasi

**Sections**:
- Color tokens (`:root` & `.dark`)
- Animations (@keyframes)
- Utilities

**Edit untuk**:
- Ganti tema warna
- Tambah animasi baru
- Styling global

---

### `app/layout.tsx`
**Fungsi**: Root layout & metadata

**Edit untuk**:
- Ganti title/description
- Tambah font
- Meta tags

---

## 📄 File HALAMAN

### `app/page.tsx`
**Fungsi**: Halaman utama dengan tabs

**Contains**:
- Header Valentine
- Tab navigation
- Greeting card section
- Gallery section
- Documentation section
- Footer

**Customizable**:
- Text/judul
- Instruksi
- Layout spacing

---

## 📊 File STRUKTUR

```
vercel/share/v0-project/
│
├── app/
│   ├── page.tsx              ← Halaman utama
│   ├── layout.tsx            ← Root layout
│   ├── globals.css           ← Styling global & tema
│   └── ...
│
├── components/
│   ├── greeting-card.tsx     ← Komponen kartu
│   ├── photo-gallery-3d.tsx  ← Komponen galeri + musik
│   ├── floating-hearts.tsx   ← Komponen animasi hati
│   └── ui/                   ← Shadcn components
│
├── QUICK_START.md            ← 📖 Panduan cepat
├── SETUP_GUIDE.md            ← 📖 Panduan lengkap
├── README_ID.md              ← 📖 Ringkasan
├── FILES_OVERVIEW.md         ← 📖 File ini
│
└── ...
```

---

## ✅ CHECKLIST EDIT

Jika ingin customize, follow order ini:

- [ ] Ganti musik?
  - Edit: `components/photo-gallery-3d.tsx`
  - Ubah: `src="..."`

- [ ] Tambah foto?
  - Edit: `components/photo-gallery-3d.tsx`
  - Ubah: Array `photos`

- [ ] Ganti warna?
  - Edit: `app/globals.css`
  - Ubah: `--primary` & `--secondary`

- [ ] Ubah text/judul?
  - Edit: `app/page.tsx`
  - Ubah: Text content

- [ ] Ubah styling card?
  - Edit: `components/greeting-card.tsx`
  - Ubah: className

---

## 🚨 PENTING!

### JANGAN UBAH
- Logic state (useState, useEffect)
- Hook imports
- Component structure
- className pattern (Tailwind)

### BOLEH UBAH
- URL musik
- Foto dalam array
- Warna tema
- Text content
- Spacing & padding

### SETELAH UBAH
1. Simpan file
2. Aplikasi auto-reload
3. Hard refresh browser (Ctrl+Shift+R)
4. Clear cache jika masih tidak berubah

---

## 🆘 BANTUAN CEPAT

| Masalah | File | Baris | Solusi |
|---------|------|-------|--------|
| Musik tidak jalan | `photo-gallery-3d.tsx` | ~95 | Cek URL musik |
| Foto tidak muncul | `photo-gallery-3d.tsx` | ~20 | Cek id & struktur |
| Warna tidak berubah | `globals.css` | ~180 | Hard refresh browser |
| Text salah | Berbagai file | Berbeda | Cek typo & ejaan |
| Foto bergeser lambat | `photo-gallery-3d.tsx` | ~45 | Ubah `3500` ke nilai lain |

---

Selamat mengcustomize! Jika ada yang bingung, baca `QUICK_START.md` atau `SETUP_GUIDE.md`. 💝
