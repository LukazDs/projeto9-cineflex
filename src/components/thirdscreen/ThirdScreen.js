import TopApp from "../topApp/TopApp";
import Footer from "../footer/Footer";
import "./style.css"
import Places from "../places/Places";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ThirdScreen() {

    const { ID_DA_SESSAO } = useParams()
    const [places, setPlaces] = useState([])
    const [imgFooter, setImgFooter] = useState("")
    const [titleFooter, setTitleFooter] = useState("")
    const [dateDay, setDateDay] = useState("")
    const [hourName, setHourName] = useState("")

    

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

    console.log(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ID_DA_SESSAO}/seats`)


    return (
        <div className="third-screen">
            <TopApp selectName={"assento"} />
            <div className="conteiner-inf">
                <Places places={places}/>
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
                <form>
                    <label>Nome do comprador:</label>
                    <input placeholder="Digite seu nome: "></input>
                    <label>CPF do comprador:</label>
                    <input placeholder="Digite seu CPF:"></input>
                    <button>testando</button>
                </form>


            </div>
            <Footer posterUrl={imgFooter} title={titleFooter} hour={hourName} day={dateDay}/>
        </div>
    )
}
