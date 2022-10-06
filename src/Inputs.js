import styled from "styled-components"

export default function Inputs(){
    return(
        <InformacoesComprador>
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." />
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." />
            <button>Reservar assento(s)</button>
        </InformacoesComprador>
    )
}




const InformacoesComprador = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p{
width: 327px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
color: #293845;
}
input{
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
margin-bottom: 10px;
}
button{
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
border: thin;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
margin-top: 57px;
margin-bottom: 30px;
}
`