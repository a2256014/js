let routes = {};
let templates = {};
let root_div = document.getElementById("root");

const Home = () => {
  const $div = root_div.getElementsByTagName("div");
  if ($div) {
    [...$div].forEach((div) => root_div.removeChild(div));
  }
  console.log(...$div);
  let div = document.createElement("div");
  let link = document.createElement("a");
  link.href = "#/about";
  link.innerText = "About";

  div.innerHTML = "<h1>Home</h1>";
  div.appendChild(link);

  root_div.appendChild(div);
};

const About = () => {
  const $div = root_div.getElementsByTagName("div");
  if ($div) {
    [...$div].forEach((div) => root_div.removeChild(div));
  }
  let div = document.createElement("div");
  let link = document.createElement("a");
  link.href = "#/";
  link.innerText = "Home";

  div.innerHTML = "<h1>About</h1>";
  div.appendChild(link);

  root_div.appendChild(div);
};

const route = (path, template) => {
  if (typeof template === "function") {
    return (routes[path] = template);
  } else if (typeof template === "string") {
    return (routes[path] = templates[template]);
  } else {
    return;
  }
};

const template = (name, templateFunction) => {
  return (templates[name] = templateFunction);
};

template("home", () => {
  Home();
});
template("about", () => {
  About();
});

route("/", "home");
route("/about", "about");

const resolveRoute = (route) => {
  try {
    return routes[route];
  } catch (e) {
    throw new Error("error");
  }
};

const router = (evt) => {
  let url = window.location.hash.slice(1) || "/";
  let route = resolveRoute(url);

  route();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
