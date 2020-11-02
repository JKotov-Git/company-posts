import React from "react";
import App from "../App";
import ReactDOM from "react-dom";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { initialState, reducer } from "../context/appStateReduccer";
import StateProvider from "../context/StateProvider";

import { cleanup } from "@testing-library/react";
describe("render react component ", () => {
  //
});

afterEach(cleanup);
