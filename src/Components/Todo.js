import React, {useState} from 'react'

 const Todo = ({todo}) => {
    const [item, setItem] = useState(todo.item)
    return (
        <div>
            <h1>{todo.item}</h1>
            <button>Remove</button>
            <button>Edit</button>
        </div>
    )
}

export default Todo