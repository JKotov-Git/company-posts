import { cleanup } from "@testing-library/react";

import { sortListBysPostName } from "../utils/helper";

describe("sort function", () => {
  it("should sort list of posts", () => {});
  const arrayOfPosts = [
    { posttitle: "Car" },
    { posttitle: "Airplane" },
    { posttitle: "Motor" },
    { posttitle: "Bus" },
  ];
  const sortArray = sortListBysPostName(arrayOfPosts);

  const sortedArray = [
    { posttitle: "Airplane" },
    { posttitle: "Bus" },
    { posttitle: "Car" },
    { posttitle: "Motor" },
  ];

  expect(sortArray[0].posttitle).toEqual(sortedArray[0].posttitle);
  expect(sortArray[1].posttitle).toEqual(sortedArray[1].posttitle);
  expect(sortArray[2].posttitle).toEqual(sortedArray[2].posttitle);
  expect(sortArray[3].posttitle).toEqual(sortedArray[3].posttitle);
});

afterEach(cleanup);
