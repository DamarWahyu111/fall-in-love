# ✅ Checklist Setup Valentine App

Gunakan checklist ini untuk memastikan aplikasi berjalan dengan sempurna!

---

## 🟢 TAHAP 1: Verifikasi Aplikasi Berjalan

- [ ] Aplikasi sudah running (bisa akses di browser)
- [ ] Halaman tampil dengan header "Valentine's"
- [ ] Floating hearts animasi di background
- [ ] Background ada tulisan "love" kecil-kecil

### Jika Ada Masalah
- Refresh browser (Ctrl+R)
- Clear cache (Ctrl+Shift+R)
- Pastikan semua file tersimpan

---

## 🟠 TAHAP 2: Test Fitur Dasar

### Tab "Buat Kartu"
- [ ] Kartu merah tampil di tengah
- [ ] Heart icon berdetak (heartbeat)
- [ ] Klik kartu → form terbuka
- [ ] Isi nama & pesan
- [ ] Klik "Lihat Preview" → preview tampil
- [ ] Preview menampilkan nama dan pesan dengan benar
- [ ] Klik "Kirim" → notifikasi "Pesan dikirim" muncul
- [ ] Klik "Edit" → kembali ke form
- [ ] Klik "Buat Baru" → reset form

### Tab "Galeri Foto"
- [ ] Foto carousel tampil
- [ ] Nomor 1-14 muncul di bawah
- [ ] Tombol panah (← →) berfungsi
- [ ] Klik nomor → langsung ke foto itu
- [ ] Auto-play berjalan (foto bergeser otomatis)
- [ ] Music player tampil
- [ ] Klik "Play" → musik bermain
- [ ] Klik "Pause" → musik berhenti
- [ ] Resume tombol untuk lanjut auto-play

### Instruksi di Bawah
- [ ] Panduan 3 langkah terlihat jelas
- [ ] Warna dan formatting rapi
- [ ] Tidak ada text yang terpotong

---

## 🟡 TAHAP 3: Customization (Optional)

Pilih minimal 1 dari di bawah:

### ☐ Ganti Musik
1. [ ] Buka file: `components/photo-gallery-3d.tsx`
2. [ ] Cari baris: `src="https://assets.mixkit.co/..."`
3. [ ] Ganti URL dengan musik baru (dari Mixkit/Pexels)
4. [ ] Simpan file
5. [ ] Refresh browser
6. [ ] Test musik baru dengan klik "Play"

**Musik Recommendations:**
- Mixkit: https://mixkit.co/search/?query=romantic (cari "romantic")
- Pexels Music: https://www.pexels.com/music/ (cari "love" or "valentine")

### ☐ Tambah Foto Baru
1. [ ] Buka file: `components/photo-gallery-3d.tsx`
2. [ ] Cari: `const photos: PhotoItem[] = [`
3. [ ] Tambah baris sebelum `];`:
   ```typescript
   { id: 15, title: 'Momen 15', color: 'from-blue-400 to-purple-400' },
   { id: 16, title: 'Momen 16', color: 'from-green-400 to-emerald-400' },
   ```
4. [ ] Simpan file
5. [ ] Refresh browser
6. [ ] Klik foto 15 & 16 di gallery → muncul

**Catatan**: Ganti id (15, 16, dst), title, dan color sesuai keinginan

### ☐ Ganti Warna Tema
1. [ ] Buka file: `app/globals.css`
2. [ ] Cari: `:root {`
3. [ ] Temukan: `--primary: 346 100% 50%;`
4. [ ] Ganti ke warna baru, contoh:
   - Purple: `--primary: 280 100% 50%;`
   - Blue: `--primary: 217 100% 50%;`
   - Green: `--primary: 120 100% 50%;`
5. [ ] Simpan file
6. [ ] Hard refresh (Ctrl+Shift+R)
7. [ ] Semua warna berubah otomatis

---

## 🟣 TAHAP 4: Quality Check

Pastikan semuanya rapi & tidak ada masalah:

### Mobile (di HP/Tablet)
- [ ] Layout tidak berantakan
- [ ] Tab tidak cramped
- [ ] Kartu bisa di-scroll
- [ ] Galeri carousel berjalan smooth
- [ ] Buttons mudah diklik

### Desktop (di Laptop/PC)
- [ ] Tabs rapi & berjauhan dengan baik
- [ ] 2 kolom greeting card bagus
- [ ] Instruksi visible dan jelas
- [ ] Galeri foto besar & jelas
- [ ] Tidak ada horizontal scroll

### Visual
- [ ] Background "love" pattern visible (kecil-kecil)
- [ ] Floating hearts terlihat
- [ ] Warna tema konsisten
- [ ] Animasi smooth (tidak lag)

---

## 🟢 TAHAP 5: Final Verification

Before saying "DONE":

- [ ] Semua checklist di atas ✓
- [ ] Tidak ada error di console
- [ ] Tidak ada text yang terpotong
- [ ] Tidak ada overlapping elemen
- [ ] Loading time cepat
- [ ] Responsive di semua ukuran

---

## 🎉 SELESAI!

Jika semua checklist selesai, aplikasi Anda sudah siap digunakan!

### Dokumentasi Bacaan
Jika ingin tahu lebih lanjut:
- **QUICK_START.md** - Setup cepat
- **SETUP_GUIDE.md** - Panduan detail
- **FILES_OVERVIEW.md** - Daftar file
- **README_ID.md** - Overview aplikasi

---

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Musik tidak jalan | Ganti URL musik yang valid |
| Foto baru tidak muncul | Check id & struktur object |
| Warna tidak berubah | Hard refresh (Ctrl+Shift+R) |
| Layout berantakan | Cek responsive di mobile |
| Text terpotong | Check padding & width element |

---

## 💡 Tips Akhir

1. **Musik**: Gunakan musik romantic dari Mixkit atau Pexels
2. **Foto**: Minimal 10-15 foto untuk galeri bagus
3. **Warna**: Gunakan kombinasi yang harmonis
4. **Testing**: Test di HP & desktop sebelum publish
5. **Backup**: Simpan versi original sebelum edit

---

**Happy Valentine's Day! 💝**

Sekarang aplikasi Anda siap digunakan untuk membuat momen Valentine yang tak terlupakan.
