import { Link } from "react-router-dom"
import TopApp from "../topApp/TopApp"
import "./style.css"

export default function FourthScreen({ title, hour, day, listSelect, name, cpf }) {
    return (
        <div className="fourth-screen">
            <TopApp selectName={""} />
            <span>Pedido feito com sucesso!</span>
            <div className="conteiner-end-inf">
                <div className="packet-inf">
                    <h2>Filme e sessão</h2>
                    <span>{title}</span>
                    <div className="end-inf">
                        <span>{day}  </span>
                        <span>{hour}</span>
                    </div>

                </div>
                <div className="packet-inf">
                    <h2>Ingressos</h2>
                    {listSelect.map(value => <span>Assento {value}</span>)}
                </div>
                <div className="packet-inf">
                    <h2>Comprador</h2>
                    <span>Nome: {name}</span>
                    <span>CPF: {cpf}</span>
                </div>
                <Link to="/"><button className="return"><span>Voltar pra Home</span></button></Link>
            </div>
        </div>
    )
}
