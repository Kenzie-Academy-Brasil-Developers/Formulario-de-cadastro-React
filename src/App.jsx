import {Routes, Route} from "react-router-dom"
import './App.css';
import "./pages/Login/style.js"
import "./pages/Register/style.js"
import "./pages/Dashboard/style.js"
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <div className="App">
    <RoutesMain />
    <ToastContainer/>
   </div>
  );
}

export default App;
