import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import TodoState from "./components/TodoState.js";
import UserName from "./components/UserName.js";

export default function App({ $target }) {
  this.state = {
    todoList: [],
    inputValue: "",
    selectedItem: "",
    userName: "",
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState({
      ...this.state,
      todoList: this.state.todoList,
    });
    todoState.setState(this.state.todoList);
    userName.setState(this.state.userName);
    localStorage.setItem(this.state.userName, JSON.stringify(this.state));
  };

  const userName = new UserName({
    $target,
    initialState: this.state.userName,
    onSubmit: (name) => {
      if (localStorage.getItem(name)) {
        this.setState(JSON.parse(localStorage.getItem(name)));
      } else {
        this.setState({
          ...this.state,
          userName: name,
        });
      }
    },
  });

  const todoState = new TodoState({
    $target,
    initialState: this.state.todoList,
  });

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (newTodo) => {
      if (newTodo.trim().length === 0) return;
      this.setState({
        ...this.state,
        todoList: [...this.state.todoList, { name: newTodo, isChecked: false }],
      });
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: {
      todoList: this.state.todoList,
      selectedItem: this.state.selectedItem,
    },
    onClick: (itemId) => {
      let nextTodoList = [...this.state.todoList];
      nextTodoList = nextTodoList.map((item, index) =>
        index === itemId ? { ...item, isChecked: !item.isChecked } : item
      );
      this.setState({
        ...this.state,
        todoList: nextTodoList,
      });
    },
  });
}
