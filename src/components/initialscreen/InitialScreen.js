import React from "react"
import "./style.css"
import TopApp from "../topApp/TopApp"
import getFilms from "../../data/films"
import { Link } from "react-router-dom"

function Film({ posterURL }) {
    return (
        <Link to={"/sessao"}>
            <div className="film">
                <img src={posterURL} />
            </div>
        </Link>
    )
}

export default function InitialScreen() {
    return (
        <div className="initial-screen">
            <TopApp selectName={"filme"} />
            <div className="container-films">
                {getFilms().map((value, index) => <Film key={index} posterURL={value.posterURL} />)}
            </div>
        </div>
    )
}
