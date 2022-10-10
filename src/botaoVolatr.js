import setaVoltar from "./img/botao-voltar.png";
import { useNavigate} from 'react-router';

export default function BotaoVoltar(){
    let navigate = useNavigate();

    function voltar(){
        navigate(-1);
    }

    return(
            <img onClick={voltar} src={setaVoltar} alt="setaVoltar" />
    )
}