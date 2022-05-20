import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "../initialscreen/InitialScreen";
import SecondScreen from "../secondScreen/SecondScreen";
import "./style.css";
export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<InitialScreen />}></Route>
                    <Route path={"/sessao"} element={<SecondScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}