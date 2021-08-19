import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./auth/authReducer";
import tasksReducer from "./tasks/tasksReducer";
import storage from "redux-persist/lib/storage";
import { locationReducer } from "./location/locationReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReducer,
  gift: "",
  user: "",
  lastLocation: locationReducer,
});

export default rootReducer;
