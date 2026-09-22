
const Employee = ({ employee }) => {

  return (<>
    <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold text-green-600">
        Employee Information
      </h2>

      <p className="mb-3">
        <b>Name:</b> {employee.name}
      </p>

      <p className="mb-3">
        <b>Role:</b> {employee.role}
      </p>

      <p className="mb-3">
        <b>Salary:</b> ₹{employee.salary}
      </p>

      <p>
        <b>City:</b> {employee.city}
      </p>

    </div>
 </> );
};

export default Employee;

