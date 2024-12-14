import React from "react";
import ReactDOM from "react-dom/client";
import {HelloWorldApp} from "./HelloWorldApp.jsx";
import {FirstApp} from "./FirstApp.jsx";
import {CounterApp} from "./CounterApp.jsx";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<HelloWorldApp />*/}
        {/*<FirstApp title='Hola, Soy Antony' />*/}
        <CounterApp value={13}/>
    </React.StrictMode>
)