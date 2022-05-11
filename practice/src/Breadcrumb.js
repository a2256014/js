function Bread({ $app, initialState, onClick }) {
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
    const inner = this.state.depth
      .map((v) => {
        return `<div class="Bread">${v.name}</div>`;
      })
      .join("");
    this.target.innerHTML = `<div class="Bread">root</div>${inner}`;
  };
  this.target.addEventListener("click", (e) => {
    const selectBread = e.target.closest(".Bread");
    if (selectBread) this.onClick(selectBread);
  });
}
export default Bread;
