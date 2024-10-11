'use client'

import Link from 'next/link'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero/Hero';

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

        <section id="about" className={styles.about}>
          <h2 className={styles.slide_in_left}>About Me</h2>
          <p className={styles.slide_in_right}>
          With a solid background in project management from the construction industry, I have transitioned into the tech world, focusing on back-end development and data engineering. My career journey began with a degree in Architectural Technology from Coventry University, followed by a hands-on experience in construction, where I developed a keen eye for detail and honed my problem-solving skills. This foundation has been invaluable as I pivoted into tech, specifically data engineering and back-end development.
          I recently completed a Full-Stack Development Bootcamp at the School of Code, which equipped me with practical knowledge in both front-end and back-end technologies, as well as a deep interest in data management. I am passionate about building scalable systems and ensuring data integrity to drive data-driven solutions. My experience includes creating REST APIs, managing SQL databases, and working with technologies like MongoDB and Supabase.
          When I'm not coding, I enjoy roller skating, specialty cake baking, and sewing. I am always excited to learn new things and take on challenges, both in tech and in my hobbies
          </p>
        </section>

        <section id="projects" className={styles.projects}>
          <h2 className={styles.slide_in_left}>My Highlights</h2>
          <div className={styles.project_grid}>
            {[1, 2, 3].map((project) => (
              <div key={project} className={`${styles.project_card} ${styles.fade_in}`}>
                <Image 
                  src={`/placeholder.svg?height=200&width=300`} 
                  alt={`Project ${project}`} 
                  width={300} 
                  height={200} 
                  layout="responsive" // Optional depending on how you want to size it
                />
                <h3>Project {project}</h3>
                <p>A brief description of the project goes here.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2 className={styles.slide_in_left}>Get in Touch</h2>
          <form className={styles.fade_in}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}