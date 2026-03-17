import { useMemo, useState } from "react";

type Operation = "add" | "subtract" | "multiply" | "divide";

const operationSymbols: Record<Operation, string> = {
  add: "+",
  subtract: "−",
  multiply: "×",
  divide: "÷",
};

const sanitizeInput = (value: string) => {
  let sanitized = value.replace(",", ".");
  sanitized = sanitized.replace(/[^0-9.-]/g, "");

  const parts = sanitized.split(".");
  if (parts.length > 2) {
    sanitized = `${parts[0]}.${parts.slice(1).join("")}`;
  }

  if (sanitized.indexOf("-") > 0) {
    sanitized = sanitized.replace(/-/g, "");
    sanitized = `-${sanitized}`;
  }

  const minusCount = (sanitized.match(/-/g) || []).length;
  if (minusCount > 1) {
    sanitized = sanitized.replace(/-/g, "");
    sanitized = `-${sanitized}`;
  }

  return sanitized;
};

const formatResult = (value: number) => {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return parseFloat(value.toFixed(4)).toString();
};

const useCalculate = () => {
  const [num1, setNum1State] = useState("");
  const [num2, setNum2State] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [operation, setOperation] = useState<Operation>("add");

  const setNum1 = (value: string) => {
    setNum1State(sanitizeInput(value));
    if (error) setError("");
  };

  const setNum2 = (value: string) => {
    setNum2State(sanitizeInput(value));
    if (error) setError("");
  };

  const canCalculate = useMemo(() => {
    return num1.trim() !== "" && num2.trim() !== "";
  }, [num1, num2]);

  const expression = useMemo(() => {
    return `${num1 || "0"} ${operationSymbols[operation]} ${num2 || "0"}`;
  }, [num1, num2, operation]);

  const clearValues = () => {
    setNum1State("");
    setNum2State("");
    setResult("");
    setError("");
    setOperation("add");
  };

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    setError("");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      setResult("");
      setError("Ingresa números válidos.");
      return;
    }

    let value = 0;

    switch (operation) {
      case "add":
        value = n1 + n2;
        break;
      case "subtract":
        value = n1 - n2;
        break;
      case "multiply":
        value = n1 * n2;
        break;
      case "divide":
        if (n2 === 0) {
          setResult("");
          setError("No se puede dividir entre cero.");
          return;
        }
        value = n1 / n2;
        break;
      default:
        setResult("");
        setError("Operación no válida.");
        return;
    }

    setResult(formatResult(value));
  };

  return {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    error,
    operation,
    setOperation,
    calculate,
    clearValues,
    canCalculate,
    expression,
  };
};

export default useCalculate;