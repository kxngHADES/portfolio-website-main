import styles from './Footer.module.css';
export const runtime = "edge"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Let's Connect</h3>
            <div className={styles.socialLinks}>
              <a href="mailto:ndaedzomu101@gmail.com" className={styles.link}>
                Email
              </a>
              <a href="https://www.linkedin.com/in/rudzani-mudau/" className={styles.link} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/kxngHADES" className={styles.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3 className={styles.title}>Navigation</h3>
            <nav className={styles.nav}>
              <a href="#about" className={styles.link}>About</a>
              <a href="#projects" className={styles.link}>Projects</a>
            </nav>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ndaedzo Mudau
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
