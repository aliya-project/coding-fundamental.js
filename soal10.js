// Nomor 10: Sistem Kasir Sederhana

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data produk
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

const keranjang = [];

const rupiah = (angka) =>
    "Rp" + angka.toLocaleString("id-ID");

function tanya(pertanyaan) {
    return new Promise(resolve => {
        rl.question(pertanyaan, resolve);
    });
}

async function kasir() {
    console.log("===== SISTEM KASIR =====");
    console.log("Daftar Produk:");

    produk.forEach(p => {
        console.log(p.nama + " - " + rupiah(p.harga));
    });

    console.log("\nKetik selesai jika sudah.");

    while (true) {
        let nama = await tanya("\nPilih produk: ");

        if (nama.toLowerCase() === "selesai") {
            break;
        }

        let barang = produk.find(
            p => p.nama.toLowerCase() === nama.toLowerCase()
        );

        if (!barang) {
            console.log("Produk tidak ditemukan!");
            continue;
        }

        let jumlah = Number(
            await tanya("Jumlah pembelian: ")
        );

        if (!Number.isInteger(jumlah) || jumlah <= 0) {
            console.log("Jumlah tidak valid!");
            continue;
        }

        let subtotal = barang.harga * jumlah;

        keranjang.push({
            nama: barang.nama,
            jumlah: jumlah,
            subtotal: subtotal
        });

        console.log("Produk berhasil ditambahkan!");
    }

    // Menghitung total belanja
    let total = 0;

    keranjang.forEach(item => {
        total += item.subtotal;
    });

    // Menghitung diskon
    let diskon = 0;

    if (total > 500000) {
        diskon = total * 10 / 100;
    }

    let pembayaran = total - diskon;

    // Menampilkan struk
    console.log("\n===== STRUK PEMBELIAN =====");

    keranjang.forEach(item => {
        console.log(
            item.nama + " x" +
            item.jumlah + " " +
            rupiah(item.subtotal)
        );
    });

    console.log("---------------------------");
    console.log("Subtotal:", rupiah(total));
    console.log("Diskon:", rupiah(diskon));
    console.log("Total pembayaran:", rupiah(pembayaran));
    console.log("===========================");
    console.log("Terima kasih!");

    rl.close();
}

kasir();