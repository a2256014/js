const URL = "./assets/nyan-cat.gif";
function Loading({ $app, initialState }) {
  this.state = initialState;
  this.target = document.createElement("div");
  this.target.className = "Modal Loading";
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    this.target.innerHTML = `<div class="content"><img src="${URL}"></div>`;
    this.target.style.display = this.state.isLoading ? "block" : "none";
  };
}
export default Loading;
