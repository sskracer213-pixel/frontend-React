 import { useState } from "react";

const EmailSubmit = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Task 2 - Email Submit
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>

      {submittedEmail && (
        <p className="mt-4 text-lg">
          Email: <span className="font-semibold">{submittedEmail}</span>
        </p>
      )}
    </div>
  </>);
};

export default EmailSubmit;