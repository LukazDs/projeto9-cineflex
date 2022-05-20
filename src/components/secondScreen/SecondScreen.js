import "./style.css";
import TopApp from "../topApp/TopApp";
import WeekDay from "../weekday/WeekDay";
import Footer from "../footer/Footer";

export default function SecondScreen() {
    return (
        <div className="second-screen">
            <TopApp selectName={"horário"} />
            <div className="conteiner-times">
                <WeekDay />
            </div>
            <Footer />

        </div>

    )
}


