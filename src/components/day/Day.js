import { Link } from "react-router-dom"

export default function Day({ weekday, hourlist, dateFilm }) {

    function ButtonHour({ name }) {
        return (
            <div className="button-hour">
                <span>{name}</span>
            </div>
        )
    }

    function TimeList({ hourlist }) {

        return (
            <div className="time-list">
                {hourlist.map((value, index) =>
                    <Link key={index} to={`/sessao/${value.id}`}>
                        <ButtonHour name={value.name}/>
                    </Link>)}
            </div>

        )

    }

    return (
        <div className="day">
            <div className="day-inf">
                <h2>{weekday} - </h2>
                <span>{dateFilm}</span>
            </div>

            <TimeList hourlist={hourlist} />

        </div>

    )
}