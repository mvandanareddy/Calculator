import React, { useState } from "react";

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
    setHistory((prevInput) => [...prevInput, value]);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setHistory([]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      history.pop();
      setHistory([...history]);
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  return (
    <div className="font-roboto max-w-md mx-auto my-12 p-5 border border-gray-300 rounded-lg shadow-lg bg-gray-100">
      <div className="text-2xl font-bold text-center mb-5 text-gray-800">
        Calculator
      </div>
      <input
        className="w-full p-4 text-lg mb-5 rounded border border-gray-300 box-border text-right"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="p-4 text-lg rounded bg-green-500 text-white cursor-pointer transition duration-200 hover:bg-green-600"
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="p-4 text-lg rounded bg-green-500 text-white cursor-pointer transition duration-200 hover:bg-green-600"
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="p-4 text-lg rounded bg-green-500 text-white cursor-pointer transition duration-200 hover:bg-green-600"
          >
            {btn}
          </button>
        ))}
        {["0", ".", "%", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="p-4 text-lg rounded bg-green-500 text-white cursor-pointer transition duration-200 hover:bg-green-600"
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-2 p-4 text-lg rounded bg-red-500 text-white cursor-pointer transition duration-200 hover:bg-red-600"
        >
          Clear
        </button>
        <button
          onClick={handleUndo}
          className="p-4 text-lg rounded bg-orange-500 text-white cursor-pointer transition duration-200 hover:bg-orange-600"
        >
          Undo
        </button>
        <button
          onClick={handleCalculate}
          className="p-4 text-lg rounded bg-green-500 text-white cursor-pointer transition duration-200 hover:bg-green-600"
        >
          =
        </button>
      </div>
    </div>
  );
};
