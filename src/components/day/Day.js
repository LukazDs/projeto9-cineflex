import { Link } from "react-router-dom"

export default function Day({ weekday, hourlist }) {

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
                {hourlist.map((value) =>
                    <Link to={`/sessao/${value.id}`}>
                        <ButtonHour name={value.name} key={value.id} />
                    </Link>)}
            </div>

        )

    }

    return (
        <div className="day">
            <h2>{weekday}</h2>
            <TimeList hourlist={hourlist} />

        </div>

    )
}