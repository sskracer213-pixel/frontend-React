 
const Student = () => {

  const student = {
    name: "Santhosh",
    age: 22,
    course: "React",
    city: "Chennai"
  };

  return (<>
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-5 text-2xl font-bold text-green-600">
          Student Details
        </h1>

        <p className="mb-2">
          <b>Name:</b> {student.name}
        </p>

        <p className="mb-2">
          <b>Age:</b> {student.age}
        </p>

        <p className="mb-2">
          <b>Course:</b> {student.course}
        </p>

        <p>
          <b>City:</b> {student.city}
        </p>

      </div>

    </div>
 </> );
};

export default Student;

