import Topo from "./Topo"
import Filmes from "./Filmes"
import Sessao from "./Sessão"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App(){
    return(
        <BrowserRouter>
        <Topo/>
        <Routes>
        <Route path="/" element={<Filmes/>} />
        <Route path="/sessoes/:idFilme" element={<Sessao/>} />
        <Route path="/assentos/:idSessao" element={<Assentos/>} />
        <Route path="/sucesso" element={<Sucesso/>} />
        </Routes>
        </BrowserRouter>
    )
}