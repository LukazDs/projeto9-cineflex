import { useState } from "react"

function PlaceAvailable({ name, id, setListPlaces, listPlaces, listSelect, setListSelect }) {

    const [click, setClick] = useState(false)

    return (
        <button disabled={click} onClick={() => { setClick(true); 
            setListPlaces([...listPlaces, id]);
            setListSelect([...listSelect, name])    
        }} className={`button-place avaliable ${click ? "clicked" : ""}`}>{name}</button>
    )
}

export default function Places({ places, setListPlaces, listPlaces, listSelect, setListSelect }) {

    const seats = places

    return (

        <div className="places">
            {seats.map(value =>
                (value.isAvailable) ? <PlaceAvailable listPlaces={listPlaces} listSelect={listSelect} setListSelect={setListSelect} setListPlaces={setListPlaces} id={value.id} name={value.name} /> :
                    <div onClick={() => alert("Esse assento não está disponível")} className="button-place desavaliable">{value.name}</div>
            )}
        </div>
    )
}