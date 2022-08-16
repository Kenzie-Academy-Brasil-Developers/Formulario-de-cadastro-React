import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./pages/Login/style.js";
import "./pages/Register/style.js";
import "./pages/Dashboard/style.js";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalModal from "./components/ModalModal";
import Modal from "./pages/Modal";
import { useContext } from "react";
import { techsContext } from "./context/TechsContext/Techs";

function App() {
  const {isOpenModal, setIsOpenModal} = useContext(techsContext);


  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer />
      {isOpenModal&& (<ModalModal>
        <Modal />
      </ModalModal>)}
    </div>
  );
}

export default App;
