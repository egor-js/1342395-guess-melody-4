import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  errorsCount: 5,
};

ReactDOM.render(
    <App
      errorsCount = {settings.errorsCount}
    />,
    document.querySelector(`#root`)
);
