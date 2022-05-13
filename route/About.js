function About($app) {
  this.target = document.createElement("div");
  this.target.className = "Page";
  $app.appendChild(this.target);

  this.render = () => {
    this.target.innerHTML = "<h1>About</h1>";
  };
  this.render();
}
export default About;
