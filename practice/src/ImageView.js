const URL = "./image";
function ImageView({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.target = document.createElement("div");
  this.target.className = "Modal ImageViewer";
  this.target.setAttribute("tabindex", "0");
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    this.target.innerHTML = `<div class="content">${
      this.state.viwer ? `<img src=".${this.state.viwer}">` : ""
    }</div>`;
    this.target.style.display = this.state.viwer ? "block" : "none";
    if (this.target.style.display === "block") this.target.focus();
  };
  this.target.addEventListener("click", (e) => {
    if (e.target.className === "Modal ImageViewer") this.onClick();
  });
  this.target.addEventListener("keydown", (e) => {
    if (e.key === "Escape") this.onClick();
  });
}
export default ImageView;
