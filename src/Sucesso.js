import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import axios  from "axios";

export default function Sucesso({assentosSelecionados, sessao, numerosAssentos}){
    let assentos = assentosSelecionados.ids;
    let filme = sessao.movie.title
    let data = sessao.day.date;
    let hora= sessao.name;

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
		const requisicao = axios.post(URL, assentosSelecionados);

		requisicao.then(resposta => console.log(resposta));

		requisicao.catch(erro => console.log(erro));
	}, []);

    return(
        <>
        <Texto><h1>Pedido feito<br/>com sucesso!</h1></Texto>
        <Informacoes>
           <h2>Filme e sessão</h2> 
           <p>{filme}<br/>{data} {hora}</p>
           <h2>Ingressos</h2>
           {numerosAssentos.map(a => <p key={a} >Assento {a}</p>)}
           <h2>Comprador</h2>
           <p>Nome: {assentosSelecionados.name}<br/>CPF: {assentosSelecionados.cpf}</p>
           <Link to={'/'}>
           <button>Voltar pra Home</button>
           </Link>
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
cursor: pointer;
}
`