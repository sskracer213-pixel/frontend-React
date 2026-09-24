 const App = () => {
  const languages = ["JavaScript", "Python", "Java", "C++", "React"];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
        Programming Languages
      </h1>

      <div className="mx-auto max-w-md space-y-3">
        {languages.map((language, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 text-lg font-semibold shadow"
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;