# 📚 **Catch All Segments in Next.js** 🌐

### 👋 Halo! Selamat datang di tutorial tentang **Catch All Segments** di Next.js! Di sini kita bakal jelasin dengan cara yang santai, fun, tapi tetap informatif, supaya kamu yang baru mulai bisa paham dengan mudah! 😎✨

## Apa Itu **Catch All Segments**? 🤔

Di Next.js, **Catch All Segments** itu kayak jalan pintas buat menangkap URL dengan banyak segment dinamis. Misalnya, kamu pengen menangkap banyak segmen yang bisa berbeda-beda panjangnya, kayak URL yang berbentuk `/feature/123/concept/abc/example/xyz`. 🛤️

Catch All ini bakal menangkap segala jenis path yang ada, meski panjangnya berubah-ubah!

Misalnya kamu punya file `pages/[...slug].tsx`, dan `slug` bisa diisi dengan 1, 2, 3, atau lebih segmen. Gimana caranya? Ayo simak contoh berikut! 👇

---

## **Kode Contoh** 🖥️

```tsx
// Catch all segments

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  let title;
  if (params.slug?.length === 1) {
    title = `Feature ${params.slug[0]}`;
  }
  if (params.slug?.length === 2) {
    title = `Feature ${params.slug[0]} Concept ${params.slug[1]}`;
  }
  if (params.slug?.length === 3) {
    title = `Feature ${params.slug[0]} Concept ${params.slug[1]} Example ${params.slug[2]}`;
  }
  if (!params.slug) {
    title = "Docs Page";
  }

  return (
    <div>
      <h1>Navbar</h1>
      <p>{title}</p>
      <h2>Footer</h2>
    </div>
  );
}
```

---

## **Penjelasan** 👨‍💻👩‍💻

### 1. **Catch All Parameter (`[...slug]`)** 🔥

Ketika kamu menulis `[...]` di nama file, seperti `[...slug].tsx`, Next.js bakal nangkep semua bagian dari URL dan masukkan ke dalam parameter `slug` yang berbentuk array. Jadi kalau URL-nya adalah `/feature/123/concept/abc/example/xyz`, array `slug` bakal berisi:  
`['feature', '123', 'concept', 'abc', 'example', 'xyz']`.

### 2. **Pengecekan Panjang Array** 📏

Pada contoh kode di atas, kita ngecek panjang array `slug`. Ini cara Next.js membedakan halaman berdasarkan banyaknya segmen di URL:

- Kalau hanya ada **1 segmen** (misalnya `/feature/123`), maka judulnya akan jadi `Feature 123`.
- Kalau ada **2 segmen** (misalnya `/feature/123/concept/abc`), judulnya jadi `Feature 123 Concept abc`.
- Kalau ada **3 segmen** (misalnya `/feature/123/concept/abc/example/xyz`), judulnya jadi `Feature 123 Concept abc Example xyz`.
- Kalau nggak ada segmen sama sekali, akan ditampilkan `Docs Page`. (Kayak halaman utama, gitu!)

### 3. **Rendering UI** 🎨

Di dalam `return`, kita menggunakan kondisi tersebut untuk menampilkan **title** yang sesuai dengan panjang array `slug`. Jadi UI-nya bakal dinamis banget sesuai dengan path yang dipilih oleh pengguna.

---

## Kenapa **Catch All Segments** Berguna? 🚀

- **Fleksibilitas**: Kamu bisa menangani berbagai jenis URL dengan cara yang lebih fleksibel.
- **Scalability**: Cocok banget buat aplikasi yang memiliki banyak fitur dan konsep yang saling terhubung.
- **Mudah Dikelola**: Ketimbang nulis banyak file route, cukup satu file catch-all yang menangani semuanya! Hemat waktu, kan? ⏱️

---

## Contoh Kasus Nyata 💡

Misalnya, kamu punya website dokumentasi yang mencakup banyak fitur, konsep, dan contoh penggunaannya. Dengan menggunakan **Catch All Segments**, kamu bisa membuat halaman yang merespons berbagai kombinasi URL, seperti:

- `/feature/login`
- `/feature/login/concept/flow`
- `/feature/login/concept/flow/example/code`

Jadi, gak perlu bikin banyak file untuk setiap path. Semuanya bisa dikelola dalam satu file. 🔥

---

## 👨‍💻 **Kesimpulan** 📝

**Catch All Segments** adalah cara keren buat menangani URL dinamis di Next.js tanpa perlu banyak boilerplate code. Jadi, nggak perlu takut lagi buat bikin halaman dengan banyak segmen yang bisa berubah-ubah! 🌟

---

### 🎉 Selamat mencoba dan happy coding! Jangan lupa pakai **Catch All Segments** buat bikin aplikasi Next.js kamu lebih powerful dan fleksibel! 💪

---

Semoga penjelasan ini bermanfaat! 😊 Kalau ada yang bingung, feel free buat tanya-tanya! 💬
