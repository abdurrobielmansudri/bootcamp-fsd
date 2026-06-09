// 1. Membuat kotak variabel untuk menyimpan teks (String)
let namaPengembang = "Robi";
let peranDasar = "Full-Stack Developer";

// 2. Membuat kotak variabel untuk menyimpan angka (Number)
let targetBelajarJam = 1;

// 3. Menampilkan isi kotak variabel ke dalam "Console" browser
console.log(namaPengembang);
console.log(peranDasar);
console.log(targetBelajarJam);

// 1. Menggabungkan teks (String Concatenation)
let sapaan = "Halo, nama saya " + namaPengembang + " dan saya seorang " + peranDasar + ".";
console.log(sapaan);

// 2. Melakukan operasi matematika dasar (Aritmatika)
let targetSeminggu = targetBelajarJam * 7; // Menghitung total jam belajar seminggu
console.log("Target belajar saya dalam seminggu adalah: " + targetSeminggu + " jam");

// 3. Mengubah isi variabel (Re-assignment)
targetBelajarJam = 2; // Angka di dalam kotak kita ganti jadi 2
let targetBaruSeminggu = targetBelajarJam * 7;
console.log("Kalau target dinaikkan, seminggu jadi: " + targetBaruSeminggu + " jam");