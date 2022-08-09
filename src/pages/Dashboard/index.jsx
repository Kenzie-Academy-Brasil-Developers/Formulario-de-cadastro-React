import { useResetProjection } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function Dashboard({users}){
    const navigate = useNavigate()

    console.log(users)
    return(
        <div className="main">
            <div className="divHomeHeader">
                <p>Home</p> 
                </div>
            <div className="dashHeader">
                <span>Kenzie Hub</span>
                <button 
                onClick={()=> navigate("/login")}
                className="btnSair">Sair</button>
            </div>
            <div className="dashbody">
                <span className="spanBody">Olá, {users.name}</span>
                <span className="spanBody1">{users.course_module}</span>
            </div>
            <div className="dashFooter">
                <span className="spanBody">Que pena! Estamos em desenvolvimento :(</span>
                <p className="pFooter">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </div>
    )
}