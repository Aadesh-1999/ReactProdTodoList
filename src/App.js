import './App.css';
//import netflix from './netflix_logo.jpg';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { Contacts } from './MyComponents/Contacts';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const onDelete = (todo) => {
    console.log("I am ondelete of todo ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("Adding this todo : Title & desc: ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([]);
  return (
    <div className="App" >
      <Router>
      <Header name="TODO LIST" searchBar={false} />

      <Switch>
        <Route exact path="/" render={()=>{
          return (<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>)
        }}>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>


      <Footer name="Aaditi" imageSrc="./logo.svg" />
      </Router>
    </div>
  );
}

export default App;