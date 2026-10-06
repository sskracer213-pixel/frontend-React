import StudentForm from "./StudentForm";
import EmployeeForm from "./EmployeeForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        React Form Tasks
      </h1>

      <div className="max-w-2xl mx-auto space-y-8">
        <StudentForm />
        <EmployeeForm />
      </div>
    </div>
  );
};

export default App;