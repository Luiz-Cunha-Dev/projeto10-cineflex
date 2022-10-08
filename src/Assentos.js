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
    const [assentosSelecionados, setAssentosSelecionados] = useState({
        ids: [],
        name: "",
        cpf: ""
    });
    const [ids,setIds] = useState([])
    const {idSessao} = useParams();


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
		const requisicao = axios.get(URL);

		requisicao.then(resposta => {
			setSessao(resposta.data);
            setAssentos(resposta.data.seats)
            setFilme(resposta.data.movie);
            setDia(resposta.data.day)
            console.log(resposta.data.seats);
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

    function selecionar(numero){
        let assentosReservados = assentosSelecionados;
        if(!assentosSelecionados.ids.includes(numero)){
            assentosReservados.ids = [...assentosReservados.ids, numero];
            setAssentosSelecionados(assentosReservados);
            setIds(assentosReservados.ids)
        }else{
            let numerosAssento = assentosSelecionados.ids;
            numerosAssento = numerosAssento.filter(n => n !== numero);
            assentosReservados.ids = numerosAssento;
            setAssentosSelecionados(assentosReservados);
            setIds(assentosReservados.ids)
        }
    }

    return(
        <ContainerAssentos>
        <Texto><p>Selecione o(s) assento(s)</p></Texto>

        <QuadroAssentos >
            {assentos.map(a => <Assento contorno={a.isAvailable === false ? "#F7C52B" : (ids.includes(a.name) ? "#0E7D71" : "#7B8B99")} fundo={a.isAvailable === false ? "#FBE192" : (ids.includes(a.name) ? "#1AAE9E" : "#C3CFD9")} onClick={() => selecionar(a.name)} key={a.name}>{a.name}</Assento>)}  
        </QuadroAssentos>

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

        {(ids.length !== 0) ? <Inputs/> : ""}

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

const QuadroAssentos= styled.div`
margin-left: 24px;
margin-right: 17px;
display: flex;
flex-wrap: wrap;
`
const Assento= styled.button`
width: 26px;
height: 26px;
background: ${props => props.fundo};
border: 1px solid ${props => props.contorno};//#808F9D;
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

