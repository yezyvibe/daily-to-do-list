export default function UserName({ $target, initialState }) {
  this.state = initialState;
  const $component = document.createElement("form");
  $component.className = "userName";
  $target.appendChild($component);

  this.render = () => {
    $component.innerHTML = `
      <input type="text"></input>
    `;
  };

  $component.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  this.render();
}
