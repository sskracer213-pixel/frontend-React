 import NameInput from "./assets/component/NameInput";
import EmailSubmit from "./assets/component/EmailSubmit";
import AgeValidation from "./assets/component/AgeValidation";
import SearchInput from "./assets/component/SearchInput";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        React Form Tasks
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <NameInput />
        <EmailSubmit />
        <AgeValidation />
        <SearchInput />
      </div>
    </div>
  );
};

export default App;