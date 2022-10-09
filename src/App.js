import Topo from "./Topo"
import Filmes from "./Filmes"
import Sessao from "./Sessão"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


export default function App(){

    const [assentosSelecionados, setAssentosSelecionados] = useState({
        ids: [],
        name: "",
        cpf: ""
    });
    const [sessao, setSessao] = useState([]);
    const [numerosAssentos, setNumerosAssentos] = useState([]);

    return(
        <BrowserRouter>
        <Topo/>
        <Routes>
        <Route path="/" element={<Filmes/>} />
        <Route path="/sessoes/:idFilme" element={<Sessao/>} />
        <Route path="/assentos/:idSessao" element={<Assentos 
        assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados}
        sessao={sessao} setSessao={setSessao} setNumerosAssentos={setNumerosAssentos} 
        numerosAssentos={numerosAssentos}/>}/>
        <Route path="/sucesso" element={<Sucesso
        assentosSelecionados={assentosSelecionados} sessao={sessao} numerosAssentos={numerosAssentos}/>} />
        </Routes>
        </BrowserRouter>
    )
}