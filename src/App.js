import "./App.css";
import Header from "./components/header/Header";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <div className="left">
          <LeftPanel />
        </div>
        <div className="right">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
