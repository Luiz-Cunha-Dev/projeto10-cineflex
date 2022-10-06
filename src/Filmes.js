import styled from "styled-components"

export default function Filmes(){
    return(
        <>
        <Texto><p>Selecione o filme</p></Texto>
        <FilmesSite>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
            <Moldura><img src="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg" alt="mar" /></Moldura>
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