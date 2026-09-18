import HeroImage from "/assets/hero-img.webp";
import ProfileImage from "/assets/profil.png";

const Image = {
  HeroImage,
  ProfileImage,
};

export default Image;

import Tools1 from "/assets/tools/dart.png";
import Tools2 from "/assets/tools/kotlin.png";
import Tools3 from "/assets/tools/java.png";
import Tools4 from "/assets/tools/golang.png";
import Tools5 from "/assets/tools/js.png";

import Tools6 from "/assets/tools/flutter.png";
import Tools7 from "/assets/tools/androidstudio.png";

import Tools8 from "/assets/tools/nodejs.png";
import Tools9 from "/assets/tools/expressjs.png";
import Tools10 from "/assets/tools/reactjs.png";
import Tools11 from "/assets/tools/tailwind.png";
import Tools12 from "/assets/tools/spring.png";

import Tools13 from "/assets/tools/postgresql.png";
import Tools14 from "/assets/tools/mysql.png";
import Tools15 from "/assets/tools/sqlite.png";
import Tools16 from "/assets/tools/firebase.png";

import Tools17 from "/assets/tools/github.png";
import Tools18 from "/assets/tools/vscode.png";

export const listTools = {
  languages: [
    {
      id: 1,
      gambar: Tools1,
      nama: "Dart",
      ket: "Language",
      dad: "100",
    },
    {
      id: 2,
      gambar: Tools2,
      nama: "Kotlin",
      ket: "Language",
      dad: "200",
    },
    {
      id: 3,
      gambar: Tools3,
      nama: "Java",
      ket: "Language",
      dad: "300",
    },
    {
      id: 4,
      gambar: Tools4,
      nama: "Go",
      ket: "Language",
      dad: "400",
    },
    {
      id: 5,
      gambar: Tools5,
      nama: "JavaScript",
      ket: "Language",
      dad: "500",
    },
  ],

  mobile: [
    {
      id: 6,
      gambar: Tools6,
      nama: "Flutter",
      ket: "Framework",
      dad: "100",
    },
    {
      id: 7,
      gambar: Tools7,
      nama: "Android Studio",
      ket: "IDE",
      dad: "200",
    },
  ],

  backendWeb: [
    {
      id: 8,
      gambar: Tools8,
      nama: "Node.js",
      ket: "JavaScript Runtime",
      dad: "100",
    },
    {
      id: 9,
      gambar: Tools9,
      nama: "Express.js",
      ket: "Backend Framework",
      dad: "200",
    },
    {
      id: 10,
      gambar: Tools10,
      nama: "React.js",
      ket: "Frontend Library",
      dad: "300",
    },
    {
      id: 11,
      gambar: Tools11,
      nama: "Tailwind CSS",
      ket: "CSS Framework",
      dad: "400",
    },
    {
      id: 12,
      gambar: Tools12,
      nama: "Spring",
      ket: "Backend Framework",
      dad: "500",
    },
  ],

  database: [
    {
      id: 13,
      gambar: Tools13,
      nama: "PostgreSQL",
      ket: "Database",
      dad: "100",
    },
    {
      id: 14,
      gambar: Tools14,
      nama: "MySQL",
      ket: "Database",
      dad: "200",
    },
    {
      id: 15,
      gambar: Tools15,
      nama: "SQLite",
      ket: "Database",
      dad: "300",
    },
    {
      id: 16,
      gambar: Tools16,
      nama: "Firebase",
      ket: "Backend Service",
      dad: "4",
    },
  ],

  tools: [
    {
      id: 17,
      gambar: Tools17,
      nama: "GitHub",
      ket: "Repository",
      dad: "100",
    },
    {
      id: 18,
      gambar: Tools18,
      nama: "Visual Studio Code",
      ket: "Code Editor",
      dad: "200",
    },
  ],
};

import ProyekBanner1 from "/assets/proyek/project1.png";
import ProyekBanner2 from "/assets/proyek/project2.png";
import ProyekBanner3 from "/assets/proyek/project3.png";
import ProyekBannner4 from "/assets/proyek/project4.png";

import QuickmartSS1 from "/assets/proyek/quickmart/quickmart1.png";
import QuickmartSS2 from "/assets/proyek/quickmart/quickmart2.png";
import QuickmartSS3 from "/assets/proyek/quickmart/quickmart3.png";
import QuickmartSS4 from "/assets/proyek/quickmart/quickmart4.png";
import QuickmartSS5 from "/assets/proyek/quickmart/quickmart5.png";
import QuickmartSS6 from "/assets/proyek/quickmart/quickmart6.jpg";
import QuickmartSS7 from "/assets/proyek/quickmart/quickmart7.jpg";
import QuickmartSS8 from "/assets/proyek/quickmart/quickmart8.jpg";
import QuickmartSS9 from "/assets/proyek/quickmart/quickmart9.jpg";
import QuickmartSS10 from "/assets/proyek/quickmart/quickmart10.jpg";
import QuickmartSS11 from "/assets/proyek/quickmart/quickmart11.jpg";

import DocumentScannerSS1 from "/assets/proyek/document_scanner/scanner1.jpeg";
import DocumentScannerSS2 from "/assets/proyek/document_scanner/scanner2.jpeg";
import DocumentScannerSS3 from "/assets/proyek/document_scanner/scanner3.jpeg";
import DocumentScannerSS4 from "/assets/proyek/document_scanner/scanner4.jpeg";
import DocumentScannerSS5 from "/assets/proyek/document_scanner/scanner5.jpeg";
import DocumentScannerSS6 from "/assets/proyek/document_scanner/scanner6.jpeg";

import ExpenseTrackerSS1 from "/assets/proyek/expense_tracker/expense1.png";
import ExpenseTrackerSS2 from "/assets/proyek/expense_tracker/expense2.png";
import ExpenseTrackerSS3 from "/assets/proyek/expense_tracker/expense3.png";
import ExpenseTrackerSS4 from "/assets/proyek/expense_tracker/expense4.png";
import ExpenseTrackerSS5 from "/assets/proyek/expense_tracker/expense5.png";

import RecipeMealsSS1 from "/assets/proyek/recipe_meals/recipe1.png";
import RecipeMealsSS2 from "/assets/proyek/recipe_meals/recipe2.png";
import RecipeMealsSS3 from "/assets/proyek/recipe_meals/recipe3.png";
import RecipeMealsSS4 from "/assets/proyek/recipe_meals/recipe4.png";

export const listProyek = [
  {
    id: 1,
    slug: "quickmart",
    gambar: ProyekBanner1,
    nama: "QuickMart",
    kategori: "Mobile App",
    desk: "Retail Management App untuk Mengelola Stok dan Transaksi dengan Barcode Scanner",
    tools: ["Flutter", "Node.js", "Express.js", "Google ML Kit", "PostgreSQL"],
    dad: "200",
    screenshots: [
      QuickmartSS1,
      QuickmartSS2,
      QuickmartSS3,
      QuickmartSS11,
      QuickmartSS4,
      QuickmartSS5,
      QuickmartSS6,
      QuickmartSS7,
      QuickmartSS8,
      QuickmartSS9,
      QuickmartSS10,
    ],
    fitur: [
      "Manajemen produk dan stok",
      "Scan barcode",
      "Transaksi penjualan",
      "Integrasi payment gateway",
      "Analisis Fast Moving, Slow Moving, dan Non-Moving",
    ],
    backend: {
      description:
        "Backend QuickMart menyediakan REST API sebagai penghubung antara aplikasi Flutter dan database PostgreSQL. Backend menangani pengelolaan produk, stok, transaksi, serta proses komunikasi dengan layanan payment gateway.",
      architecture: [
        "Flutter",
        "REST API",
        "Node.js + Express.js",
        "PostgreSQL",
      ],
      responsibilities: [
        "Mengelola data produk dan stok",
        "Memproses transaksi penjualan",
        "Menyediakan REST API untuk aplikasi mobile",
        "Menyimpan dan mengambil data dari PostgreSQL",
        "Menghubungkan proses pembayaran dengan payment gateway",
      ],
      endpoints: [
        {
          method: "POST",
          endpoint: "/auth/register",
          description: "Register Pengguna",
        },
        {
          method: "POST",
          endpoint: "/auth/login",
          description: "Login Pengguna",
        },
        {
          method: "POST",
          endpoint: "/products/",
          description: "Membuat Produk Baru",
        },
        {
          method: "GET",
          endpoint: "/products/:user_id",
          description: "Mengambil Produk Pengguna",
        },
        {
          method: "GET",
          endpoint: "/products/product/:product_id",
          description: "Mencari Produk Berdasarkan ID Produk",
        },
        {
          method: "POST",
          endpoint: "/products/scan/:barcode_number",
          description: "Scan Barcode Pembelian",
        },
        {
          method: "PATCH",
          endpoint: "/products/:product_id/prices",
          description: "Mengubah Harga Produk",
        },
        {
          method: "PATCH",
          endpoint: "/products/:product_id/cost-price",
          description: "Mengubah Harga Pokok Produk",
        },
        {
          method: "PATCH",
          endpoint: "/products/:product_id/selling-price",
          description: "Mengubah Harga Jual Produk",
        },
        {
          method: "PATCH",
          endpoint: "/products/:product_id/status",
          description: "Mengubah Status Produk",
        },
        {
          method: "GET",
          endpoint: "/products/active-product/:user_id",
          description: "Mengambil Produk Aktif Pengguna",
        },
        {
          method: "GET",
          endpoint: "/products/active-barcode/:user_id/:barcode_number",
          description: "Mengambil Produk Aktif Pengguna Dengan Barcode",
        },
        {
          method: "POST",
          endpoint: "/supply/",
          description: "Membuat Supply Baru",
        },
        {
          method: "GET",
          endpoint: "/supply/:user_id",
          description: "Mengambil Supply Pengguna",
        },
        {
          method: "GET",
          endpoint: "/supply/total/:user_id",
          description: "Mengambil Total Nominal Supply Pengguna",
        },
        {
          method: "POST",
          endpoint: "/trasactions/",
          description: "Membuat Transaksi Baru",
        },
        {
          method: "GET",
          endpoint: "/trasactions/:user_id",
          description: "Mengambil Transaksi Pengguna",
        },
        {
          method: "GET",
          endpoint: "/trasactions/summary/:user_id",
          description: "Mengambil Total Income Pengguna",
        },
        {
          method: "POST",
          endpoint: "/detail-transaction/",
          description: "Membuat Detail Trasaksi Baru",
        },
        {
          method: "GET",
          endpoint: "/detail-transaction/:user_id",
          description: "Mengambil Detail Transaksi Pengguna",
        },
        {
          method: "GET",
          endpoint: "/detail-transaction/:transaction_id",
          description: "Mengambil Detail Transaksi Dengan ID Transaksi",
        },
        {
          method: "POST",
          endpoint: "/payment/token",
          description: "Membuat Token Midtrans",
        },
        {
          method: "GET",
          endpoint: "/fsn/:user_id/month/:month",
          description: "Mengambil Klasifikasi Fast, Slow, Non-moving",
        },
        {
          method: "GET",
          endpoint: "/notification/:user_id",
          description: "Mengambil Notifikasi Pengguna",
        },
        {
          method: "GET",
          endpoint: "/stock-histories/:user_id",
          description: "Mendapatkan Total Produk Terjual Pengguna",
        },
        {
          method: "GET",
          endpoint: "/latest-transaction/:user_id",
          description: "Mendapatkan Transaksi Terakhir Pengguna",
        },
      ],
    },
    github: "https://github.com/...",
    demo: "...",
  },
  {
    id: 2,
    slug: "document-scanner",
    gambar: ProyekBanner2,
    nama: "Document Scanner",
    kategori: "Mobile App",
    desk: "Smart Document Scanner untuk Memindai Nota, Kartu, dan Dokumen lainnya",
    tools: ["Flutter", "Google ML Kit", "SQLite"],
    dad: "300",
    screenshots: [
      DocumentScannerSS1,
      DocumentScannerSS2,
      DocumentScannerSS3,
      DocumentScannerSS4,
      DocumentScannerSS5,
      DocumentScannerSS6,
    ],
    fitur: [
      "Scan dokumen menggunakan kamera",
      "Deteksi dan crop dokumen otomatis",
      "Konversi dan simpan dokumen",
      "Expor dokument dalam format PDF",
    ],
    github: "https://github.com/...",
    demo: "...",
  },
  {
    id: 3,
    slug: "expense-tracker",
    gambar: ProyekBanner3,
    nama: "Expense Tracker",
    kategori: "Mobile App",
    desk: "Aplikasi Pencatatan dan Pengelolaan Keuangan Pribadi",
    tools: ["Flutter", "BLoC", "Firebase", "Spring Boot"],
    dad: "400",
    screenshots: [
      ExpenseTrackerSS1,
      ExpenseTrackerSS2,
      ExpenseTrackerSS3,
      ExpenseTrackerSS4,
      ExpenseTrackerSS5,
    ],
    fitur: [
      "Pencatatan pemasukan dan pengeluaran",
      "Kategorisasi transaksi",
      "Riwayat transaksi",
      "Ringkasan dan analisis keuangan",
      "Sinkronisasi data dengan backend",
    ],
    backend: {
      description:
        "Backend Expense Tracker menyediakan REST API untuk mengelola data keuangan pengguna dan menyimpan transaksi secara terstruktur. Backend menangani autentikasi, pengelolaan transaksi, serta komunikasi dengan database PostgreSQL.",

      architecture: [
        "Flutter",
        "BLoC",
        "REST API",
        "Java + Spring Boot",
        "PostgreSQL",
        "Firebase",
      ],

      responsibilities: [
        "Mengelola data transaksi pemasukan dan pengeluaran",
        "Menyediakan REST API untuk aplikasi mobile",
        "Memproses dan menyimpan data transaksi",
        "Mengambil data transaksi dari PostgreSQL",
        "Mengelola autentikasi dan data pengguna",
      ],
      endpoints: [
        {
          method: "POST",
          endpoint: "/auth/register",
          description: "Register Pengguna",
        },
        {
          method: "GET",
          endpoint: "/users/{userId}/categories",
          description: "Mengambil Data Kategori",
        },
        {
          method: "POST",
          endpoint: "/users/{userId}/categories",
          description: "Membuat Kategory Baru",
        },
        {
          method: "GET",
          endpoint: "/expenses/user/{userId}",
          description: "Mengambil Expense Pengguna",
        },
        {
          method: "POST",
          endpoint: "/expenses/user/{userId}",
          description: "Membuat Expense",
        },
        {
          method: "GET",
          endpoint: "/users",
          description: "Mendapatkan Data Pengguna",
        },
      ],
    },
    github: "https://github.com/...",
    demo: "...",
  },
  {
    id: 4,
    slug: "recipe-meals",
    gambar: ProyekBannner4,
    nama: "Recipe Meals",
    kategori: "Mobile App",
    desk: "Aplikasi resep makanan beserta cara pengolahan",
    tools: ["Flutter", "Riverpod"],
    dad: "500",
    screenshots: [
      RecipeMealsSS1,
      RecipeMealsSS2,
      RecipeMealsSS3,
      RecipeMealsSS4,
    ],
    fitur: [
      "Daftar dan pencarian resep",
      "Filter berdasarkan kategori makanan",
      "Informasi bahan dan takaran",
      "Langkah-langkah memasak",
      "Simpan resep favorit",
    ],
    github: "https://github.com/...",
    demo: "...",
  },
];
