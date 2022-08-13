import styled from "styled-components";


export const ContainerLogin = styled.div`
 background-color: #000000;
color: #F8F9FA;

.kenzie{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 370px;
    height: auto;
    background-color: #000000;
    margin-top: 20%;
}
span{
    color: #FF577F;
    font-size: 1.7rem;
    font-weight:bold ;
}
.container{

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #212529;
    margin-top: 7%;
  }
h3{
    font-size: 1rem;
    color: #F8F9FA;
}
  .loginForm{
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center ;
    width: 90%;
    color: aliceblue;
    margin-top: 10px;
    
  
  }
  label{
    width: 90%;
    text-align: left;
}
  }
 
.dsc{
    display: flex;
    text-align: left;
    align-items: flex-start;
}
  .loginInput{
  
    height: 38.5px;
    width: 90%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: aliceblue;
    font-size: 0.8rem;
    border-color: #F8F9FA;
    border-radius: 5px;
  
  }
  .loginPassword{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 38.5px;
    width: 90%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: aliceblue;
    font-size: 0.8rem;
    border-color: #F8F9FA;
    border-radius: 5px;
    border-style: inset;
    
  
  }
  .loginPassword:focus-within {
    /* font-weight: bold;
    border-color: #F8F9FA;
    border-style: outset; */
    outline: 2px solid #F8F9FA;
    outline-offset: 2px;
    outline-style: inset;
    border-style: none;
    
  }
  .inputPassword{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 38.5px;
    width: 90%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: aliceblue;
    font-size: 0.8rem;
    border-color: #F8F9FA;
    border-radius: 5px;
  
  }
  .abrirSenha{
    height: 38.5px;
    background-color: #343B41;
    color: #F8F9FA;
    font-size: 0.5rem;
    border: none;
    border-radius: 5px;
  }
  .InputSenha{
    height: 100%;
    width: 90%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: aliceblue;
    font-size: 0.8rem;
    border-color: #F8F9FA;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    outline: none;
    
    
  }
  .btnEntrar{
    background-color: #FF577F;
    width: 90%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 15px;
  }
  .btnEntrar:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid red;
    border-radius: 5%;

  }

  .btnCadastro{
    background-color: #868E96;
    width: 90%;
    height: 50px;
    border-radius: 5px;
    border: none;
    color: aliceblue;
    font-size: 1rem;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .btnCadastro:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 3px solid red;
    border-radius: 5%;
  }
  h4{
    width: 100%;
    color: #868E96;
    font-size: 0.75rem;
    font-weight: none;
    
    
  }

  
  .label{
    display: flex;
    align-items: center;
    width: 90%;
  }

  @media (min-width: 375px) {
    .main{
      width: 365px;
      flex-wrap: wrap;
        }
  }

  @media (min-width: 425px) {
    .main{
      width: 425px;
      flex-wrap: wrap;
        }
  }
@media (min-width: 768px) {
    .main{
      width: 768px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1024px) {
    .main{
      width: 1024px;
      flex-wrap: wrap;
        }
  }
  @media (min-width: 1440) {
    .main{
      width: 1440px;
      flex-wrap: wrap;
        }
  }`
