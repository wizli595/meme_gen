const appReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCC":
      return {
        loading: false,
        meme: action.payload,
        err: "",
      };
    case "FETCH_FAILD":
      return {
        loading: false,
        meme: "",
        err: action.payload,
      };

    default:
      break;
  }
};
export default appReducer;
