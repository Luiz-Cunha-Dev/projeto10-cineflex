import styled from "styled-components"
import Inputs from "./Inputs"

export default function Assentos(){
    return(
        <ContainerAssentos>
        <Texto><p>Selecione o(s) assento(s)</p></Texto>
        <QuadroAcentos>
            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
            <button>10</button>

            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
            <button>10</button>

            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
            <button>10</button>

            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
            <button>10</button>

            <button>01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>05</button>
            <button>06</button>
            <button>07</button>
            <button>08</button>
            <button>09</button>
            <button>10</button>
        </QuadroAcentos>
        <Legenda >
            <Tipo cor={"#1AAE9E"} corBorda={"#0E7D71"}>
            <button ></button>
            <p>Selecionado</p>
            </Tipo>
            <Tipo cor={"#C3CFD9"} corBorda={"#7B8B99"}>
            <button></button>
            <p>Disponivel</p>
            </Tipo>
            <Tipo cor={"#FBE192"} corBorda={"#F7C52B"}>
            <button></button>
            <p>Indisponivel</p>
            </Tipo>
        </Legenda>
        <Inputs/>
        </ContainerAssentos>
    )
}

const ContainerAssentos= styled.div`
margin-bottom: 117px;
`

const Texto= styled.div`
margin-top: 67px;
height: 91px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
p{
margin-top: 19px;
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

const QuadroAcentos= styled.div`
margin-left: 24px;
margin-right: 17px;
display: flex;
flex-wrap: wrap;
button{
width: 26px;
height: 26px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
margin-right: 7px;
margin-bottom: 18px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #000000;
}
`

const Legenda= styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-bottom: 41px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
color: #4E5A65;
}
`

const Tipo= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button{
width: 25px;
height: 25px;
border-radius: 17px;
background: ${props => props.cor};
border: 1px solid ${props => props.corBorda};
}
`

