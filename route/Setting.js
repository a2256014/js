function Setting($app) {
  this.target = document.createElement("div");
  this.target.className = "Page";
  $app.appendChild(this.target);

  this.render = () => {
    this.target.innerHTML = "<h1>Setting</h1>";
  };
  this.render();
}
export default Setting;
