import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";
import { fetchPhotos } from "./store/photos-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("nature", 8));
  }, [dispatch]);

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
