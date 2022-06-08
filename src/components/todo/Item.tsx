import React, { useRef } from 'react';
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { ITodo } from './ITodo';

const TodoLists = styled.div`
margin-left: 0.5rem;
`;

const TodoList = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`;

const Checkbox = styled.input`
transform: scale(1.5);
margin: 0 1rem;
`;

const StyledLabel = styled.label`
margin-right: 0.5rem;
font-size: 2rem;
`;

export default function Item({ todoList, delTodo }:{todoList: ITodo[];delTodo:(T:number) => void}) {

    const handleDelClick = (id:number) => {
        delTodo(id);
    }

    return (
        <TodoLists>
            {todoList.map((todo:ITodo, index:number) => (
                <TodoList key={todo.id}>
                    <Checkbox type="checkbox" />
                    <StyledLabel>
                        {todo.value}
                    </StyledLabel>
                    <IoCloseOutline size="2rem" onClick={() => handleDelClick(todo.id)} />
                </TodoList>
            ))}
        </TodoLists>
    );
}
