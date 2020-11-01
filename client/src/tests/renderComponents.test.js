import React from "react";
import App from "../App";
import ReactDOM from "react-dom";

import { initialState, reducer } from "../context/appStateReduccer";
import StateProvider from "../context/StateProvider";

import { cleanup, render } from "@testing-library/react";
describe("render react component ", () => {
  it("render App component", () => {
    const renderApp = render(
      <StateProvider initialState={initialState} reducer={reducer} />
    );

    const div = document.createElement("div");
    ReactDOM.render(renderApp, div);
  });
});

afterEach(cleanup);
