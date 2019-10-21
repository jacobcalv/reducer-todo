import React, {useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducers'
import Todo from './Components/Todo'
import Add from './Components/Add'
import styled from 'styled-components'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Styling
  const Container = styled.div`
    border:  3px solid black;
    width: 70%;
    margin-left: 14%;
    margin-top: 5%;
    background-color: white;
  `
  const Heading = styled.h1`
    background-color: black;
    margin-top: 0px;
    color: white;
    font-size: 3rem;
    text-align: center;
    font-family: 'Permanent Marker', cursive;

  `
  const TodosContainer = styled.div`
    text-align: center;
    margin: 0px;
    padding: 0px;
  `
  return (
    <Container>
    <Heading>Your Todo List</Heading>
    <TodosContainer>
      <Add
        add={item => dispatch({type: 'add', item: item})}
      />
      {state.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          remove={()=> dispatch({type: "remove", id: todo.id})}
        />
      ))}
    </TodosContainer>

  </Container>
  );
}

export default App;
