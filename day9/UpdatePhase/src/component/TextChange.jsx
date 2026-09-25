 import { useState } from "react";

const TextChange = () => {
  const [text, setText] = useState("Hello React");

  const changeText = () => {
    setText("Welcome to React");
  };

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        {text}
      </h2>

      <button
        onClick={changeText}
        className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg"
      >
        Change Text
      </button>
    </div>
 </> );
};

export default TextChange;