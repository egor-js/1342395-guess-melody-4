import React from "react";
import renderer from "react-test-renderer";
import App from "./components/app/app.jsx";

const settings = {
  errorsCount: 5,
};

describe(`app`, () => {
  it(`app test`, () => {
    const tree = renderer
      .create(
          <App
            errors = {settings.errorsCount}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
