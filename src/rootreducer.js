import { combineReducers } from "redux";
import TodoListReducer from "./reducer/todo";

const rootReducer = combineReducers({
    todolist: TodoListReducer,
});

export default rootReducer;