import getData from "../../Util/Api.js";
import ProductList from "./ProductList.js";

function ProductListPage({ $target }) {
  const $component = document.createElement("div");
  $component.className = "ProductListPage";
  $component.innerHTML = "<h1>상품목록</h1>";

  this.setState = (nextState) => {
    productList.setState(nextState);
  };

  this.render = () => {
    $target.appendChild($component);
  };

  const fetchData = async () => {
    const products = await getData();
    this.setState(products);
  };

  const productList = new ProductList({
    $target: $component,
    products: this.state,
  });

  fetchData();
}

export default ProductListPage;
