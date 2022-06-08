import React, { useState } from 'react';
import styled from "styled-components";
import Form from './Form';
import Item from './Item';
import { ITodo } from './ITodo';

const Main = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
`;
const TodoTitle = styled.h2`
margin: 0;
margin-bottom: 4rem;
margin-left: 0.5rem;
font-size: 2rem;
`;

export default function Todo() {
    const [todoList, setTodoList] = useState<Array<ITodo>>([]);
    const [id, setId] = useState<number>(0);

    const pushTodo = (value:string):void => {
        if(!value) return;
        const todos = todoList;
        const todo = { id, value };
        setId(id + 1);
        todos.push(todo);
        setTodoList(todos);
    }

    const delTodo = (id:number) => {
        const todos = todoList.filter(todo => todo.id !== id);
        setTodoList(todos);
    }

    return (
        <Main>
            <Form pushTodo={pushTodo} />
            <TodoTitle>할 일 목록 ✍</TodoTitle>
            <Item todoList={todoList} delTodo={delTodo} />
        </Main>
    )
}