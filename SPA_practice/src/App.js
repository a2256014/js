import CartPage from "./Page/Cart/CartPage.js";
import ProductDetailPage from "./Page/ProductDetail/ProductDetailPage.js";
import ProductListPage from "./Page/ProductList/ProductListPage.js";
import { init } from "./Router.js";

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    if (pathname === "/") new ProductListPage({ $target }).render();
    else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") new CartPage({ $target }).render();
  };
  window.addEventListener("popstate", this.route);
  init(this.route);
  this.route();
}
export default App;
