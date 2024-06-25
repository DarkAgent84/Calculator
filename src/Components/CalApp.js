import React, { useState } from "react";
import { FaDivide, FaMinus, FaEquals, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import './Calculator.css';
import { ThemeProvider, useTheme } from './ThemeContext';

const Calculator = () => {
    const { theme, toggleTheme } = useTheme();
    const [number, setNumber] = useState("");

    const handleClick = (e) => {
        setNumber(number.concat(e.target.value));
    };

    const handleClear = () => {
        setNumber("");
    };

    const handleSlice = () => {
        setNumber(number.slice(0, -1));
    };

    const handleAnswer = () => {
        try {
            setNumber(eval(number).toString());
        } catch (error) {
            setNumber("Invalid");
        }
    };

    return (
        <div className={`pt-10 flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className={`calculator ${theme === 'dark' ? 'dark-mode' : 'light-mode'} w-96 mx-auto rounded-lg py-5 shadow-lg`}>
                <div className="text-center text-3xl font-semibold mt-2">
                    <p>Calculator App</p>
                    <button onClick={toggleTheme} className="mt-2 px-4 py-2 rounded bg-blue-500 text-white">
                        Toggle Theme
                    </button>
                </div>
                <div className="w-full overflow-x-auto h-20 mt-4">
                    <input
                        type="text"
                        value={number}
                        placeholder="0"
                        className="w-full h-full text-4xl text-right px-5 rounded-lg"
                        readOnly
                    />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-10 mx-3 buttons">
                    <button onClick={handleClear} className="btn-clear" aria-label="All Clear">AC</button>
                    <button onClick={handleSlice} className="btn-secondary" aria-label="Clear Last Entry">C</button>
                    <button value="/" onClick={handleClick} className="btn-secondary" aria-label="Divide"><FaDivide /></button>
                    <button value="+" onClick={handleClick} className="btn-secondary btn-add" aria-label="Add"><FaPlus /></button>
                    <button value="7" onClick={handleClick} className="btn-primary" aria-label="7">7</button>
                    <button value="8" onClick={handleClick} className="btn-primary" aria-label="8">8</button>
                    <button value="9" onClick={handleClick} className="btn-primary" aria-label="9">9</button>
                    <button value="4" onClick={handleClick} className="btn-primary" aria-label="4">4</button>
                    <button value="5" onClick={handleClick} className="btn-primary" aria-label="5">5</button>
                    <button value="6" onClick={handleClick} className="btn-primary" aria-label="6">6</button>
                    <button value="-" onClick={handleClick} className="btn-secondary" aria-label="Subtract"><FaMinus /></button>
                    <button value="1" onClick={handleClick} className="btn-primary" aria-label="1">1</button>
                    <button value="2" onClick={handleClick} className="btn-primary" aria-label="2">2</button>
                    <button value="3" onClick={handleClick} className="btn-primary" aria-label="3">3</button>
                    <button value="*" onClick={handleClick} className="btn-secondary" aria-label="Multiply"><FaXmark /></button>
                    <button value="." onClick={handleClick} className="btn-primary" aria-label="Decimal">.</button>
                    <button value="0" onClick={handleClick} className="btn-primary" aria-label="0">0</button>
                    <button onClick={handleAnswer} className="col-span-2 btn-equals" aria-label="Equals"><FaEquals /></button>
                </div>
            </div>
        </div>
    );
};

const CalApp = () => (
    <ThemeProvider>
        <Calculator />
    </ThemeProvider>
);

export default CalApp;