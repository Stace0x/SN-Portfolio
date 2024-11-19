'use client'

import Link from 'next/link'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Form from '@/components/Contact/Form';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';

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
        <Projects />
        <Form />
      </main>

      <Footer />
    </div>
  );
}