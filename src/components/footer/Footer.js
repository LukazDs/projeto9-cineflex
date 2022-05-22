import "./style.css"

export default function Footer({ posterUrl, title, day, hour }) {
    return (
        <div className="footer">
            <img src={posterUrl} />
            <div className="text-inf">
                <span>{title}</span>
                <span>{day} {hour}</span>
            </div>
        </div>
    )
}