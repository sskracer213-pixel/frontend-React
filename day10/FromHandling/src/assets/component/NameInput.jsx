 import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Task 1 - Name Input
      </h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg outline-none"
      />

      <p className="mt-4 text-lg">
        Name: <span className="font-semibold">{name}</span>
      </p>
    </div>
  </>);
};

export default NameInput;