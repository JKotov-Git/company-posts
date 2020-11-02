import React from "react";
import App from "../App";
import Header from "../components/header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Navbar from "../components/navbar/Navbar";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { initialState, reducer } from "../context/appStateReduccer";
import { StateProvider } from "../context/StateProvider";

import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe("render react component ", () => {
  it("render header", () => {
    act(() => {
      const wrapper = mount(
        <StateProvider initialState={initialState} reducer={reducer}>
          <App>
            <Header />
          </App>
        </StateProvider>
      );
      expect(wrapper.find('[data-testid="headerTitle"]').text()).toEqual(
        "Company Posts"
      );
    });
  });

  it("render navbar", () => {
    act(() => {
      const wrapper = mount(
        <StateProvider initialState={initialState} reducer={reducer}>
          <App>
            <Header />
            <HomePage>
              <Navbar />
            </HomePage>
          </App>
        </StateProvider>
      );
      expect(wrapper.find('[data-testid="navbarPosts"]').text()).toEqual(
        "Posts"
      );
      expect(wrapper.find('[data-testid="navbaNewPost"]').text()).toEqual(
        "Add new post"
      );

      expect(wrapper.find('[data-testid="searchInputField"]').text()).toEqual(
        ""
      );
    });
  });
});
