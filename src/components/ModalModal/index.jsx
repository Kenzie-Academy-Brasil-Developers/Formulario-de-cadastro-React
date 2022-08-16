import { ContainerModalModal } from "./style";


export default function ModalModal({children}){
    return(
      <ContainerModalModal>
        <div className="ModalBox">
      {children}
        </div>
      </ContainerModalModal>
      
    )
}