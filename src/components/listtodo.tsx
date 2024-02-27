import React from 'react';
import { useSelector } from 'react-redux';

function Listtodo() {

    const data = useSelector((state: any) => state.todolist);
    const todolist = data.todoList ? data.todoList : [];

    return (
        <>
            <div className="container">
                {
                    (todolist && todolist.length > 0)
                        ?
                        <>
                            <div className="row">
                                {
                                    todolist.map((item: any, i: any) => {
                                        return (
                                            <>
                                                <div className={todolist.length === 1 ? 'col-12' : 'col-6'}>
                                                    <div className='bg-primary text-white text-center m-2'>
                                                        {item['title']}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                        :
                        <>
                            <div style={{ textAlign: 'center' }}>
                                <h2>No record</h2>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Listtodo