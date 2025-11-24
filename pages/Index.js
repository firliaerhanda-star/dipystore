import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Daftar paket top up sesuai contoh
  const topupPackages = [
    { name: 'Paket Pemula', bbc: 1000, price: 5000 },
    { name: 'Paket Reguler', bbc: 5000, price: 25000 },
    { name: 'Paket Advanced', bbc: 10000, price: 50000 },
    { name: 'Paket Elite', bbc: 15000, price: 75000 },
    { name: 'Paket Pro', bbc: 20000, price: 100000 },
    { name: 'Paket Ultimate', bbc: 50000, price: 250000 },
    { name: 'Paket Max', bbc: 100000, price: 500000 },
  ]

  return (
    <>
      <Head>
        <title>TopUp BBC MLBB Advance Server | Saktistore</title>
        <meta name="description" content="Dapatkan BBC dengan harga terbaik, proses cepat & aman, support 24/7 untuk MLBB Advance Server" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.mainContainer}>
        {/* Bagian Atas: Logo & Judul */}
        <div className={styles.headerSection}>
          <Image
            src="/mlbb-logo.png"
            alt="MLBB Advance Server Logo"
            width={80}
            height={80}
            className={styles.logo}
          />
          <h1 className={styles.mainTitle}>Top Up BBC MLBB Advance Server</h1>
          <p className={styles.subtitle}>Dapatkan BBC dengan harga terbaik untuk meningkatkan pengalaman bermain MLBB Advance Server Anda</p>
        </div>

        {/* Bagian Fitur Utama */}
        <div className={styles.featuresSection}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>Proses Cepat & Aman</h3>
            <p>BBC akan dikirim ke akun Anda dalam waktu 5 menit setelah pembayaran berhasil</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📦</span>
            <h3>Berbagai Paket Tersedia</h3>
            <p>Dari paket pemula hingga ultimate, pilih sesuai kebutuhan dan budget Anda</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>💬</span>
            <h3>Support 24/7</h3>
            <p>Tim support kami siap membantu Anda kapan saja melalui WhatsApp</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>✅</span>
            <h3>Stok Tersedia</h3>
            <p>Pembelian BBC dapat dilakukan secara normal</p>
          </div>
        </div>

        {/* Bagian Daftar Paket */}
        <div className={styles.packagesSection}>
          <h2 className={styles.packagesTitle}>Pilih Kategori - Top up BB COIN</h2>
          <div className={styles.packagesGrid}>
            {topupPackages.map((pkg, index) => (
              <div key={index} className={styles.packageCard}>
                <h3 className={pkg.name === 'Paket Advanced' ? styles.highlightPackageName : styles.packageName}>
                  {pkg.name}
                </h3>
                <p className={styles.packageBbc}>{pkg.bbc.toLocaleString()} BBC</p>
                <p className={styles.packagePrice}>Rp {pkg.price.toLocaleString()}</p>
                <button className={styles.buyButton}>Beli Sekarang</button>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Footer Sederhana */}
        <footer className={styles.footer}>
          <p>© 2025 Saktistore | Top Up BBC MLBB Advance Server</p>
        </footer>
      </main>
    </>
  )
}
