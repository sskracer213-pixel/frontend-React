import { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(student);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Student Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Enter Age"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Enter Course"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="text"
          name="city"
          value={student.city}
          onChange={handleChange}
          placeholder="Enter City"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Register Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;