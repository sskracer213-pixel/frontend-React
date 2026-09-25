 import { useState } from "react";

const HideShow = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Hide / Show
      </h2>

      {show && (
        <p className="text-lg text-gray-700 mb-4">
          Hello! This text can be hidden.
        </p>
      )}

      <button
        onClick={() => setShow(!show)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default HideShow;