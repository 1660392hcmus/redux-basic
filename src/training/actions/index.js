import * as type from "../constants/ActionTypes";

export const status = () => {
  return {
    type: type.TOOGLE_STATUS
  };
};

export const sort = sort => {
  //truyen co tham so la sort
  return {
    type: type.SORT,
    sort // sort: sort vì có cùng tên
  };
};
