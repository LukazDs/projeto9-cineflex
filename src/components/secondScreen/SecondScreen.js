import "./style.css";
import TopApp from "../topApp/TopApp";
import Day from "../day/Day";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Footer from "../footer/Footer";

export default function SecondScreen() {

    const { ID_DO_FILME } = useParams()

    const [objectDay, setObjectDay] = useState([])
    const [imgFooter, setImgFooter] = useState("")
    const [titleFooter, setTitleFooter] = useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${ID_DO_FILME}/showtimes`)
        promise.then(response => {
            setObjectDay(response.data.days); 
            setImgFooter(response.data.posterURL);
            setTitleFooter(response.data.title);
            })
    }, [])

    function WeekDay() {
        return (
            objectDay.map((value, index) => <Day dateFilm={value.date} weekday={value.weekday} hourlist={value.showtimes} key={index}/>)
        )
    }

    return (

        <div className="second-screen">
            <TopApp selectName={"Selecione o horário"} />
            <div className="conteiner-times">
                <WeekDay />
            </div>
            <Footer posterUrl={imgFooter} title={titleFooter}/>

        </div>

    )
}


