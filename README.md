# Personal Portfolio

Website portofolio pribadi dibangun dengan Next.js 15, TypeScript, Tailwind CSS, Framer Motion, dan Supabase (untuk fitur Guestbook).

## Menjalankan secara lokal

```bash
npm install
cp .env.local.example .env.local   # isi dengan kredensial Supabase kamu
npm run dev
```

Buka http://localhost:3000

## Setup Supabase (untuk Guestbook)

1. Buat project baru di https://supabase.com
2. Buka SQL Editor, jalankan isi dari `supabase/migrations/001_guestbook.sql`
3. Ambil `Project URL` dan `anon public key` dari Project Settings → API
4. Isi ke `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
5. Restart dev server

Tanpa Supabase di-setup, guestbook tetap tampil tapi submit/list akan gagal — sisanya (hero, about, works, dst.) tetap berjalan normal.

## Mengganti konten

Semua konten ada di `src/data/`, tinggal edit tanpa menyentuh komponen UI:

| File | Isi |
|---|---|
| `src/data/profile.ts` | Nama, role, bio, email, WhatsApp |
| `src/data/projects.ts` | Daftar project + case study |
| `src/data/skills.ts` | Tech stack per kategori |
| `src/data/journey.ts` | Timeline pengalaman |
| `src/data/services.ts` | Layanan yang ditawarkan |
| `src/data/socials.ts` | Link media sosial |

## Menambah project baru

Tambahkan object baru ke array `projects` di `src/data/projects.ts`, isi `slug` unik (dipakai untuk URL `/projects/[slug]`), lalu tambahkan gambar ke `public/images/projects/`.

## Mengganti gambar

Semua gambar saat ini masih placeholder SVG (`public/images/...`). Ganti dengan file asli menggunakan nama file yang sama, atau update path di `src/data/`. Ukuran rekomendasi:

- Project thumbnail: 1200×800px
- Project hero: 1600×900px
- Journey photo: 800×600px

## Deploy ke Vercel

1. Push repo ini ke GitHub
2. Import project di https://vercel.com/new
3. Tambahkan environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) di Vercel project settings
4. Deploy

## Struktur folder

```
src/
├── app/            # Routes (Next.js App Router)
├── components/     # UI, navigation, sections, project
├── data/           # Semua konten editable
├── lib/            # Supabase client & utils
└── hooks/          # Custom hooks
supabase/migrations/ # SQL schema untuk guestbook
```
