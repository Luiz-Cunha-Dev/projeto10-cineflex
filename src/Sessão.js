import styled from "styled-components"
import Rodape from "./Rodape"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loading from "./img/loading.gif"

export default function Sessao({setBotao}){
    const [sessao, setSessao] = useState([]);
    const [dias, setDias] = useState([]);
    const {idFilme} = useParams();
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
		const requisicao = axios.get(URL);

		requisicao.then(resposta => {
			setSessao(resposta.data);
            setDias(resposta.data.days)
            setBotao(true)
		});

		requisicao.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);


    if(sessao.length === 0){   
        return(
            <TelaDeCarregamento>
            <img src={loading} alt="loading" />
            </TelaDeCarregamento>            
        )
    }


    return(
        <>
        <Texto><p>Selecione o horário</p></Texto>
        <SessoesDisponiveis>
        {dias.map((d, index) => 
        <Opcao key={index}>
            <p data-identifier="session-date">{`${d.weekday} - ${d.date}`}</p>
            <Link to={`/assentos/${d.showtimes[0].id}`}>
            <button data-identifier="hour-minute-btn">{d.showtimes[0].name}</button>
            </Link>
            <Link to={`/assentos/${d.showtimes[1].id}`}>
            <button data-identifier="hour-minute-btn">{d.showtimes[1].name}</button>
            </Link>
        </Opcao>
    )}
        <Rodape imagem={sessao.posterURL} filme={sessao.title}/>
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

const Opcao= styled.div`
`

const TelaDeCarregamento= styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`