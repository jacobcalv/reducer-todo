import React, {useState} from 'react'
import styled from 'styled-components'

 const Todo = ({todo}) => {
    const [item, setItem] = useState(todo.item)
    const Item = styled.li`
    font-family: 'Alfa Slab One', cursive;
    font-size: 2rem;
    `
    return (
        <div>
            <ul><Item>{todo.item}</Item><span></span></ul>
        </div>
    )
}

export default Todo