import { useNavigate } from "react-router-dom";
import { allContext } from "../../context/AllContext";
import { useContext } from "react";
import { ContainerDashboard } from "./style";

export default function Dashboard() {
  const navigate = useNavigate();
  const { users } = useContext(allContext);

  console.log(users);
  return (
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
          <span className="spanBody">
            Que pena! Estamos em desenvolvimento :(
          </span>
          <p className="pFooter">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </ContainerDashboard>
  );
}
