import "./style.css"
export default function TopApp({ selectName, color }) {
    return (
        <>
            <div className="top-app">
                <h1>CINEFLEX</h1>
            </div>
            <div className="text-header">
                <h2>{selectName}</h2>
            </div>
        </>
    )
}