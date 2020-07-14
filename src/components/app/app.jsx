import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errors, onWelcomeButtonClick} = props;
  return <WelcomeScreen
    errors = {errors}
    onWelcomeButtonClick = {onWelcomeButtonClick}
  />;
};

App.propTypes = {
  errors: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

export default App;
