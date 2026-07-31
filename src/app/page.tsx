import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.tag}>Portfolio · Migration zu Next.js läuft</span>
      <h1 className={styles.title}>Serghei Granici</h1>
      <p className={styles.sub}>Senior UI/UX Designer — Komplexes bedienbar machen.</p>
    </main>
  );
}
