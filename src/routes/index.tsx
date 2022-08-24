
import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AllContext } from "../context/AllContext";
import Modal from "../pages/Modal";



function RoutesMain() {
  // const {users, setUsers, onSubmitLogin, navigate, onSubmitRegister } = useContext(allContext) 


  return (
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/Modal" element={ <Modal /> } />
      <Route path="*" element={ <Navigate replace to="/login"/> } />
    </Routes>
  );
}

export default RoutesMain;