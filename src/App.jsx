import {Routes, Route} from "react-router-dom"
import './App.css';
import "./pages/Login/style.css"
import "./pages/Register/style.css"
import "./pages/Dashboard/style.css"
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div className="App">
    <RoutesMain/>
    <ToastContainer/>
   </div>
  );
}

export default App;
