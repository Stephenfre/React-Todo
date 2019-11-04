import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./styles.css";
import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const data = [
  {
    task: "Clean Room",
    id: "1",
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with state
  // const [groceries, setGroceries] = useState(data);
  // const [otherState, setOtherState] = useState('this other state');

  state = {
    todo: data
    // otherState: "this other state"
  };

  toggleCompleted = itemId => {
    console.log("toggledList", itemId);

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  };

  addItem = itemName => {
    console.log("item added:", itemName);
    this.setState({
      todo: [
        ...this.state.todo,
        {
          // ^^^^ Here I'm using a spread(...) to get all the properties and then adding on to it
          task: itemName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    console.log("rendering...");
    return (
      <ContainerStyle className="Container">
        <FormContainer className="todo-form">
          <h1>My Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </FormContainer>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </ContainerStyle>
    );
  }
}

export default App;
