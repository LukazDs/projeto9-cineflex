import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "../initialscreen/InitialScreen";
import "./style.css";
export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<InitialScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}