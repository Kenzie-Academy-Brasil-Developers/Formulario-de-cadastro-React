import { ContainerModalModal } from "./style";
import TechsProvider from "../../context/TechsContext/Techs"; 
import { ReactNode } from "react"

interface IModalProps{
  children: ReactNode;
}

export default function ModalModal({ children }:IModalProps){
    return(
      <ContainerModalModal>
        <div className="ModalBox">
      {children}
        </div>
      </ContainerModalModal>
      
    )
}