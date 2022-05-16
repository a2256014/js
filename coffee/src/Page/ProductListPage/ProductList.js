import { routeChange } from "../../Util/Router.js";

function ProductList({ $target, products }) {
  const $component = document.createElement("ul");
  $target.appendChild($component);

  this.state = products;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $component.innerHTML = this.state
      .map(
        (data) => `
                <li class="Product" data-productId="${data.id}">
                    <img src="${data.imageUrl}"/>
                    <div class="Product__info">
                        <div>${data.name}</div>
                        <div>${data.price}원~</div>
                    </div>
                </li>
        `
      )
      .join("");
  };
  this.render();

  $component.addEventListener("click", (e) => {
    const clickNode = e.target.closest(".Product");
    const { productid } = clickNode.dataset;
    if (productid) routeChange(`/products/${productid}`);
  });
}
export default ProductList;
