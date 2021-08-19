import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./auth/authReducer";
import giftsReducer from "./gifts/giftsReducer";
import tasksReducer from "./tasks/tasksReducer";
import additionalInfoReducer from "./additionalInfo/additionalInfoReducer";

import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "token", "loading", "error"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReducer,
  gifts: giftsReducer,
  additionalInfo: additionalInfoReducer,
  user: "",
});

export default rootReducer;
