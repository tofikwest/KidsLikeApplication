import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./auth/authReducer";
import giftsReducer from "./gifts/giftsReducer";
import tasksReducer from "./tasks/tasksReducer";
import additionalInfoReducer from "./additionalInfo/additionalInfoReducer";
import storage from "redux-persist/lib/storage";
import { selectPlanningDateReducer } from "./planningTasks/planningTasksReducer";
import locationReducer from "./location/locationReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "token", "isLoading", "error"],
};
const locationPersistConfig = {
  key: "location",
  storage,
  whitelist: ["location"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReducer,
  gifts: giftsReducer,
  additionalInfo: additionalInfoReducer,
  user: "",
  planningSelectedDateId: selectPlanningDateReducer,
  lastLocation: persistReducer(locationPersistConfig, locationReducer),
});

export default rootReducer;
