import Topo from "./Topo"
import Filmes from "./Filmes"
import Sessao from "./Sessão"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import BotaoVoltar from "./botaoVolatr"


export default function App(){

    const [assentosSelecionados, setAssentosSelecionados] = useState({
        ids: [],
        name: "",
        cpf: ""
    });
    const [sessao, setSessao] = useState([]);
    const [numerosAssentos, setNumerosAssentos] = useState([]);
    const [botao, setBotao] = useState(false)

    return(
        <BrowserRouter>
        <Topo>{botao !== false ? <BotaoVoltar/> : ""}</Topo>
        <Routes>
        <Route path="/" element={<Filmes setBotao={setBotao}/>} />
        <Route path="/sessoes/:idFilme" element={<Sessao setBotao={setBotao}/>} />
        <Route path="/assentos/:idSessao" element={<Assentos 
        assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados}
        sessao={sessao} setSessao={setSessao} setNumerosAssentos={setNumerosAssentos} 
        numerosAssentos={numerosAssentos} setBotao={setBotao}/>}/>
        <Route path="/sucesso" element={<Sucesso
        assentosSelecionados={assentosSelecionados} sessao={sessao} 
        numerosAssentos={numerosAssentos} setBotao={setBotao}/>} />
        </Routes>
        </BrowserRouter>
    )
}