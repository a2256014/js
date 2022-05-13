function Router({ $app, routes }) {
  this.routes = routes;

  window.onhashchange = () => {
    this.nowPage = window.location.hash.replace("#", "");
    const route = this.routes.find((route) => route.path === this.nowPage);
    const Child = $app.querySelector(".Page");

    if (Child) $app.removeChild(Child);

    new route.component($app);
  };

  this.init = () => {
    const hash = window.location.hash.replace("#", "");
    const route = this.routes.find((route) => route.path === hash);
    new route.component($app);
  };
  this.init();
}

export default Router;
