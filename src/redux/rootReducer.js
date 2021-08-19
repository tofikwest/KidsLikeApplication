import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import giftsReducer from "./gifts/giftsReducer";
import tasksReducer from "./tasks/tasksReducer";
import additionalInfoReducer from "./additionalInfo/additionalInfoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  gifts: giftsReducer,
  additionalInfo: additionalInfoReducer,
  user: "",
});

export default rootReducer;
