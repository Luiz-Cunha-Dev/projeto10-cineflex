import styled from "styled-components"

export default function Topo(){
    return(
        <TopoSite>
            <p>CINEFLEX</p>
        </TopoSite>
    )
}

const TopoSite = styled.div`
width: 100vw;
height: 67px;
background: #C3CFD9;
position: fixed;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
text-align: center;
color: #E8833A; 
}
`