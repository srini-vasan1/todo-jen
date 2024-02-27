const initialState = {
    todo: {},
    todoList: [],
}

const TodoListReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case "ADDTODOLIST":
            return Object.assign({}, state, {
                todoList: action.payload
            });
        case "HANDLECHANGE":
            return Object.assign({}, state, {
                todo: {
                    ...state.todo,
                    [action.name]: action.value
                }
            });

        default:
            return state;
    }
}
export default TodoListReducer;