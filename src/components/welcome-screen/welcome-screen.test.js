import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const settings = {
  errorsCount: 5,
};

describe(`welcome-screen`, () => {
  it(`welcome screen test`, () => {
    const tree = renderer
      .create(
          <WelcomeScreen
            errors = {settings.errorsCount}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
