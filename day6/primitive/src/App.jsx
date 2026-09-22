import Course from "./CourseList";
import Student from "./Student";
import Product from "./ProductList";
import Employee from "./Employee";

const App = () => {
  return (
    <div>
      <Course />
      <Student />
      <Product />

      <Employee
        employee={{
          name: "santhoosh",
          role: "Web Developer",
          salary: 40000,
          city: "Chennai"
        }}
      />
    </div>
  );
};

export default App;