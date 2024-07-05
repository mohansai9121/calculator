import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [prevoperand, setPrevOperand] = useState("");
  const [nextOperand, setNextOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [isOperate, setIsOperate] = useState(false);
  const [dotPresent, setDotPresent] = useState(false);

  const addingNumbers = (num) => {
    let previous = nextOperand;
    previous = previous + num;
    setNextOperand(previous);
  };

  const addingDot = () => {
    if (!dotPresent) {
      addingNumbers(".");
    }
    setDotPresent(true);
  };

  const addingOperator = (symbol) => {
    setOperator(symbol);
    setIsOperate(true);
    setPrevOperand(nextOperand);
    setNextOperand("");
    setDotPresent(false);
  };

  const displayResult = (pre, op, nex) => {
    let number1 = Number(pre);
    let number2 = Number(nex);
    if (op === "/") {
      setNextOperand(number1 / number2);
      setPrevOperand("");
      setOperator("");
    }
    if (op === "*") {
      setNextOperand(number1 * number2);
      setPrevOperand("");
      setOperator("");
    }
    if (op === "+") {
      setNextOperand(number1 + number2);
      setPrevOperand("");
      setOperator("");
    }
    if (op === "-") {
      setNextOperand(number1 - number2);
      setPrevOperand("");
      setOperator("");
    }
  };

  const deleting = (nex) => {
    if (nex) {
      console.log(String(nex).length);
      let nex1 = String(nex);
      setNextOperand(nex1.slice(0, nex1.length - 1));
    }
  };

  const allClear = () => {
    setIsOperate(false);
    setNextOperand("");
    setPrevOperand("");
    setOperator("");
    setDotPresent(false);
  };

  useEffect(() => {
    if (!dotPresent) {
      if (String(nextOperand).includes(".")) {
        setDotPresent(true);
      }
    }
  }, [nextOperand, dotPresent]);

  console.log(isOperate);
  console.log(nextOperand);

  return (
    <div>
      <center>
        <div className="heading">
          <h1>Calculator</h1>
        </div>
        <div className="calculator-grid">
          <div className="output">
            <div className="previous">
              {prevoperand ? prevoperand : ""}
              {operator ? operator : ""}
            </div>
            <div className="current">{nextOperand ? nextOperand : ""}</div>
          </div>
          <button
            className="span-two"
            style={{ borderRadius: "0" }}
            onClick={() => allClear()}
          >
            AC
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => deleting(nextOperand)}
          >
            DEL
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingOperator("/")}
          >
            ÷
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => {
              addingNumbers("1");
            }}
          >
            1
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("2")}
          >
            2
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("3")}
          >
            3
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingOperator("*")}
          >
            ×
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("4")}
          >
            4
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("5")}
          >
            5
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("6")}
          >
            6
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingOperator("+")}
          >
            +
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("7")}
          >
            7
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("8")}
          >
            8
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("9")}
          >
            9
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingOperator("-")}
          >
            -
          </button>
          <button style={{ borderRadius: "0" }} onClick={() => addingDot()}>
            .
          </button>
          <button
            style={{ borderRadius: "0" }}
            onClick={() => addingNumbers("0")}
          >
            0
          </button>
          <button
            className="span-two"
            style={{ borderRadius: "0" }}
            onClick={() => displayResult(prevoperand, operator, nextOperand)}
          >
            =
          </button>
        </div>
      </center>
    </div>
  );
};

export default App;
