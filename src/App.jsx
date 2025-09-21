import AnotherHooks from "./components/AnotherHooks/AnotherHooks";
import ContextProvider from "./context/ContextProvider";
import "./style.css";

const App = () => {
  const value1 = "Azizbek 123 emes";
  const value2 = "Sultanbek 456 emes";

  return (
    <div>
      <ContextProvider value={{ value1, value2 }}>
        <AnotherHooks />
      </ContextProvider>
    </div>
  );
};

export default App;
