// 1. Tangkap tombolnya berdasarkan id dan simpan ke dalam variabel
let tombol = document.getElementById("tombol-baca");
let paragraf = document.getElementById("teks-artikel");

//2. Beri tahu JS untuk "mendengarkan" kapan tombol itu di klik (event listener)
tombol.addEventListener("click", function (){

    //3. Aksi : mengubah tulisan didalam tombol secara instan !
    tombol.innerText = "Terima kasih sudah membaca!";
    paragraf.style.color ="#7f8c8d";

    //4. Bonus aksi : mengubah warna tombol menjadi abu-abu tanda sudah di klik 
    tombol.style.backgroundColor="#7f8c8d";
});