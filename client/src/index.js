import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import store from "../src/Redux/store"
// footer

import App from "./App"
ReactDOM.render(
    <>  
    <Provider store={store}>  
       <App />
    </Provider>
    </>, document.getElementById("root")
)