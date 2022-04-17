import Todocard from "./Todocard";
import Header from "./Header";
import todos from "../dbButCap/todos";
import { useState } from "react";
import {Form, Button} from "semantic-ui-react";
import Footer from "./Footer";


function App() {
  var [todosState,setTodos] = useState(todos)

  function addTodo(){
    var newTodo = {
      id: todosState.length,
      topic: document.getElementById("topic").value,
      todo: document.getElementById("todo").value
    };
    setTodos([...todosState, newTodo])

    document.getElementById("topic").value = ""//textboxlari bosaltma.
    document.getElementById("todo").value = ""//
  }

  function remove(id){
    console.log(id +" silindi");
    setTodos(prevItems => {
      return prevItems.filter(
        (item)=>{
          return item.id !== id;
        }
      )
    })
  }

  return (
    <div>
      <Header />
      <div className="todosdiv">
        {todosState.map((card) => { return <Todocard key={card.id} id={card.id} topic={card.topic} todo={card.todo} todosState={todosState} removeCard={remove}/>})}
        <div className="tododiv" id="tododiv">
          <Form className="inputForm" onSubmit={addTodo}>
            <Form.Field>
              <label>Topic: </label>
              <input placeholder='Topic' id="topic" />
            </Form.Field>
            <Form.Field>
              <label>Todo:  </label>
              <input placeholder='Todo' id="todo"/>
            </Form.Field>
            <Button type="submit" className="submitbutton">Add</Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default App