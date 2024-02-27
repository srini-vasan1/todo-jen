export const AddTodoList = (data: any) => {
    return {
        payload: data, type: 'ADDTODOLIST'
    }
}

export const HandleChange = (name: any, value: any) => {
    return {
        name: name, value: value, type: 'HANDLECHANGE'
    }
}