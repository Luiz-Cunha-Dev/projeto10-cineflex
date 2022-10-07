import styled from "styled-components"
import Inputs from "./Inputs"
import Rodape from "./Rodape"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Assentos(){

    const [sessao, setSessao] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [filme, setFilme] = useState([]);
    const [dia, setDia] = useState([]);
    const {idSessao} = useParams();
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
		const requisicao = axios.get(URL);

		requisicao.then(resposta => {
			setSessao(resposta.data);
            setAssentos(resposta.data.seats)
            setFilme(resposta.data.movie);
            setDia(resposta.data.day)
            console.log(resposta.data);
		});

		requisicao.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);

    if(sessao === []){
        return(
            <p>Loading...</p>
        )
    }

    return(
        <ContainerAssentos>
        <Texto><p>Selecione o(s) assento(s)</p></Texto>
        <QuadroAcentos>
            {assentos.map(a => <button key={a.name}>{a.name}</button>)}
            
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
        <Rodape imagem={filme.posterURL} filme={filme.title}>
             <br/> {dia.weekday} - {sessao.name}
        </Rodape>          
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

