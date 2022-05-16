function ProductDetail({ $target, initialState }) {
  const $component = document.createElement("div");
  $component.className = "ProductDetail";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
    this.render();
  };

  this.render = () => {
    if (!this.state.product) return;

    const productOptions = this.state.product.productOptions;
    $component.innerHTML = `
      <img src ="${this.state.product.imageUrl}"/>
      <div class="ProductDetail__info">
      <div class="ProductDetail__price">${this.state.product.price}</div>
      <select>
        <option>선택하세요.</option>
        ${productOptions.map(
          (option) => `
          <option>${option.name} ${
            option.price ? `(+${option.price})` : ""
          }</option>
        `
        )}
      </select>
      </div>
      `;
    $target.appendChild($component);
  };

  $component.addEventListener("change", (e) => {
    console.log(e.target.value, e.target.tagName);
    if (e.target.tagName === "SELECT") {
    }
  });
}
export default ProductDetail;
