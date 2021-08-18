import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import tasksReducer from "./tasks/tasksReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  gift: "",
  user: "",
});

export default rootReducer;
