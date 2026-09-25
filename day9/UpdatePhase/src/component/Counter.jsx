 import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Counter
      </h2>

      <p className="text-5xl font-bold text-blue-600 mb-6">
        {count}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
 </> );
};

export default Counter;