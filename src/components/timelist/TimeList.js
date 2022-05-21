import { Link } from "react-router-dom"

export default function TimeList({ weekday, hourlist }) {
    return (
        <div className="day">
            <h2>{weekday}</h2>
            <div className="time-list">
                {hourlist.map(value =>
                    <Link to="/place">
                        <div className="button-hour">
                            <span>{value.name}</span>
                        </div>
                    </Link>)}
            </div>
        </div>

    )
}