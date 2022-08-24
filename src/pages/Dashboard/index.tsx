import { Navigate, useNavigate } from "react-router-dom";
import { AllContext } from "../../context/AllContext";
import { useContext } from "react";
import { ContainerDashboard } from "./style";
import Tecnologias from "../../components/Tecnologias";
import { TechsContext } from "../../context/TechsContext/Techs";


export default function Dashboard() {
  const navigate = useNavigate();
  const { users } = useContext(AllContext);
  const {isTechs} = useContext(TechsContext);

  // console.log(`Dashboard`, users);
  return users? (
    <ContainerDashboard>
      <div className="dashMain">
        <div className="divHomeHeader">
          <p>Home</p>
        </div>
        <div className="dashHeader">
          <span>Kenzie Hub</span>
          <button onClick={() => navigate("/login")} className="btnSair">
            Sair
          </button>
        </div>
        <div className="dashbody">
          <span className="spanBody">{users?.name}</span>
          <span className="spanBody1">{users?.course_module}</span>
        </div>
        <div className="dashFooter">
          <Tecnologias/>
        </div>
      </div>
    </ContainerDashboard>
  )
  : <Navigate to="/login" replace />
  ;
}
