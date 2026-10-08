import { useState } from "react";
import { FiArrowRight, FiCheck, FiRefreshCw, FiShuffle, FiTrash2 } from "react-icons/fi";
import { maxDecisionOptions, parseDecisionOptions, pickRandomOption } from "../../utils/decisionPicker.js";
import styles from "./styles.module.css";

const starterOptions = "Take a short walk\nMake a cup of tea\nRead one more chapter";

const DecisionPicker = () => {
  const [text, setText] = useState(starterOptions);
  const [choice, setChoice] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  let options = [];
  let optionError = "";
  try {
    options = parseDecisionOptions(text);
  } catch (parseError) {
    optionError = parseError.message;
  }
  const rawCount = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).length;
  const removedDuplicates = rawCount - options.length;

  const makePick = () => {
    try {
      const nextChoice = pickRandomOption(options);
      setChoice(nextChoice);
      setHistory((current) => [nextChoice, ...current].slice(0, 5));
      setError("");
    } catch (pickError) {
      setError(pickError.message);
    }
  };

  const updateOptions = (event) => {
    setText(event.target.value);
    setChoice("");
    setHistory([]);
    setError("");
  };

  return (
    <section className={styles.picker} id="studio" aria-labelledby="picker-title">
      <div className={styles.pickerHeader}><div><p>THE DECISION DESK / 01</p><h2 id="picker-title">Let one option rise.</h2><span>Add the choices you can live with. Each unique line gets an equal chance.</span></div><span className={styles.countBadge}>{options.length} / {maxDecisionOptions} OPTIONS</span></div>
      <div className={styles.layout}>
        <div className={styles.optionsPanel}>
          <div className={styles.panelLabel}><label htmlFor="choice-options">Your options</label><span>ONE PER LINE</span></div>
          <textarea id="choice-options" rows="8" maxLength="7000" value={text} onChange={updateOptions} placeholder="Write a choice, then press Enter" aria-describedby="option-meta" />
          <div className={styles.optionMeta} id="option-meta"><span>{options.length} unique {options.length === 1 ? "choice" : "choices"}{removedDuplicates > 0 ? ` · ${removedDuplicates} duplicate${removedDuplicates === 1 ? "" : "s"} skipped` : ""}</span><span>Up to 120 characters each</span></div>
          {optionError && <p className={styles.error} role="alert">{optionError}</p>}
          {error && <p className={styles.error} role="alert">{error}</p>}
          <div className={styles.optionTokens} aria-label="Cleaned choices">
            {options.slice(0, 8).map((option, index) => <span key={`${option}-${index}`}><i>{String(index + 1).padStart(2, "0")}</i>{option}</span>)}
            {options.length > 8 && <span className={styles.moreToken}>+{options.length - 8} more</span>}
            {!options.length && <span className={styles.noTokens}>Your list will show up here.</span>}
          </div>
        </div>
        <div className={styles.drawPanel}>
          <div className={styles.drawLabel}><span>THE PICKER</span><span className={styles.ready}><i /> READY WHEN YOU ARE</span></div>
          <div className={`${styles.ticket} ${choice ? styles.ticketChosen : ""}`} aria-live="polite" aria-atomic="true">
            <span className={styles.ticketTop}>{choice ? "TODAY'S LITTLE DECISION" : "A SMALL DECISION, MADE"}</span>
            {choice ? <><strong>{choice}</strong><span className={styles.winner}><FiCheck aria-hidden="true" /> SELECTED AT RANDOM</span></> : <><div className={styles.ticketIcon}><FiShuffle aria-hidden="true" /></div><p>Your choice will land here.</p></>}
          </div>
          <button className={styles.pickButton} type="button" onClick={makePick} disabled={options.length < 2 || Boolean(optionError)}><FiShuffle aria-hidden="true" /> {choice ? "Pick again" : "Pick for me"} <FiArrowRight aria-hidden="true" /></button>
          <p className={styles.pickNote}>Every cleaned option has the same chance on each pick.</p>
        </div>
      </div>
      <div className={styles.pickerFoot}>
        <div className={styles.history}><div><span>RECENT PICKS</span><button type="button" onClick={() => setHistory([])} disabled={!history.length}><FiTrash2 aria-hidden="true" /> Clear</button></div>{history.length ? <ol>{history.map((item, index) => <li key={`${item}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol> : <p>Choices from this session will appear here.</p>}</div>
        <button className={styles.resetButton} type="button" onClick={() => { setText(starterOptions); setChoice(""); setHistory([]); setError(""); }}><FiRefreshCw aria-hidden="true" /> Reset the list</button>
      </div>
    </section>
  );
};

export default DecisionPicker;
