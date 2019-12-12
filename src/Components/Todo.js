import React, {useState} from 'react'
import styled from 'styled-components'

 const Todo = ({todo, remove}) => {
    const [item, setItem] = useState(todo.item)
    const Item = styled.li`
    font-family: 'Alfa Slab One', cursive;
    font-size: 2rem;
    `
    const TodoContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `
    const Button = styled.button`
        height: 2rem;
        align-content: center;
        margin-top: 1.4rem;
        margin-left: .5rem;
        background-color: red;
    `
    return (
        <TodoContainer>
            <ul><Item>{todo.item}</Item><span></span></ul>
            <Button onClick={remove}>Delete</Button>
        </TodoContainer>
    )
}

export default Todo