  import { useState } from "react";

const AgeValidation = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age === "") {
      setMessage("Age is required");
    } else {
      setMessage(`Age: ${age}`);
      setAge("");
    }
  };

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Task 3 - Age Validation
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 text-lg font-semibold">
          {message}
        </p>
      )}
    </div>
  </>);
};

export default AgeValidation;