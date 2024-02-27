import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoList, HandleChange } from '../action/todo';
import ImportedURL from '../common/api';
import axios from 'axios';

function Addtodo() {

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            axios.get(ImportedURL.API.listTodo)
                .then((res: any) => {
                    dispatch(AddTodoList(res.data));
                }).catch((res: any) => {
                    console.log(res);
                });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [titleError, setTitleError] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.todolist);
    const todoList = data.todoList ? data.todoList : [];
    const dataTodo = data.todo ? data.todo : {};

    const onChange = (e: any) => {
        const { name, value } = e.target;
        if (name == "title") {
            dispatch(HandleChange(name, value));
            setTitleError(false)
        }
    }

    const Submit = () => {
        let valid = 1
        if (!dataTodo.title) {
            valid = 0
            setTitleError(true)
        }
        if (valid) {
            let obj = {
                title: dataTodo.title,
                status: false,
            }
            axios.post(ImportedURL.API.addTodo, obj)
                .then((res: any) => {
                    fetchData();
                    dispatch(HandleChange("title", ''));
                }).catch((res: any) => {
                    console.log(res);
                });
        }
    }

    const deleteItem = (index: any) => {
        axios.get(ImportedURL.API.deleteTodo + "/" + index)
            .then((res: any) => {
                fetchData();
            }).catch((res: any) => {
                console.log(res);
            });
    }


    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            Submit();
        }
    }

    return (
        <>
            <div>
                <h2>Todo List</h2>
                <form >
                    <div>
                        <input type="text" className="todo_text" onChange={onChange} onKeyPress={handleKeyPress} name="title" value={dataTodo.title ? dataTodo.title : ''} placeholder="Enter Title..." />
                        {titleError ? <label style={{ color: 'red' }}>Title is required</label> : ''}
                    </div>
                    <div>
                        <input type="button" value="Submit" onClick={Submit} className="btn-Add" />
                    </div>
                </form>
                <hr />
                {
                    (todoList && todoList.length > 0)
                        ?
                        <>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todoList.map((item: any, i: any) => {
                                            return (
                                                <>
                                                    <tr key={i}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>{item['title']}</td>
                                                        <td><MdDelete color='red' onClick={() => deleteItem(item._id)} /></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                        : ''
                }

            </div >
        </>
    )
}

export default Addtodo;
