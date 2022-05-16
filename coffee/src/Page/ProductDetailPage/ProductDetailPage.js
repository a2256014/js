import getData from "../../Util/Api.js";
import ProductDetail from "./ProductDetail.js";

function ProductDetailPage({ $target, productId }) {
  const $component = document.createElement("div");
  $component.className = "ProductDetailPage";
  $target.appendChild($component);

  this.state = { productId, product: null };

  this.setState = (nextState) => {
    this.state.product = nextState;
    productDetail.setState({
      product: this.state.product,
      selectedOptions: [],
    });
  };

  this.render = async () => {
    const product = await getData(this.state.productId);
    $component.innerHTML = `<h2>${product.name}상품 정보</h2>`;
    this.setState(product);
  };

  const productDetail = new ProductDetail({
    $target: $component,
    initialState: { product: this.state.product, selectedOptions: [] },
  });
}

export default ProductDetailPage;
