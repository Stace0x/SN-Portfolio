'use client'

import Link from 'next/link'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Form from '@/components/Contact/Form';

export default function Home() {
 const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${scrollY > 50 ? styles['header-scrolled'] : ''}`}>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <About />

        <section id="projects" className={styles.projects}>
          <h2 className={styles.slide_in_left}>My Highlights</h2>
          <div className={styles.project_grid}>
            {[1, 2].map((project) => (
              <div key={project} className={`${styles.project_card} ${styles.fade_in}`}>
                <Image 
                  src={`/images/card-pic-1.png`} 
                  alt={`Project ${project}`} 
                  width={300} 
                  height={600} 
                  layout="responsive" 
                />
                <h3>Project {project}</h3>
                <p>A brief description of the project goes here.</p>
              </div>
            ))}
          </div>
        </section>
        <Form />
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}