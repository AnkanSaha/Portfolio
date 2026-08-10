export type Operator = "+" | "-" | "×" | "÷";

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operator: Operator | null;
  awaitingOperand: boolean;
}

export const initialCalculatorState: CalculatorState = {
  display: "0",
  previousValue: null,
  operator: null,
  awaitingOperand: false,
};

function apply(a: number, b: number, op: Operator): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? NaN : a / b;
  }
}

export function inputDigit(state: CalculatorState, digit: string): CalculatorState {
  if (state.awaitingOperand) {
    return { ...state, display: digit, awaitingOperand: false };
  }
  return { ...state, display: state.display === "0" ? digit : state.display + digit };
}

export function inputDecimal(state: CalculatorState): CalculatorState {
  if (state.awaitingOperand) return { ...state, display: "0.", awaitingOperand: false };
  if (state.display.includes(".")) return state;
  return { ...state, display: state.display + "." };
}

export function clear(): CalculatorState {
  return initialCalculatorState;
}

export function toggleSign(state: CalculatorState): CalculatorState {
  const value = parseFloat(state.display);
  return { ...state, display: String(value * -1) };
}

export function inputPercent(state: CalculatorState): CalculatorState {
  const value = parseFloat(state.display);
  return { ...state, display: String(value / 100) };
}

export function chooseOperator(state: CalculatorState, op: Operator): CalculatorState {
  const inputValue = parseFloat(state.display);

  if (state.previousValue === null) {
    return { ...state, previousValue: inputValue, operator: op, awaitingOperand: true };
  }

  if (state.awaitingOperand) {
    return { ...state, operator: op };
  }

  const result = apply(state.previousValue, inputValue, state.operator ?? op);
  return {
    display: Number.isFinite(result) ? String(result) : "Error",
    previousValue: result,
    operator: op,
    awaitingOperand: true,
  };
}

export function equals(state: CalculatorState): CalculatorState {
  if (state.operator === null || state.previousValue === null) return state;
  const inputValue = parseFloat(state.display);
  const result = apply(state.previousValue, inputValue, state.operator);
  return {
    display: Number.isFinite(result) ? String(result) : "Error",
    previousValue: null,
    operator: null,
    awaitingOperand: true,
  };
}
