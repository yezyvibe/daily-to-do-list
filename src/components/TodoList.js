export default function TodoList({ $target, initialState, onClick }) {
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const $component = document.createElement("ul");
  $target.appendChild($component);

  this.render = () => {
    $component.innerHTML = `
      ${this.state.todoList
        .map(
          (item, index) => `
          <li data-todo-id="${index}">${item.name}<input type="checkBox" ${
            item.isChecked ? "checked" : ""
          }></input></li>
      `
        )
        .join("")}
    `;
  };

  this.render();

  $component.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { todoId } = $li.dataset;
    onClick(parseInt(todoId));
  });
}
