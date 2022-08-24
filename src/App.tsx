import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./pages/Login/style.ts";
import "./pages/Register/style.ts";
import "./pages/Dashboard/style.ts";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalModal from "./components/ModalModal";
import Modal from "./pages/Modal";
import { useContext } from "react";
import { TechsContext } from "./context/TechsContext/Techs";


function App() {
  const {isOpenModal} = useContext(TechsContext);


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
