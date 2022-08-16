import styled from "styled-components";


export const ContainerTecnologias = styled.div`
  background-color: #000000;
  color: #F8F9FA;
  width: 780px;
  height: auto;
  background-color: #121214;
  padding: 0;
  
  .tecHeader{
    width: 100%;
    height: 60px;
    display: flex ;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
}
    .tecSpan{
        margin-left: 4px;
        color: #F8F9FA;
        font-size: 16px;
    }
    .btnTecAdd{
        background-color: #212529;
        color: #FFFFFF;
        width: 32px;
        height: 32px;
        border-radius: 4px;
        font-size: 1.3rem;
        font-weight: bold;
        margin-right: 4px;

    }
    .divContainer{
    width: 100%;
    height: 100%;
    display:flex ;
    align-items: center;
    flex-direction: column;

    background-color: #212529;
    list-style: none;
    padding: 0;    
    }
    .tecContainer{
    width: 100%;
    height: 100%;
    display:flex ;
    align-items: center;
    flex-direction: column;

    background-color: #212529;
    list-style: none;
    padding: 0;

    }
    .tecCard{
        width: 732px;
        height: 49px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #121214;
        border-radius: 4px ;
        margin-top: 20px;
        color: white;
        
        
    }
    .tecH3{
        font-size: 15px;
        color: #FFFFFF;
        margin-left: 15px;

    }
    .leftCard{
        width: 130px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
    }

    .btmRmvCard{
        font-size: 1rem;
        background: #121214;
        color: #FFFFFF;
    }
    .tecP{
        color: #868E96;
        font-size: 13px;

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
  }
`