import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loading from "./img/loading.gif"


export default function Filmes({setBotao}){
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
		const requisicao = axios.get(URL);

		requisicao.then(resposta => {
			setItens(resposta.data);
            setBotao(false)
		});

		requisicao.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);


    if(itens.length === 0){   
        return(
            <TelaDeCarregamento>
            <img src={loading} alt="loading" />
            </TelaDeCarregamento>            
        )
    }
    

    return(
        <>
        <Texto><p>Selecione o filme</p></Texto>
        <FilmesSite>
            {itens.map((i, index) => 
            <Link key={index} to={`/sessoes/${i.id}`}>
            <Moldura data-identifier="movie-outdoor" ><img src={i.posterURL} alt={i.title} /></Moldura>
            </Link> )}
        </FilmesSite>
        </>
    )
}

const FilmesSite= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;;
img{
width: 129px;
height: 193px;
margin: 8px;
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

const Moldura = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
margin-bottom: 27px;
`
const TelaDeCarregamento= styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`