import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <Link href="#about">About Me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="/contact">Contact Me</Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to My Portfolio</h1>
          <p className={styles.description}>
            I'm a web developer passionate about creating amazing experiences.
          </p>
        </section>

        <section id="about" className={styles.about}>
          <h2>About Me</h2>
          <div className={styles.profile}>
            <p>
              Hello! I'm a web developer with a passion for creating intuitive and efficient web applications. 
              I specialize in React and Next.js, and I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <h2>Highlighted Projects</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Project 1</h3>
              <p>A brief description of Project 1 and its key features.</p>
            </div>
            <div className={styles.card}>
              <h3>Project 2</h3>
              <p>A brief description of Project 2 and its key features.</p>
            </div>
            <div className={styles.card}>
              <h3>Project 3</h3>
              <p>A brief description of Project 3 and its key features.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}