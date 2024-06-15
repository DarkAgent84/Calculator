import React, { useState } from "react";
import { FaDivide, FaMinus, FaEquals, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const CalApp = () => {
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
    <React.Fragment>
      <div className="pt-10">
        <div className="bg-gray-900 w-96 mx-auto rounded-lg py-5">
          <div className="width-full text-gray-50 text-center text-3xl font-semibold mt-2">
            <p>Calculator App</p>
          </div>
          <div className="w-full overflow-x-scroll h-20">
            <input
              type="text"
              value={number}
              placeholder="0"
              className="w-full h-full border border-white bg-gray-900 text-4xl text-right px-5 text-white"
            ></input>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-10 mx-3">
            <button
              onClick={handleClear}
              className="flex justify-center items-center text-black w-20 h-20 bg-white rounded-lg font-bold text-3xl"
            >
              AC
            </button>
            <button
              onClick={handleSlice}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              C
            </button>
            <button
              value="/"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              <FaDivide />
            </button>
            <button
              value="+"
              onClick={handleClick}
              className="row-span-2 flex justify-center items-center text-white w-20 h-full bg-slate-700 rounded-lg font-bold text-3xl"
            >
              <FaPlus />
            </button>

            <button
              value="7"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              7
            </button>
            <button
              value="8"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              8
            </button>
            <button
              value="9"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              9
            </button>

            <button
              value="4"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              4
            </button>
            <button
              value="5"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              5
            </button>
            <button
              value="6"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              6
            </button>
            <button
              value="-"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              <FaMinus />
            </button>

            <button
              value="1"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              1
            </button>
            <button
              value="2"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              2
            </button>
            <button
              value="3"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              3
            </button>
            <button
              value="*"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              <FaXmark />
            </button>

            <button
              value="."
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              .
            </button>
            <button
              value="0"
              onClick={handleClick}
              className="flex justify-center items-center text-white w-20 h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              0
            </button>
            <button
              onClick={handleAnswer}
              className="col-span-2 flex justify-center items-center text-white w-full h-20 bg-slate-700 rounded-lg font-bold text-3xl"
            >
              <FaEquals />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
