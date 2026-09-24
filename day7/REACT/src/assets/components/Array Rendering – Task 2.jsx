 const App = () => {
  const cities = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Madurai",
    "Coimbatore",
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        Cities
      </h1>

      <div className="mx-auto max-w-md space-y-3">
        {cities.map((city, index) => (
          <p
            key={index}
            className="rounded-lg bg-white p-4 text-center text-lg shadow"
          >
            {city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;