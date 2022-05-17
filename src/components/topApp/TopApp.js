import "./style.css"
export default function TopApp({ selectName }) {
    return (
        <>
            <div className="top-app">
                <h1>CINEFLEX</h1>
            </div>
            <div className="text-header">
                <h2>Selecione o {selectName}</h2>
            </div>
        </>
    )
}