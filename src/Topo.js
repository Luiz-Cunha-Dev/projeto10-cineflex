import styled from "styled-components"

export default function Topo(props){

    return(
        <TopoSite>
            {props.children}
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
position: relative;
}
img{
width: 35px;
position: absolute;
left: 0;
margin-left: 10px;
}
`