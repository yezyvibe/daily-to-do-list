export default function UserName({ $target, initialState, onSubmit }) {
  this.state = initialState;
  const $component = document.createElement("form");
  $component.className = "userName";
  $target.appendChild($component);

  this.render = () => {
    $component.innerHTML = `
      ${
        this.state
          ? `<h1> ${this.state}'s Daily Todolist</h1>`
          : `<input class="userNameInput" type="text" placeHolder="이름을 입력해주세요"></input>`
      } 
    `;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  $component.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  $component.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") return;
    const userName = e.target.value;

    if (userName.trim().length > 0) {
      onSubmit(userName);
      $target.querySelector(".Todo-Input").focus();
    }
  });

  this.render();
  $component.querySelector(".userNameInput").focus();
}
