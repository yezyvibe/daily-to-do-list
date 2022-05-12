export default function TodoState({ $target, initialState }) {
  this.state = initialState;
  const $component = document.createElement("div");
  $target.appendChild($component);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const completedTodo = this.state.filter((item) => item.isChecked);
    $component.innerHTML = `
      <p>전체 투두: ${this.state.length} 개</p>
      <p>남은 투두: ${this.state.length - completedTodo.length}개</p>
      <p>완료한 투두: ${completedTodo.length}개</p>
    `;
  };

  this.render();
}
