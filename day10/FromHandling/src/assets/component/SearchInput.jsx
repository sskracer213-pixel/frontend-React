 import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (<>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Task 4 - Search Input
      </h2>

      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <p className="mt-4 text-lg">
        You are searching for:{" "}
        <span className="font-semibold">{search}</span>
      </p>
    </div>
  </>);
};

export default SearchInput;