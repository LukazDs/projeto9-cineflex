import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "../initialscreen/InitialScreen";
import SecondScreen from "../secondScreen/SecondScreen";
import ThirdScreen from "../thirdscreen/ThirdScreen";
import FourthScreen from "../fourthscreen/FourthScreen";
import "./style.css";

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<InitialScreen />}></Route>
                    <Route path={"/sessao"} element={<SecondScreen />}></Route>
                    <Route path={"/place"} element={<ThirdScreen />}></Route>
                    <Route path={"/confirm"} element={<FourthScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}