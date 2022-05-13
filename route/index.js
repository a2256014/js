import About from "./About.js";
import Home from "./Home.js";
import Router from "./Router.js";
import Setting from "./Setting.js";

const $App = document.querySelector(".App");

const routes = [
  { path: "", component: Home },
  { path: "about", component: About },
  { path: "settings", component: Setting },
];

new Router({ $app: $App, routes: routes });
