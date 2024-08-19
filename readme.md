# NextJS Server Component & Action

## Why use server side rendering
[Dokumentasi benefit SSR](https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering)

- Data fetching
- Security 
- Performance 
- SEO & Social network shareability 
- Streaming

## Directive
[Dokumentasi directive](https://react.dev/reference/rsc/directives)

By default, NextJS menggunakan SSR. Jika ingin melakukan rendering secara CSR, gunakan 'use client' di filenya.
<br>
<br>
Jika ingin merender secara CSR, kita harus mengubah kodingan kita seperti menggunakan react. By default ada react strict mode. Jika ingin mengubah , bisa edit di next.config.mjs
<br>
<br>
Cara rendering juga bisa dicampur, jika kita menginginkan component tersebut interaktif, kita harus menggunakan CSR , contoh : di product card kita ingin ada onClick (event interaktif, di server gabisa), maka kita bisa merender product card secara client, tetapi fetch datanya tetap secara server

## When to use server and client components?
**Server**
- fetch data 
- jika mau akses data backend secara langsung
- jika mau menyimpan data sensitive (api key, etc)
- jika mau menyimpan dependencies besar

**Client**
- jika butuh interaktif & event listener
- jika butuh menggunakan hooks / custom hooks / lifecyle react 
- jika sedang menggunakan api browser
- jika ingin menggunakan class component react

## Server action
[Dokumentasi server action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

[Dokumentasi contoh form](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms)

[Dokumentasi fetch post](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Apa itu server action ? sebuah function yang asynchronus yang dijalankan di server. Kita bisa menambahkan 'use server' di dalam sebuah function untuk merubah function tersebut menjadi server action.

## Metadata
[Dokumentasi metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

NextJS menyediakan Metadata API yang bisa digunakan untuk mendefinisikan metadata aplikasi kita, sebuah tags(link / meta tags) yang biasanya ada di **head** element dalam HTML aplikasi kita. Bermanfaat untuk meningkatkan SEO & web shareability.
<br>
<br>
Karena data kita tidak statis , kita gunakan **dynamic metadata**

[Dokumentasi dynamic metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata)

[Dokumentasi opengraph & twitter](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)



