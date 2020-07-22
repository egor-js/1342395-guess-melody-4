import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const errors = 4;
const onWelcomeButtonClick = function () {};

describe(`app`, () => {
  it(`app test`, () => {
    const tree = renderer
      .create(
          <App
            errors = {errors}
            onWelcomeButtonClick = {onWelcomeButtonClick}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
