 const App = () => {
  const student = {
    name: "Santhosh",
    age: 21,
    course: "Python Full Stack",
    city: "Chennai",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-md rounded-xl bg-blue-500 p-6 text-white shadow-xl">
        <h1 className="mb-5 text-3xl font-bold">Student Details</h1>

        <p className="mb-2">Name: {student.name}</p>
        <p className="mb-2">Age: {student.age}</p>
        <p className="mb-2">Course: {student.course}</p>
        <p>City: {student.city}</p>
      </div>
    </div>
  );
};

export default App;