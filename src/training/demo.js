import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer from "./reducers/index";

const store = createStore(myReducer); //khởi tạo store chứa các reducer
console.log("DEFAULT:", store.getState());
//thực hiện công việc thay đổi status
// const action = { type: "TOOGLE_STATUS" }; //action

store.dispatch(status()); //gửi action lên cho reducer phân tích
console.log(`TOOGLE_STATUS: `, store.getState());

store.dispatch(
  sort({
    by: "name",
    value: -1
  })
); //gửi action lên cho reducer phân tích
console.log(`SORT: `, store.getState());
