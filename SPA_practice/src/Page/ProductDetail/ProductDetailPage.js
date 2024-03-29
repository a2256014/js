import getData from "../../API.js";
import ProductDetail from "./ProductDetail.js";

function ProductDetailPage({ $target, productId }) {
  this.state = { productId, product: null };
  const $page = document.createElement("div");
  $page.className = "ProductDetailPage";

  $page.innerHTML = "<h2>상품정보<h2>";
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await getData(productId);
    this.setState({
      ...this.state,
      product,
    });
  };

  this.render = () => {
    if (!this.state.product) $target.innerHTML = "Loading..";
    else {
      $target.innerHTML = "";
      $target.appendChild($page);
      new ProductDetail({
        $target: $page,
        initialState: { product: this.state.product, selectedOptions: [] },
      });
    }
  };
  this.fetchProduct();
}
export default ProductDetailPage;
