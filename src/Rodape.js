import styled from "styled-components"

export default function Rodape(){
    return(
        <RodapePagina>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="teste" /></Moldura>
            <p>Enola Holmes<br/>Quinta-feira - 15:00</p>

        </RodapePagina>

    )
}

const RodapePagina = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 117px;
display: flex;
align-items: center;
background: #DFE6ED;
border: 1px solid #9EADBA;
img{
width: 48px;
height: 72px;
margin: 8px;
}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;
}
`

const Moldura = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
margin-left: 10px;
margin-right: 14px;
`