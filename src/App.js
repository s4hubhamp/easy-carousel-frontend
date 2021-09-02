import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import LeftPanel from "./components/leftPanel/LeftPanel";
import RightPanel from "./components/rightPanel/RightPanel";
import { fetchPhotos } from "./store/photos-actions";

import Modal from "./components/UI/model/Modal";
import { uiActions } from "./store/ui-slice";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);

  useEffect(() => {
    dispatch(fetchPhotos("nature"));
  }, [dispatch]);

  const closeModal = () => {
    dispatch(uiActions.toggleShowModal());
    dispatch(uiActions.deleteError());
  };

  return (
    <>
      <Spinner />

      {showModal && <Modal onClose={closeModal} />}

      <div className="app">
        <Header dispatch={dispatch} />

        <div className="main">
          <div className="left">
            <LeftPanel />
          </div>
          <div className="right">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
