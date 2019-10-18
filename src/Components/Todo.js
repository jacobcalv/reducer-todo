import React, {useState} from 'react'

 const Todo = ({todo}) => {
    const [item, setItem] = useState(todo.text)
    return (
        <div>
            <h1>{todo.item}</h1>
        </div>
    )
}

export default Todo