import styled from "styled-components";


export const ContainerModal = styled.div`
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
.divHeaderModal{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #343B41;
}
.btnDivHeaderModal{
    color: #868E96;
    background-color: #343B41;
    outline: none;
    margin-right: 15px;

}
.spanHeaderModal{
    height: ;
    font-size: 14px;
    color:#F8F9FA ;
    margin-left: 15px;
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
  .loginInputTec{
  
    height: 38.5px;
    width: 90%;
    margin-bottom: 20px;
    background-color: #343B41;
    color: aliceblue;
    font-size: 0.8rem;
    border: solid 1.2px  #F8F9FA ;
    border-radius: 5px;
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

  
  
  .label{
    display: flex;
    align-items: center;
    width: 90%;
  }

  .inputStatus{
  
  height: 48px;
  width: 90%;
  margin-bottom: 20px;
  background-color: #343B41;
  color: #868E96;
  font-size: 0.8rem;
  border-radius: 5px;
  border: solid 1.2px  #F8F9FA ;
  

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
