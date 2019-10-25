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
        case "remove":
            {
                const idx = state.todos.findIndex(t => t.id === action.id);
                const todos = Object.assign([], state.todos);
                todos.splice(idx, 1);
                return {
                todos: todos,
                };
            }
        default: 
            return state
    }
}

