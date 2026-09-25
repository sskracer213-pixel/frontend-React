 import Counter from "./component/Counter";
import TextChange from "./component/TextChange";
import HideShow from "./component/HideShow";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        React useState Tasks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Counter />

        <TextChange />

        <HideShow />

      </div>

    </div>
  );
};

export default App;