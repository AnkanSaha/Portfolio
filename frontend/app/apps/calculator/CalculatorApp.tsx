"use client";
import { useState } from "react";
import {
  initialCalculatorState,
  inputDigit,
  inputDecimal,
  inputPercent,
  toggleSign,
  chooseOperator,
  equals,
  clear,
  type Operator,
} from "./calculatorLogic";
import styles from "./CalculatorApp.module.css";

export default function CalculatorApp() {
  const [state, setState] = useState(initialCalculatorState);

  const digit = (d: string) => setState((s) => inputDigit(s, d));
  const op = (o: Operator) => setState((s) => chooseOperator(s, o));

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{state.display}</div>
      <div className={styles.grid}>
        <button type="button" className={`${styles.btn} ${styles.muted}`} onClick={() => setState(clear())}>
          C
        </button>
        <button type="button" className={`${styles.btn} ${styles.muted}`} onClick={() => setState(toggleSign)}>
          ±
        </button>
        <button type="button" className={`${styles.btn} ${styles.muted}`} onClick={() => setState(inputPercent)}>
          %
        </button>
        <button type="button" className={`${styles.btn} ${styles.op}`} onClick={() => op("÷")}>
          ÷
        </button>

        <button type="button" className={styles.btn} onClick={() => digit("7")}>7</button>
        <button type="button" className={styles.btn} onClick={() => digit("8")}>8</button>
        <button type="button" className={styles.btn} onClick={() => digit("9")}>9</button>
        <button type="button" className={`${styles.btn} ${styles.op}`} onClick={() => op("×")}>×</button>

        <button type="button" className={styles.btn} onClick={() => digit("4")}>4</button>
        <button type="button" className={styles.btn} onClick={() => digit("5")}>5</button>
        <button type="button" className={styles.btn} onClick={() => digit("6")}>6</button>
        <button type="button" className={`${styles.btn} ${styles.op}`} onClick={() => op("-")}>−</button>

        <button type="button" className={styles.btn} onClick={() => digit("1")}>1</button>
        <button type="button" className={styles.btn} onClick={() => digit("2")}>2</button>
        <button type="button" className={styles.btn} onClick={() => digit("3")}>3</button>
        <button type="button" className={`${styles.btn} ${styles.op}`} onClick={() => op("+")}>+</button>

        <button type="button" className={`${styles.btn} ${styles.zero}`} onClick={() => digit("0")}>0</button>
        <button type="button" className={styles.btn} onClick={() => setState(inputDecimal)}>.</button>
        <button type="button" className={`${styles.btn} ${styles.equals}`} onClick={() => setState(equals)}>=</button>
      </div>
    </div>
  );
}
