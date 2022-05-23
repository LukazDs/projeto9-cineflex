import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import TopApp from "../topApp/TopApp"
import "./style.css"

export default function FourthScreen() {
    
    const location = useLocation()
    const state = location.state

    const [infoListPlaces, setInfoListPlaces] = useState(state.list)
    const [infoName, setInfoName] = useState(state.name)
    const [infoCpf, setInfoCpf] = useState("")
    const [infoTitle, setInfoTitle] = useState("")
    const [infoHour, setInfoHour] = useState("")
    const [infoDay, setInfoDay] = useState("")



    useEffect(() => {
        setInfoListPlaces(infoListPlaces)
        setInfoName(state.name);
        setInfoTitle(state.title);
        setInfoCpf(state.cpf);
        setInfoHour(state.hour);
        setInfoDay(state.day);

    }, [])
    
    return (
        <div className="fourth-screen">
            <TopApp selectName={""} />
            <span>Pedido feito com sucesso!</span>
            <div className="conteiner-end-inf">
                <div className="packet-inf">
                    <h2>Filme e sessão</h2>
                    <span>{infoTitle}</span>
                    <div className="end-inf">
                        <span>{infoDay}  </span>
                        <span>{infoHour}</span>
                    </div>

                </div>
                <div className="packet-inf">
                    <h2>Ingressos</h2>
                    {infoListPlaces.map((value, index) => <span key={index}>Assento {value}</span> )}
                </div>
                <div className="packet-inf">
                    <h2>Comprador</h2>
                    <span>Nome: {infoName}</span>
                    <span>CPF: {infoCpf}</span>
                </div>
                <Link to="/"><button className="return"><span>Voltar pra Home</span></button></Link>
            </div>
        </div>
    )
}
