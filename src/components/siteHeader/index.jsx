import { FiGithub, FiShuffle } from "react-icons/fi";
import styles from "./styles.module.css";

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.bar}>
      <a className={styles.brand} href="#top" aria-label="Random Decision Picker home">
        <span className={styles.brandMark}><FiShuffle aria-hidden="true" /></span>
        <span>Pick <b>One</b></span>
      </a>
      <nav className={styles.navigation} aria-label="Main navigation">
        <a href="#studio">Picker</a>
        <a href="#guide">How it works</a>
      </nav>
      <a className={styles.repository} href="https://github.com/a2rp/random-decision-picker" target="_blank" rel="noreferrer">
        <FiGithub aria-hidden="true" /> <span>Repository</span>
      </a>
    </div>
  </header>
);

export default SiteHeader;


