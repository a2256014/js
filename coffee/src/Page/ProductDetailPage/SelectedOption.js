function SelectedOption({ $target, initialState }) {
  const $innerTarget = $target.querySelector(".ProductDetail__info");
  const $component = document.createElement("div");
  $component.className = "ProductDetail__selectedOptions";

  $innerTarget.appendChild($component);

  const getTotalPrice = () => {
    return this.state.reduce(
      (acc, option) => acc + option.price * option.quantity,
      0
    );
  };

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = [...this.state, ...nextState];
    this.render();
  };

  this.render = () => {
    $component.innerHTML = `
        <h3>선택된 상품</h3>
        <ul>
            ${this.state.map(
              (option) => `
            <li>
                ${this.state.name} ${option.name} ${
                this.state.price + option.price
              }
            </li>
            `
            )}
        </ul>
      `;
  };
}
