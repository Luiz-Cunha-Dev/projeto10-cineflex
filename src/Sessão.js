import styled from "styled-components"

export default function Sessao(){
    return(
        <>
        <Texto><p>Selecione o horário</p></Texto>
        <SessoesDisponiveis>
            <p>Quinta-feira - 24/06/2021</p>
            <button>15:00</button>
            <button>19:00</button>
            <p>Sexta-feira - 25/06/2021</p>
            <button>15:00</button>
            <button>19:00</button>
        </SessoesDisponiveis>
        </>
    )
}

const SessoesDisponiveis= styled.div`
margin-left: 24px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;
color: #293845;  
margin-bottom: 22px;
}
button{
width: 83px;
height: 43px;
background: #E8833A;
border-radius: 3px;
border: thin;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-right: 8px;
margin-bottom: 23px;
}
`

const Texto= styled.div`
margin-top: 67px;
height: 110px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #293845;
}
`