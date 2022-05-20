import getSessions from "../../data/sessions"
import { Link } from "react-router-dom"
import TimeList from "../timelist/TimeList"

export default function WeekDay() {
    const listDay = getSessions().days
    return (
        <div className="weekday">
            {listDay.map((value) =>
            <TimeList
                weekday={value.weekday}
                hourlist={value.showtimes} />)}
        </div>

    )
}