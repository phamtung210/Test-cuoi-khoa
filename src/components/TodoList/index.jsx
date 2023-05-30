import React, { useState, useEffect } from 'react';
import ShowItem from './ShowItem';
import './style.css';


const TodoList = (props) => {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState([]);


    const showTodoList = () => {
        const arr = [];
        for (let i = 0; i < todoList.length; i++) {
            arr.push(todoList[i]);
        }
        return arr;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const todoTitle = {
            todoName: e.target['todoTitle'].value,
            status: false,
        };
        todoList.push(todoTitle);
        setTodoList([...todoList]);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const deleteAll = (e) => {
        setTodoList([]);
    };
    const markAsCompleted = () => {
        setTodoList(todoList.map((item) => ({ ...item, status: true })))
    };


    const handleDelete = (index) => {
        setTodoList(showTodoList().filter((item, pos) => index !== pos))
    }

    const handleChangeStatus = (pos) => {
        console.log(pos)
        setTodoList(showTodoList().map((item, index) => (pos === index ? { ...item, status: !item.status } : item)))
    }



    return (
        <div className="todoList">
            <div>
                <h1>To do Application</h1>
            </div>
            <div className="container-fluid" container="">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add details" name="todoTitle" value={title} onChange={handleChangeTitle} />
                    <button className="addToDo">Add Todo</button>
                </form>
            </div>

            <br />
            <div className="">
                <button className="deleteAll" onClick={deleteAll}> Delete All </button>

                <button className="markAsCompleted" onClick={markAsCompleted}> Mark As Completed</button>
            </div>
            <br />

            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showTodoList().map((item, index) => {
                            return <ShowItem key={index} todoName={item.todoName} status={item.status} handleDelete={() => handleDelete(index)} handleChangeStatus={() => handleChangeStatus(index)}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default TodoList;

