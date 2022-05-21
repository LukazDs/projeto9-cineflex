import TopApp from "../topApp/TopApp"
import "./style.css"

export default function FourthScreen () {
    return (
        <div className="fourth-screen">
            <TopApp selectName={""}/>
            <div className="conteiner-end-inf">
                <div className="packet-inf">
                    <h2>Filme e sessão</h2>
                    <span>Enola Homes</span>
                </div>
                <div className="packet-inf">
                    <h2>Ingressos</h2>
                    <span>Enola Homes</span>
                </div>
                <div className="packet-inf">
                    <h2>Comprador</h2>
                    <span>Enola Homes</span>
                </div>
                <button className="return"><span>Voltar pra Home</span></button>
            </div>
        </div>
    )
}
