import { useContext } from "react"
import { ContainerTecnologias } from "./style";
import {FaRegTrashAlt} from "react-icons/fa"
import { techsContext } from "../../context/TechsContext/Techs";


export default function Tecnologias() {
  
  const {navigate, isTechs, removeTech} = useContext(techsContext)
  const {isOpenModal, setIsOpenModal} = useContext(techsContext);
 
  
  
  return (
    <ContainerTecnologias>
      <div>
        <div className="tecHeader">
          <span className="tecSpan">Tecnologias</span>
          <button
          onClick={()=> setIsOpenModal(!isOpenModal)}
          className="btnTecAdd">+</button>
        </div>
        <div className="divContainer">
          <ul className="tecContainer">
            {
            isTechs.map((elem, index)=>{ 
              return(
              <li className="tecCard" key={index}>
              <h3 className="tecH3">{elem.title}</h3>
              <div className="leftCard">
              <p className="tecP">{elem.status}</p>
              <button 
              className="btmRmvCard"
              onClick={()=> removeTech(elem.id)}
              ><FaRegTrashAlt /></button>
              </div>
              </li>)  
             })
            }
          </ul>
        </div>
      </div>
    </ContainerTecnologias>
  );
}
