 const App = () => {
  const courses = [
    "Python Full Stack",
    "Java Full Stack",
    "MERN Stack",
    "Data Science",
    "UI/UX",
  ];

  return (
    <div className="min-h-screen bg-green-100 p-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-green-700">
        Available Courses
      </h1>

      <div className="grid gap-5 md:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 text-center shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-800">{course}</h2>
            <button className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;