import styled from "styled-components"
import { Link} from "react-router-dom"
import { useState } from "react"

export default function Inputs({assentosSelecionados, setAssentosSelecionados}){
    
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")

function cadastrar(){
    if(cpf.length !== 11){
        alert("CPF invalido!")
    }
    if(nome === ""){
        alert("nome invalido!")
    }
    let copia = assentosSelecionados;
    copia.name = nome;
    let copiaCpf= "";
    for(let i = 0; i < cpf.length; i++){
        if(i === 3 || i === 6 ){
            copiaCpf +="."
            copiaCpf+=cpf[i];
        }else if(i === 9){
            copiaCpf +="-"
            copiaCpf+=cpf[i];
        }else{
            copiaCpf+=cpf[i];
        }
    }
    copia.cpf= copiaCpf;
    setAssentosSelecionados(copia); 
}


    return(
        <InformacoesComprador>
            <form>
            <p>Nome do comprador:</p>
            <input data-identifier="buyer-name-input" type="name" placeholder="Digite seu nome..." 
            onChange={e => setNome(e.target.value)}
            />
            <p>CPF do comprador:</p>
            <input data-identifier="buyer-cpf-input" type="text" placeholder="Digite seu CPF..."
            onChange={e => setCpf(e.target.value)} />
            <StyledLink to={(cpf.length !== 11 || nome === "") ? "" : "/sucesso"}>
            <button data-identifier="reservation-btn" onClick={() => cadastrar()} >Reservar assento(s)</button>
            </StyledLink>
            </form>
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
const StyledLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
`