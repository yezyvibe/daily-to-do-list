import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
  this.state = {
    todoList: [],
    inputValue: "",
    selectedItem: "",
  };

  this.setState = (nextState) => {
    this.state = nextState;
    // 투두리스트 상태 변화
    todoList.setState({
      ...this.state,
      todoList: this.state.todoList,
    });
  };

  const $component = document.createElement("div");
  $component.innerHTML = "<h1>Daily Todolist</h1>";
  $target.appendChild($component);

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (newTodo) => {
      if (newTodo.trim().length === 0) return;
      this.setState({
        ...this.state,
        todoList: [...this.state.todoList, { name: newTodo, isChecked: false }],
      });
      console.log(this.state.todoList);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: {
      todoList: this.state.todoList,
      selectedItem: this.state.selectedItem,
    },
    onClick: (itemId) => {
      console.log(itemId);
      let nextTodoList = [...this.state.todoList];
      nextTodoList = nextTodoList.map((item, index) =>
        index === itemId ? { ...item, isChecked: !item.isChecked } : item
      );
      console.log(nextTodoList, "넥스트");
      this.setState({
        ...this.state,
        todoList: nextTodoList,
      });
      console.log(this.state.todoList, "스테이트 바꾸기");
    },
  });
}
