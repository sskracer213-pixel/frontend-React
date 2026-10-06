import { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    employeeId: "",
    department: "",
    role: "",
    salary: ""
  });

  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedEmployee(employee);

    setEmployee({
      name: "",
      employeeId: "",
      department: "",
      role: "",
      salary: ""
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Employee Details Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Employee Name"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="text"
          name="employeeId"
          value={employee.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleChange}
          placeholder="Role"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-3 rounded-lg"
        >
          Submit Employee
        </button>
      </form>

      {submittedEmployee && (
        <div className="mt-6 bg-gray-100 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-3">
            Employee Details
          </h3>

          <p>
            <span className="font-semibold">Name:</span>{" "}
            {submittedEmployee.name}
          </p>

          <p>
            <span className="font-semibold">Employee ID:</span>{" "}
            {submittedEmployee.employeeId}
          </p>

          <p>
            <span className="font-semibold">Department:</span>{" "}
            {submittedEmployee.department}
          </p>

          <p>
            <span className="font-semibold">Role:</span>{" "}
            {submittedEmployee.role}
          </p>

          <p>
            <span className="font-semibold">Salary:</span>{" "}
            ₹{submittedEmployee.salary}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;