import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const errorsCount = 4;
const onWelcomeButtonClick = function () {};

describe(`Component welcome-screen`, () => {
  it(`snapshot test welcome screen`, () => {
    const tree = renderer
      .create(
          <WelcomeScreen
            errors = {errorsCount}
            onWelcomeButtonClick = {onWelcomeButtonClick}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
