import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, reducer} from './reducers/reducers'
import Todo from './Components/Todo'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    {state.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
      />
    ))}
  </>
  );
}

export default App;
