import ReactDom from "react-dom";
import "../src/assets/styles/style.css"
import "../src/assets/styles/reset.css"
import App from "./components/app/App";

ReactDom.render(<App/>, document.querySelector(".root"))
