// Nomor 9: Array of Objects

const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Mahasiswa yang lulus
let lulus = mahasiswa.filter(m => m.nilai >= 75);

// Mahasiswa yang tidak lulus
let tidakLulus = mahasiswa.filter(m => m.nilai < 75);

// Mengurutkan nilai tertinggi
let urutan = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("=== MAHASISWA LULUS ===");
console.log(lulus);

console.log("=== MAHASISWA TIDAK LULUS ===");
console.log(tidakLulus);

console.log("Jumlah mahasiswa lulus:", lulus.length);

console.log("=== URUTAN NILAI TERTINGGI ===");
console.log(urutan);