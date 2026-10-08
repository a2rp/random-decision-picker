import { FiArrowDown, FiArrowUpRight, FiShuffle, FiSun } from "react-icons/fi";
import BackToTop from "./components/backToTop/index.jsx";
import DecisionPicker from "./components/decisionPicker/index.jsx";
import SiteFooter from "./components/siteFooter/index.jsx";
import SiteHeader from "./components/siteHeader/index.jsx";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.appShell} id="top">
    <SiteHeader />
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.contextLabel}><span /> For the small stuff that takes all afternoon</p>
          <h1 id="hero-title">Less weighing.<br /><em>More doing.</em></h1>
          <p className={styles.intro}>Put the possibilities in one place and let chance make the first move. A fair little nudge when the choices all seem fine.</p>
          <div className={styles.heroActions}><a className={styles.primaryLink} href="#studio">Add your options <FiArrowDown aria-hidden="true" /></a><span><FiSun aria-hidden="true" /> Just for fun</span></div>
          <div className={styles.heroNote}><span>LESS LIST-MAKING</span><i /><span>MORE LIVING</span></div>
        </div>
        <div className={styles.heroArt} aria-label="Illustration of a colorful wheel with a selection pointer" role="img">
          <div className={styles.artHeader}><span>THE CHOICE WHEEL</span><span><FiShuffle aria-hidden="true" /> NO FAVORITES</span></div>
          <div className={styles.wheelStage}><div className={styles.wheelPointer} /><div className={styles.wheel}><div className={styles.wheelCenter}><span>GO</span><FiArrowUpRight aria-hidden="true" /></div></div><span className={styles.wheelChip}>PICK 01</span><span className={styles.wheelOrbit}>EQUAL CHANCE</span></div>
          <div className={styles.artFooter}><span>YOUR LIST</span><i /><span>YOUR CALL, MADE</span></div>
        </div>
        <a className={styles.scrollCue} href="#studio"><span>OPEN THE PICKER</span><FiArrowDown aria-hidden="true" /></a>
      </section>
      <DecisionPicker />
      <section className={styles.guide} id="guide" aria-labelledby="guide-title">
        <div className={styles.guideIntro}><p className={styles.contextLabel}>NO SPREADSHEET NEEDED</p><h2 id="guide-title">A fair nudge for low-stakes choices.</h2><p>When the options are all acceptable, a random pick can help you move forward. Keep the list clear, then see where it points.</p></div>
        <div className={styles.guideCards}>
          <article><span>01 / SAME ODDS</span><h3>One line, one chance</h3><p>Blank lines and duplicate entries are removed, so every unique option gets an equal chance.</p></article>
          <article><span>02 / YOUR CALL</span><h3>Set the boundaries</h3><p>Only list options you are comfortable choosing. The picker cannot know your priorities or constraints.</p></article>
          <article><span>03 / JUST FOR FUN</span><h3>Keep it low-stakes</h3><p>This uses browser randomness for casual choices. It is not built for lotteries, security, or decisions with serious consequences.</p></article>
        </div>
        <p className={styles.privacyNote}>Your list and recent picks stay in this tab and are cleared when you refresh.</p>
        <div className={styles.guideFoot}><span>SMALL CHOICE, FRESH START</span><a href="#studio">Try another round <FiArrowUpRight aria-hidden="true" /></a></div>
      </section>
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
);

export default App;
