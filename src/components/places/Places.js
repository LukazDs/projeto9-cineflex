import getPlaces from "../../data/places";

export default function Places() {
    const seats = getPlaces().seats
    return (
        
        <div className="places">
            {seats.map(value => 
                <div className="button-place">{value.name}</div>
            )}
        </div>
    )
}