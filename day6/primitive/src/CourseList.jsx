 
const CourseList = () => {

  const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap"
  ];

  return (<>
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="mb-6 text-3xl font-bold text-blue-600">
        Course List
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">

        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-5 text-center font-semibold text-blue-600 shadow-lg"
          >
            {course}
          </div>
        ))}

      </div>

    </div>
  </>);
};

export default CourseList;
