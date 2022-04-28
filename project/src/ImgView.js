function ImgView({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.target = document.createElement("div");
  this.target.className = "Modal ImageViewer";
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.target.innerHTML = `<div class="content">${
      this.state ? `<img src=".${this.state}">` : ""
    }</div>`;
    this.target.style.display = this.state ? "block" : "none";
  };
  $app.querySelector(".Modal").addEventListener("click", (e) => {
    if (e.path[0] === $app.querySelector(".Modal")) {
      this.onClick();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      this.onClick();
    }
  });
}

export default ImgView;
