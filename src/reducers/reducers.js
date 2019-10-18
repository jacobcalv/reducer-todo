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
        default: 
            return state
    }
}

