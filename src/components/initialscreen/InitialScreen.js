import "./style.css"
import TopApp from "../topApp/TopApp"
import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function Film({ posterURL, id}) {

    return (
        <Link to={`/film/${id}`}>
            <div className="film">
                <img src={posterURL} />
            </div>
        </Link>
    )
}

export default function InitialScreen() {

    function Films() {
        const [items, setItems] = React.useState([])

        React.useEffect(() => {
            const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            promise.then((response) => { setItems(response.data) })
        }, [])

       

        return (
            items.map((item) => 
                <Film
                    key={item.id}
                    posterURL={item.posterURL}
                    id={item.id}

                />)
                )
    }

    return (
        <div className="initial-screen">
            <TopApp selectName={"filme"} />
            <div className="container-films">
                <Films />
            </div>
        </div>
    )
}
