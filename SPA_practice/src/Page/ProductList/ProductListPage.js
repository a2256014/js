import getData from "../../API.js";
import ProductList from "./ProductList.js";
function ProductListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductListPage";

  $page.innerHTML = `<h1>상품 목록</h1>`;

  this.setState = (nextState) => {
    this.state = nextState;
    productList.setState(this.state);
  };
  this.render = () => {
    $target.appendChild($page);
  };

  const fetchProducts = async () => {
    const products = await getData();
    console.log(products);
    this.setState(products);
  };

  const productList = new ProductList({
    $target: $page,
    initialState: this.state,
  });

  fetchProducts();
}
export default ProductListPage;
