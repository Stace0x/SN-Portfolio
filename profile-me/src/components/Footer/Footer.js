import styles from './Footer.module.css'; 
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Social Links */}
        <div className={styles.socialLinks}>
          <p>MORE CONNECTIONS</p>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/stace_nik/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/stacey-nicholas-478603204/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://github.com/Stace0x" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </div>
        {/* Phone Number */}
        <div className={styles.contactInfo}>
          <p>CALL ME</p>
          <p className={styles.phoneNumber}>078 6429 7826</p>
        </div>
      </div>
    </footer>
  );
}