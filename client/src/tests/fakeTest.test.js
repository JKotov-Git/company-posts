import React from "react";
import { cleanup } from "@testing-library/react";

function sum(a, b) {
  return a + b;
}

describe("Fake test ", () => {
  it("fake test function", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});

afterEach(cleanup);
