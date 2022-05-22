import { useState } from "react"

export default function Places({ places }) {
    const seats = places
  

    function PlaceAvailable({ name }) {
        const [click, setClick] = useState(false)
        return (
            <div onClick={() => setClick(true)} className={`button-place avaliable ${click ? "clicked" : ""}`}>{name}</div>
        )
    }
    
    return (

        <div className="places">
            {seats.map(value =>
                (value.isAvailable) ? <PlaceAvailable name={value.name}/> :
                    <div className="button-place desavaliable">{value.name}</div>
            )}
        </div>
    )
}