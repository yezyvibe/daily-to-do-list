export default function TodoInput({ $target, onAddTodo }) {
  const $component = document.createElement("form");
  $component.className = "TodoList";
  $target.appendChild($component);

  this.render = () => {
    $component.innerHTML = `
      <input class="Todo-Input" type="text" placeHolder="새로운 할 일을 적어주세요"></input>
      <button>완료</button>
    `;
  };

  this.render();

  $component.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  $component.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") return;
    onAddTodo(e.target.value);
    $component.querySelector(".Todo-Input").value = "";
  });
  $component.querySelector(".Todo-Input").focus();
}
