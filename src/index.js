import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

let headerElement = document.createElement('header');
headerElement.value = "hello from the Header!";

