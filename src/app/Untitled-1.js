import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Josh Carlson</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Josh</span>
          <br />
          <span className={styles.title}>Carlson</span>
        </div>
        <div>
          <ul>
            <li>Age: 27</li>
            <li>Nationality: German</li>
            <li>Skill set: Project Management and Financial Performance</li>
            <li>Langages: English, German</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
