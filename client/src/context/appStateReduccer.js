export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return { ...state, user: action.userObject };

    default:
      return { ...state };
  }
};
