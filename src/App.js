import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {initialState, reducer} from './reducers/reducers'
import Todo from './Components/Todo'
import Add from './Components/Add'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <Add
      add={item => dispatch({type: 'add', item: item})}
    />
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
