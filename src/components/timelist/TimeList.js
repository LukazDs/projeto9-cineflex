export default function TimeList({weekday, hourlist}) {
    return (
        <div className="day">
                <h2>{weekday}</h2>
                <div className="time-list">
                    {hourlist.map(value => <div>{value.name}</div>)}
                </div>
            </div>

    )
}