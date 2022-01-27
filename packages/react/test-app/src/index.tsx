import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import RuxInputTest from "./pages/RuxInputTest";
import FormTest from "./pages/FromTest";

ReactDOM.render(
  <React.StrictMode>
    <FormTest />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
