// Nomor 2: Operator Aritmatika

let harga = 25000;
let jumlah = 4;
let diskonPersen = 10;

let totalSebelumDiskon = harga * jumlah;
let diskon = totalSebelumDiskon * diskonPersen / 100;
let totalPembayaran = totalSebelumDiskon - diskon;

console.log("=== TOTAL BELANJA ===");
console.log("Total sebelum diskon: Rp" + totalSebelumDiskon);
console.log("Besaran diskon: Rp" + diskon);
console.log("Total pembayaran: Rp" + totalPembayaran);