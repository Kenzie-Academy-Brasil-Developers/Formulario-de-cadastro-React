import { useState } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";




function RoutesMain() {
  const [users, setUsers] = useState([]);



  return (
    <Routes>
      <Route path="/login" element={ <Login setUsers={setUsers}/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/dashboard" element={ <Dashboard users={users}/> } />
      <Route path="*" element={ <Navigate replace to="/login"/> } />
    </Routes>
  );
}

export default RoutesMain;