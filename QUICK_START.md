# Quick Start - Panduan Cepat

## 🎵 GANTI MUSIK DALAM 3 LANGKAH

### Langkah 1: Siapkan Musik
- Cari musik gratis di: https://mixkit.co atau https://www.pexels.com/music/
- Copy link musik (harus format .mp3)

### Langkah 2: Buka File
- Buka folder: `components/`
- Buka file: `photo-gallery-3d.tsx`
- Tekan Ctrl+F (cari): `src="https://assets.mixkit`

### Langkah 3: Ganti Link
Cari baris:
```
src="https://assets.mixkit.co/active_storage/sfx/2822/2822-preview.mp3"
```

Ganti dengan link musik Anda:
```
src="https://link-musik-anda.mp3"
```

Simpan file. SELESAI! ✓

---

## 📸 TAMBAH FOTO BARU DALAM 3 LANGKAH

### Langkah 1: Siapkan Foto
- Link foto dari: https://unsplash.com atau https://pexels.com
- Copy link foto (harus format .jpg/.png)

### Langkah 2: Buka File
- Buka folder: `components/`
- Buka file: `photo-gallery-3d.tsx`
- Tekan Ctrl+F: Cari `const photos: PhotoItem[]`

### Langkah 3: Tambah Foto
Lihat contoh (foto nomor 14):
```typescript
{ id: 14, title: 'Moment 14', color: 'from-pink-500 to-purple-400' },
```

Tambah baris baru sebelum `];`:
```typescript
{ id: 15, title: 'Moment 15', color: 'from-orange-400 to-red-400' },
{ id: 16, title: 'Moment 16', color: 'from-blue-400 to-purple-400' },
```

**Catatan:**
- Ganti `15`, `16` dengan nomor foto
- Ganti `Moment 15` dengan nama foto
- Ganti `from-orange-400 to-red-400` dengan warna (lihat tabel bawah)

Simpan file. SELESAI! ✓

---

## 🎨 GANTI WARNA TEMA DALAM 2 LANGKAH

### Langkah 1: Buka File
- Buka folder: `app/`
- Buka file: `globals.css`
- Tekan Ctrl+F: Cari `:root {`

### Langkah 2: Ubah Warna
Temukan:
```css
--primary: 346 100% 50%;
--secondary: 335 87% 51%;
```

Ganti dengan warna pilihan (lihat tabel):

**Warna Popular:**
| Nama | Primary | Secondary |
|------|---------|-----------|
| ❤️ Valentine (Default) | `346 100% 50%` | `335 87% 51%` |
| 💜 Purple | `280 100% 50%` | `260 100% 50%` |
| 💙 Blue | `217 100% 50%` | `200 100% 50%` |
| 💚 Green | `120 100% 50%` | `100 100% 50%` |
| 🧡 Orange | `30 100% 50%` | `15 100% 50%` |

Simpan file. SELESAI! ✓

---

## 🌈 WARNA GRADIENT UNTUK FOTO

Pilih 2 warna dari daftar ini untuk setiap foto:

```
Pink:   from-pink-300, from-pink-400, from-pink-500
Red:    from-red-300, from-red-400, from-red-500
Purple: from-purple-300, from-purple-400, from-purple-500
Rose:   from-rose-300, from-rose-400, from-rose-500
Orange: from-orange-300, from-orange-400, from-orange-500
Yellow: from-yellow-300, from-yellow-400, from-yellow-500
Green:  from-green-300, from-green-400, from-green-500
Blue:   from-blue-300, from-blue-400, from-blue-500
```

Contoh kombinasi:
```
color: 'from-pink-400 to-red-400'
color: 'from-purple-400 to-pink-400'
color: 'from-blue-400 to-purple-400'
```

---

## 📋 CHECKLIST SETUP

- [ ] Musik sudah diganti
- [ ] Foto-foto sudah ditambah (minimal 5)
- [ ] Warna tema sudah disesuaikan
- [ ] Aplikasi berjalan lancar
- [ ] Tested di mobile & desktop

---

## ❓ YANG SERING DITANYA

**Q: Musik tidak jalan?**
A: Pastikan link musik aktif. Test dengan link dari Mixkit atau Pexels.

**Q: Foto tidak muncul?**
A: Check `id` harus unik dan tidak duplicate. Check format object benar.

**Q: Warna masih sama?**
A: Hard refresh browser (Ctrl+Shift+R) atau clear cache.

**Q: Gimana cara hapus foto?**
A: Hapus baris object foto dari array `photos`.

---

Butuh bantuan? Baca `SETUP_GUIDE.md` untuk panduan lengkap.

Happy Valentine! 💝
