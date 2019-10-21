export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'add' :
            return {todos: [...state.todos, 
                {
                    item: action.item,
                    completed: false,
                    id: Date.now()
                }]}
        case "completed":
            {
                const id = state.todos.findIndex(todo => todo.id === action.payload.id)
                const todo = {...state.todos[id]}
                todo.complete = !action.payload.completed
                const todos = [...state.todos]
                todos.splice(id,1,todo)
                return {
                    todos: todos
                }
            }
        case "delete":
            {
                const filterTodos = state.todos.filter(todo => todo.completed !== true)
                return {
                    todos: filterTodos
                }
            }
        default: 
            return state
    }
}

