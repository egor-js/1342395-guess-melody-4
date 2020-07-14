import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  errorsCount: 4,
  onWelcomeButtonClick() {},
};

ReactDOM.render(
    <App
      errors = {settings.errorsCount}
      onWelcomeButtonClick = {settings.onWelcomeButtonClick}
    />,
    document.querySelector(`#root`)
);
