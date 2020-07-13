import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const settings = {
  errors: 5,
};

describe(`app`, () => {
  it(`app test`, () => {
    const tree = renderer
      .create(
          <App
            errors = {settings.errors}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
