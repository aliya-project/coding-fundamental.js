// Nomor 8: Object

const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

console.log("Nama produk:", produk.nama);
console.log("Harga produk:", produk.harga);

// Mengubah stok
produk.stok = 5;

// Menambahkan merek
produk.merek = "Lenovo";

// Menampilkan seluruh properti
console.log("=== DATA PRODUK ===");
console.log(produk);