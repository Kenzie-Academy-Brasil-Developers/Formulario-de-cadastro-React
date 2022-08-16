
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { allContext } from "../../context/AllContext";
import { ContainerModal } from "./style";
import { techsContext } from "../../context/TechsContext/Techs";


export default function Modal(){

  const {onSubmitTech, navigate, isOpenModal, setIsOpenModal } = useContext(techsContext)
  

  const formSchema = yup.object().shape({
    title: yup
    .string()
    .required("Nome da Tecnologia obrigatório"),
    status: yup.string().required("Campo obrigatório"),
    
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const addTechSubmitForm = (data)=>{
    
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