import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Import mathjs for evaluation

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      // Replace 'x' with '*' to handle multiplication
      const formattedInput = input.replace(/x/g, '*');
      
      // Evaluate the formatted input
      setInput(evaluate(formattedInput).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('x^2')}>x²</button>
        <button onClick={() => handleClick('1/x')}>1/x</button>
        <button onClick={() => handleClick('|x|')}>|x|</button>
        <button onClick={() => handleClick('exp(')}>exp</button>

        <button className="highlight" onClick={() => handleClick('sqrt(')}>√</button>
        <button onClick={() => handleClick('mod')}>mod</button>
        <button onClick={() => handleClick('pi')}>π</button>
        <button onClick={() => handleClick('e')}>e</button>

        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('n!')}>n!</button>
        <button onClick={() => handleClick('x^y')}>x^y</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('x')}>x</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('.')}>.</button>
        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('%')}>%</button>
        
        <button className="wide-button" onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
