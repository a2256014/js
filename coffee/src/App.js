import CartPage from "./Page/CartPage/CartPage.js";
import ProductDetailPage from "./Page/ProductDetailPage/ProductDetailPage.js";
import ProductListPage from "./Page/ProductListPage/ProductListPage.js";
import { init } from "./Util/Router.js";

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    const [, , productId] = pathname.split("/");
    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.includes("/products/")) {
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target, initialState: null }).render();
    }
  };
  window.addEventListener("popstate", this.route);
  init(this.route);
  this.route();
}

export default App;
