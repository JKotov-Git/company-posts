export const sortListBysPostName = (array) => {
  array.sort((a, b) => {
    let postA = a.posttitle;
    let postB = b.posttitle;
    if (postA < postB) {
      return -1;
    }
    if (postA > postB) {
      return 1;
    }
    return 0;
  });
  return array;
};
