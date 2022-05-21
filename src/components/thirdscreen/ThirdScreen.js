import TopApp from "../topApp/TopApp";
import Footer from "../footer/Footer";
import "./style.css"
import Places from "../places/Places";

export default function ThirdScreen() {
    return (
        <div className="third-screen">
            <TopApp selectName={"assento"} />
            <div className="conteiner-inf">
                <Places />
                <div className="legends">
                    <div className="legend">
                        <div className="button-legend"></div>
                        <span className="text-legend">Selecionado</span>
                    </div>
                    <div className="legend">
                        <div className="button-legend" Style={"background: #C3CFD9; border-color: #7B8B99;"}></div>
                        <span className="text-legend">Disponível</span>
                    </div>
                    <div className="legend">
                        <div className="button-legend" Style={"background: #FBE192; border-color: #F7C52B;"}></div>
                        <span className="text-legend">Indisponível</span>
                    </div>
                </div>
            </div>
            <div className="forms">
                <form>
                    <label>Nome do comprador:</label>
                    <input placeholder="Digite seu nome: "></input>
                    <label>CPF do comprador:</label>
                    <input placeholder="Digite seu CPF:"></input>
                    <button>testando</button>
                </form>
               
             
            </div>
            <Footer />
        </div>
    )
}