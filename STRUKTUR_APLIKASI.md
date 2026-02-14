# 🏗️ Struktur Aplikasi - Flow & Architecture

Panduan visual bagaimana aplikasi bekerja dari awal hingga akhir.

---

## 🎯 User Flow

```
┌─────────────────────────────────────────────┐
│   Buka Aplikasi Valentine                   │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
    ┌──────────┐         ┌──────────┐
    │ Buat     │         │ Galeri   │
    │ Kartu    │         │ Foto     │
    └────┬─────┘         └────┬─────┘
         │                    │
         │ Flow:             │ Flow:
         │                    │
    1. Klik kartu       1. Klik Play (musik)
    2. Isi form         2. Foto auto-slide
    3. Preview          3. Navigate manual
    4. Kirim            4. Pause/Resume
         │                    │
         └──────────┬─────────┘
                    │
             ▼──────────────▼
        Aplikasi Selesai ✓
```

---

## 📁 Struktur File & Folder

```
vercel/share/v0-project/
│
├── 📚 DOKUMENTASI (Baca Files)
│   ├── START_HERE.md              ← BACA DULU!
│   ├── QUICK_START.md             ← 5 min guide
│   ├── SETUP_GUIDE.md             ← Detail guide
│   ├── CHECKLIST_SETUP.md         ← Verify app
│   ├── FILES_OVERVIEW.md          ← Tech reference
│   ├── STRUKTUR_APLIKASI.md       ← File ini
│   └── README_ID.md               ← Overview
│
├── 🎨 APLIKASI (Source Code)
│   │
│   ├── /app                       ← Next.js app dir
│   │   ├── page.tsx               ← Halaman utama ⭐
│   │   ├── layout.tsx             ← Root layout
│   │   ├── globals.css            ← Styling & tema ⭐
│   │   └── ...
│   │
│   ├── /components                ← React components
│   │   ├── greeting-card.tsx      ← Card komponen ⭐
│   │   ├── photo-gallery-3d.tsx   ← Gallery komponen ⭐
│   │   ├── floating-hearts.tsx    ← Hearts animation
│   │   ├── ui/                    ← Shadcn UI
│   │   └── ...
│   │
│   ├── /public                    ← Static files
│   ├── /hooks                     ← Custom hooks
│   └── /lib                       ← Utilities
│
├── 📦 KONFIGURASI
│   ├── package.json               ← Dependencies
│   ├── tailwind.config.ts         ← Tailwind setup
│   ├── tsconfig.json              ← TypeScript config
│   ├── next.config.mjs            ← Next.js config
│   └── .gitignore
│
└── 📄 LAINNYA
    ├── README.md                  ← Project info
    └── node_modules/              ← Installed packages
```

**⭐ = File yang sering diubah untuk customize**

---

## 🔄 Component Architecture

```
┌─────────────────────────────────────────────┐
│             page.tsx (Halaman)              │
│  (Header, Tabs, Layout, Instruksi)         │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────────┐
        │                         │
    ┌───▼───────────┐    ┌───────▼────┐
    │ Greeting      │    │ Photo      │
    │ Card.tsx      │    │ Gallery.tsx│
    │               │    │            │
    │ ├─ Step 1:    │    │ ├─ Music   │
    │ │ Closed card │    │ │ Player   │
    │ │             │    │ ├─ Carousel│
    │ ├─ Step 2:    │    │ ├─ Buttons │
    │ │ Form input  │    │ ├─ Thumbs  │
    │ │             │    │ └─ Info    │
    │ └─ Step 3:    │    │            │
    │   Preview     │    │ Auto-play  │
    │               │    │ Timer: 3.5s│
    └───────────────┘    └────────────┘
         │                     │
         │ Uses               │ Uses
         ├─ Input            ├─ Audio
         ├─ Textarea         ├─ Button
         ├─ Button           └─ Buttons
         └─ Toast
              │
         ┌────┴────────────────────┐
         │  Floating              │
         │  Hearts.tsx            │
         │                        │
         │ Random hearts         │
         │ falling down          │
         │ Animation: 6-8s       │
         └────────────────────────┘
```

---

## 🎨 Styling & Theme Flow

```
┌──────────────────────────────────────┐
│        globals.css                   │
│  (Tailwind tokens & animations)      │
└────────┬──────────────────┬──────────┘
         │                  │
    ┌────▼─────┐       ┌────▼──────┐
    │ Color     │       │ Animations│
    │ Tokens    │       │           │
    │           │       │ @keyframes│
    │ Primary   │       │ - float   │
    │ Secondary │       │ - heartbeat
    │ Muted     │       │ - sparkle │
    │ Border    │       │ - slide-up│
    │ etc.      │       │ etc.      │
    └────┬──────┘       └────┬──────┘
         │                   │
         └───────┬───────────┘
                 │
         ┌───────▼──────────┐
         │  Digunakan di:   │
         │  - page.tsx      │
         │  - components    │
         │  - UI elements   │
         └──────────────────┘
```

---

## 📊 Data Flow

### Greeting Card Data Flow
```
User Input
  │
  ├─ name: "Siapa nama mereka?"
  ├─ message: "Tulis pesan..."
  │
  ▼
handleSubmitForm()
  │
  ├─ Validasi field
  ├─ Set state: recipientName, submittedMessage
  ├─ Set step: 'preview'
  │
  ▼
Display Preview Card
  │
  ├─ Show: "Untuk {recipientName}"
  ├─ Show: {submittedMessage}
  │
  ▼
User Action: Kirim / Edit / Buat Baru
  │
  ├─ Kirim → Show toast success
  ├─ Edit → Go back to form (step='form')
  └─ Buat Baru → Reset & go to form
```

### Gallery Photo Flow
```
Initial State
  │
  ├─ currentIndex: 0
  ├─ isAutoPlay: true
  ├─ isPlaying: false
  │
  ▼
User Action
  │
  ├─ Auto-play timer (3500ms)
  │  └─ currentIndex++
  │
  ├─ Klik tombol < atau >
  │  └─ currentIndex = prev or next
  │
  ├─ Klik nomor foto (1-14)
  │  └─ currentIndex = selected index
  │
  ├─ Klik Play musik
  │  └─ audio.play()
  │  └─ isPlaying = true
  │
  ├─ Klik Pause musik
  │  └─ audio.pause()
  │  └─ isPlaying = false
  │
  └─ Klik Resume
     └─ isAutoPlay = true
        └─ Timer start lagi
```

---

## 🎭 State Management

### Greeting Card States
```typescript
type Step = 'closed' | 'form' | 'preview'

Closed State:
  - Tampil: Kartu merah besar
  - Aksi: Klik kartu → step='form'

Form State:
  - Tampil: Form input
  - Data: name, message
  - Aksi: Submit → step='preview'

Preview State:
  - Tampil: Kartu dengan pesan
  - Aksi: Kirim/Edit/Buat Baru
```

### Gallery States
```typescript
currentIndex:     0-13 (foto mana)
isAutoPlay:       true/false (auto-play on/off)
isPlaying:        true/false (musik playing)
slideInterval:    NodeJS.Timeout (auto-play timer)
audioRef:         HTMLAudioElement (musik)
```

---

## 🔌 External Dependencies

```
┌──────────────────────────────────────┐
│        package.json                  │
└────────┬─────────────────────────────┘
         │
    ┌────▼────────────────────────┐
    │ Key Dependencies:           │
    │                            │
    │ React 19                  │
    │ Next.js 16                │
    │ Tailwind CSS              │
    │ Shadcn/UI                 │
    │ Lucide Icons              │
    │ Sonner (Toast)            │
    │                            │
    │ Audio API (native)         │
    │ SVG Pattern (native)       │
    └────────────────────────────┘
```

---

## 🎬 Loading & Rendering

```
1. Next.js App Start
   └─ Load layout.tsx
      ├─ Import fonts
      ├─ Set metadata
      └─ Setup HTML structure

2. Load page.tsx
   ├─ Render header
   ├─ Render tabs
   ├─ Render greeting-card
   ├─ Render photo-gallery-3d
   ├─ Render floating-hearts
   └─ Render documentation

3. CSS Loading
   ├─ globals.css
   ├─ Tailwind utilities
   ├─ Animations (@keyframes)
   └─ Theme colors

4. JavaScript Hydration
   ├─ useEffect hooks
   ├─ Event listeners
   ├─ State management
   └─ Audio setup

5. Ready ✓
   └─ User bisa interact
```

---

## 📱 Responsive Breakpoints

```
Mobile (< 640px)
  └─ Single column layout
     └─ Card full width
     └─ Gallery full width
     └─ Tabs text abbreviated

Tablet (640px - 1024px)
  └─ 2 column for greeting card
     └─ Card on left
     └─ Instruction on right

Desktop (> 1024px)
  └─ Full 2 column layout
     └─ Max width 6xl (1280px)
     └─ Large spacing
```

---

## 🎨 Theme System

```
colors/
  ├─ Primary (Valentine Pink)
  │  └─ #FF1493 (HSL: 346 100% 50%)
  │
  ├─ Secondary (Dark Red)
  │  └─ #DC143C (HSL: 335 87% 51%)
  │
  ├─ Muted (Light Pink)
  │  └─ #F0E6E9 (HSL: 350 100% 88%)
  │
  ├─ Background
  │  └─ White/Dark depending mode
  │
  └─ Other
     ├─ Border, Input, Ring
     └─ Chart colors

light mode/
  ├─ Background: white
  ├─ Foreground: dark
  └─ Muted: light gray

dark mode/
  ├─ Background: dark red
  ├─ Foreground: light
  └─ Muted: dark gray
```

---

## 🔊 Animations

```
Float Animation
  └─ Floating hearts
  └─ Duration: 6-8s
  └─ Direction: up & random X

Heartbeat Animation
  └─ Heart icons
  └─ Duration: 1.2s
  └─ Scale: 1 → 1.1 → 1

Sparkle Animation
  └─ Dots di card
  └─ Duration: 2s
  └─ Opacity: 0 → 1 → 0

Slide-up Animation
  └─ Elements on page load
  └─ Duration: 0.5s
  └─ TransformY: 20px → 0

All animations defined in globals.css
```

---

## 📞 Interaction Flow

```
┌────────────────────────────┐
│  1. User Lands on Page     │
├────────────────────────────┤
│  Header + Tabs loaded      │
│  Floating hearts animating │
│  Background pattern ready  │
└────────────┬───────────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌─────────────┐  ┌──────────────┐
│ Tab 1:      │  │ Tab 2:       │
│ Buat Kartu  │  │ Galeri Foto  │
│             │  │              │
│ Click card  │  │ Auto-play    │
│   ↓         │  │   OR         │
│ Form modal  │  │ Click manual │
│   ↓         │  │   ↓          │
│ Preview     │  │ See photo    │
│   ↓         │  │              │
│ Kirim       │  │ Click Play   │
│   ↓         │  │   ↓          │
│ Success ✓   │  │ Music on ✓   │
└─────────────┘  └──────────────┘
```

---

## 🔧 Customization Points

```
Untuk ganti musik:
  └─ Lokasi: components/photo-gallery-3d.tsx
  └─ Baris: ~95
  └─ Ubah: <audio src="...">

Untuk tambah foto:
  └─ Lokasi: components/photo-gallery-3d.tsx
  └─ Baris: ~20-35
  └─ Ubah: const photos: PhotoItem[] = [...]

Untuk ganti warna:
  └─ Lokasi: app/globals.css
  └─ Baris: ~180-185
  └─ Ubah: --primary & --secondary values

Untuk edit text/instruksi:
  └─ Lokasi: app/page.tsx
  └─ Baris: Berbeda-beda
  └─ Ubah: Text content strings
```

---

**Sekarang Anda memahami struktur aplikasi Valentine secara menyeluruh! 💝**

Untuk implementasi, lihat:
- QUICK_START.md (untuk action cepat)
- FILES_OVERVIEW.md (untuk technical details)
