var initialState = false;

var myReducer = (state = initialState, action) => {
  // mục đích của Reducer là trả về state mới, sau đó Store sẽ cấp state cho các component
  if (action.type === "TOOGLE_STATUS") {
    state = !state;
  }

  return state;
};

export default myReducer;
