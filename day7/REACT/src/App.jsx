
import ArrayTask1 from "./assets/components/Array Rendering – Task 1";
import ArrayTask2 from "./assets/components/Array Rendering – Task 2";
import ArrayTask3 from "./assets/components/Array Rendering – Task 3";

import ObjectTask1 from "./assets/components/Object Rendering-Task 1";
import ObjectTask2 from "./assets/components/Object Rendering -Task 2";
import ObjectTask3 from "./assets/components/Object Rendering -Task 3";

const App = () => {
  return (<>
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-10 text-center text-4xl font-bold text-blue-600">
        React Data Rendering Tasks
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ArrayTask1 />
        <ArrayTask2 />
        <ArrayTask3 />

        <ObjectTask1 />
        <ObjectTask2 />
        <ObjectTask3 />
      </div>
    </div>
  </>);
}

export default App;

