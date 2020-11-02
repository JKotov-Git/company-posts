import React from "react";

import { create, act } from "react-test-renderer";
import App from "../App";
// components
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

// pages
import HomePage from "../pages/HomePage/HomePage";

import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { initialState, reducer } from "../context/appStateReduccer";
import { StateProvider } from "../context/StateProvider";

import { cleanup } from "@testing-library/react";

configure({ adapter: new Adapter() });
afterEach(cleanup);

let root;
act(() => {
  root = create(
    <StateProvider initialState={initialState} reducer={reducer}>
      <App>
        <Header />
      </App>
    </StateProvider>
  );
});

expect(root.toJSON()).toMatchSnapshot();

describe("render react component ", () => {
  it("render header title", () => {
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

  it("render navbar elements", () => {
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

  it("render navbar sort button", () => {
    const wrapper = shallow(<Navbar sortByPostTitle={() => {}} />);

    expect(wrapper.find('[data-testid="btnSortByTitle"]').text()).toEqual(
      "Sort By post"
    );
  });

  it("click sort by post button", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Navbar sortByPostTitle={mockCallBack} />);

    wrapper.find('[data-testid="btnSortByTitle"]').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
