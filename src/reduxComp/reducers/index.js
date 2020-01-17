import { combineReducers } from "redux";
import {pageReducer} from "./page";
import { basketReducer } from "./basket";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    basket: basketReducer,
});
