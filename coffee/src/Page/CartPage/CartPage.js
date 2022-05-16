function CartPage({ $target, initialState }) {
  const $component = document.createElement("div");
  $component.className = "CartPage";
  $target.appendChild($component);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $component.innerHTML = "<h1>장바구니</h1>";
  };
}

export default CartPage;
