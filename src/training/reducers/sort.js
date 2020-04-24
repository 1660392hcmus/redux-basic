var initialState = {
  by: "name",
  value: 1 //1 tăng, -1 giảm
};

var myReducer = (state = initialState, action) => {
  // mục đích của Reducer là trả về state mới, sau đó Store sẽ cấp state cho các component

  if (action.type === "SORT") {
    // state.sort.value = -1;
    var { by, value } = action.sort; // by = action.by
    var status = state;
    return {
      by: by,
      value: value
    };
  }
  return state;
};

export default myReducer;
