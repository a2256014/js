function Breadcrumb({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.target = document.createElement("nav");
  this.target.className = "Breadcrumb";
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.target.innerHTML = `<div class="nav-item">root</div>${this.state
      .map((node) => {
        return `<div class="nav-item"">${node.name}</div>`;
      })
      .join("")}`;
  };

  this.target.addEventListener("click", (e) => {
    const navItem = e.target.closest(".nav-item");

    if (navItem) {
      this.onClick(navItem);
    }
  });
}

export default Breadcrumb;
