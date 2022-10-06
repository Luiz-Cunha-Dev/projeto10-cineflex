import styled from "styled-components"

export default function Sucesso(){
    return(
        <>
        <Texto><h1>Pedido feito<br/>com sucesso!</h1></Texto>
        <Informacoes>
           <h2>Filme e sessão</h2> 
           <p>Enola Holmes<br/>24/06/2021 15:00</p>
           <h2>Ingressos</h2>
           <p>Assento 15<br/>Assento 16</p>
           <h2>Comprador</h2>
           <p>Nome: João da Silva Sauro<br/>CPF: 123.456.789-10</p>
           <button>Voltar pra Home</button>
        </Informacoes>
        </>
    )
}


const Texto= styled.div`
margin-top: 67px;
height: 110px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -9px;
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #247A6B;
}
`

const Informacoes= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 28px;
h2{
width: 327px;
margin-top: 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
}
p{
width: 327px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
}
button{
background: #E8833A;
border-radius: 3px;
width: 225px;
height: 42px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
border: thin;
margin-top: 70px;
margin-left: -28px;
}
`