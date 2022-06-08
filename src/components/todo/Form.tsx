import React, { useRef, useState } from 'react';
import styled from "styled-components";

const TodoForm = styled.form`
width: 100%;
display: flex;
justify-content: center;
margin: 4rem 0;
`;
const TodoBtn = styled.button`
border: 0.8rem solid #282c34;
border-left: none;
width: 9rem;
`;
const TodoInput = styled.input`
width: 100%;
height: 5rem;
border: 0.8rem solid #282c34;
padding-left: 1rem;
`;

export default function Form({ pushTodo }:{pushTodo:(T:string) => void}) {
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        pushTodo(input);
        setInput("");
    }

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }

  return (
    <TodoForm onSubmit={handleSubmit}>
        <TodoInput title='text' placeholder='할 일을 입력하세요' value={input} onChange={handleInput}></TodoInput>
        <TodoBtn>추가</TodoBtn>
    </TodoForm>
  )
}
