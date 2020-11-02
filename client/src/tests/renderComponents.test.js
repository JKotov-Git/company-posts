import React from "react";
import App from "../App";
// components
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

// pages
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { initialState, reducer } from "../context/appStateReduccer";
import { StateProvider } from "../context/StateProvider";

import { cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });
afterEach(cleanup);

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

  it("navbar checkbox search by post name have to be checked", () => {
    const wrapper = mount(<Navbar />);

    wrapper.setProps({ checkedIndicIsSearchByPos: true });
    let checkbox = wrapper.find("[data-testid]=searchByPostTitleCheckbox");
    expect(checkbox.props.checked).toEqual(true);
  });

  it("render login page", () => {
    const wrapper = mount(
      <StateProvider initialState={initialState} reducer={reducer}>
        <App>
          <LoginPage />
        </App>
      </StateProvider>
    );

    const loginForm = <div className="login"></div>;

    expect(wrapper.contains(loginForm)).toEqual(true);
  });
});
