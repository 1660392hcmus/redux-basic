import { createStore } from "redux";

var initialState = {
  //khởi tạo State
  status: true,
  sort: {
    by: "name",
    value: 1 //1 tăng, -1 giảm
  }
};

var myReducer = (state = initialState, action) => {
  // mục đích của Reducer là trả về state mới, sau đó Store sẽ cấp state cho các component
  if (action.type === "TOOGLE_STATUS") {
    state.status = !state.status;
  }
  if (action.type === "SORT") {
    // state.sort.value = -1;
    var { by, value } = action.sort; // by = action.by
    var { status } = state;
    return {
      status: status,
      sort: {
        by: by,
        value: value
      }
    };
  }
  return state;
};

const store = createStore(myReducer); //khởi tạo store chứa các reducer

//thực hiện công việc thay đổi status
const action = { type: "TOOGLE_STATUS" }; //action

store.dispatch(action); //gửi action lên cho reducer phân tích
console.log(`TOOGLE_STATUS: `, store.getState());

//thực hiện công việc sắp xếp tên từ Z-A
const sortAction = {
  type: "SORT",
  sort: {
    by: "name",
    value: -1
  }
};
store.dispatch(sortAction); //gửi action lên cho reducer phân tích

console.log(`SORT: `, store.getState());
