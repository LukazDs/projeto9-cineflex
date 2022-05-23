import TopApp from "../topApp/TopApp";
import Footer from "../footer/Footer";
import "./style.css"
import Places from "../places/Places";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ThirdScreen() {

    const { ID_DA_SESSAO } = useParams()
    const navigate = useNavigate()
    const [places, setPlaces] = useState([])
    const [imgFooter, setImgFooter] = useState("")
    const [titleFooter, setTitleFooter] = useState("")
    const [dateDay, setDateDay] = useState("")
    const [hourName, setHourName] = useState("")
    const [listPlaces, setListPlaces] = useState([])
    const [listSelect, setListSelect] = useState([])
    const [changeScene, setChangeScene] = useState(false)

    function makePost(event) {
        event.preventDefault()

        if (CheckDate()) {
            axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", { name: userName, cpf: userCPF, ids: listPlaces })
            setChangeScene(true)
            navigate("/sucesso", {replace: true, state: {list: listSelect, cpf: userCPF, name: userName, title: titleFooter, hour: hourName, day: dateDay}})
        }

    }

    function CheckDate() {
        return (
            userName).length !== 0 &&
            (Number(userCPF) && (userCPF).length !== 0) &&
            (listPlaces).length !== 0
    }

    const [userName, setUserName] = useState("")
    const [userCPF, setUserCPF] = useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ID_DA_SESSAO}/seats`)
        promise.then(response => {
            setPlaces(response.data.seats);
            setImgFooter(response.data.movie.posterURL);
            setTitleFooter(response.data.movie.title);
            setDateDay(response.data.day.weekday);
            setHourName(response.data.name)
        })
    }, [])


    return (
        <>
            <div className={!changeScene ? "third-screen" : "group-blocked"}>
                <TopApp selectName={"Selecione o(s) assento(s)"} />
                <div className="conteiner-inf">
                    <Places places={places}
                        listPlaces={listPlaces}
                        setListPlaces={setListPlaces}
                        listSelect={listSelect}
                        setListSelect={setListSelect}
                    />

                    <div className="legends">
                        <div className="legend">
                            <div className="button-legend"></div>
                            <span className="text-legend">Selecionado</span>
                        </div>
                        <div className="legend">
                            <div className="button-legend avaliable"></div>
                            <span className="text-legend">Disponível</span>
                        </div>
                        <div className="legend">
                            <div className="button-legend desavaliable"></div>
                            <span className="text-legend">Indisponível</span>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <form onSubmit={makePost}>
                        <label>Nome do comprador:</label>
                        <input type="text" value={userName} placeholder="Digite seu nome: " onChange={e => setUserName(e.target.value)} required></input>
                        <label>CPF do comprador:</label>
                        <input type="text" value={userCPF} placeholder="Digite seu CPF: " onChange={e => setUserCPF(e.target.value)} required></input>
                        <button type="submit"><span>Reservar assento(s)</span></button>
                    </form>

                </div>
                <Footer posterUrl={imgFooter} title={titleFooter} hour={hourName} day={dateDay} />
            </div>
        </>

    )
}
