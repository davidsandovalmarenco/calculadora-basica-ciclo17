import { useState } from "react";

const useCalculate = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const calculate = () => {
        const n1 = Number.parseFloat(num1);
        const n2 = Number.parseFloat(num2);

        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            setResult("Error: Ingrese números válidos");
            return;
        }
        const result = n1 + n2;
        setResult(`Resultado: ${result}`);
    };

    return {
        num1,
        setNum1,
        num2,
        setNum2,
        result,
        setResult,
        calculate,
    };
};

export default useCalculate;