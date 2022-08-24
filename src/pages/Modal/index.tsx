
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContainerModal } from "./style";
import { ITechPreview, TechsContext } from "../../context/TechsContext/Techs";
import { IUser } from "../../context/AllContext";

export default function Modal(){

  const {onSubmitTech, setIsOpenModal } = useContext(TechsContext)
  

  const formSchema = yup.object().shape({
    title: yup
    .string()
    .required("Nome da Tecnologia obrigatório"),
    status: yup.string().required("Campo obrigatório"),
    
  });

  const { register, handleSubmit, formState: { errors }, } = useForm<ITechPreview>({
    resolver: yupResolver(formSchema),
  });

  const addTechSubmitForm = (data:ITechPreview)=>{
    
    onSubmitTech(data)
    
  }

   return(
<ContainerModal>
<div className="kenzie">
       <div className="container">
        <div className="divHeaderModal">
        <span className="spanHeaderModal">Cadastrar Tecnologia</span>
        <button
        onClick={() => setIsOpenModal(false)}
        className="btnDivHeaderModal">X</button>
        </div>
        <form 
        className="loginForm"
        onSubmit={handleSubmit(addTechSubmitForm)}
         >
          <label htmlFor="title">Nome</label>
          <input
          type="text"
          id="title" 
          className="loginInputTec"
          placeholder="Nome da Tecnologia"
          {...register("title")}
          />
          {errors.title?.message}
          <label>Selecionar Módulo</label>
            <select className="inputStatus" {...register("status")} >
              <option value="">Selecionar status </option>
              <option value={"Iniciante"}>
              Iniciante
              </option>
              <option value={"Intermediário"}>
              Intermediário
              </option>
              <option value={"Avançado"}>
              Avançado
              </option>
            </select>
          <button 
          className="btnEntrar" type="submit">
            Cadastrar Tecnologia
          </button>
           
        </form>
      </div>
    </div>
    </ContainerModal>
    )
}