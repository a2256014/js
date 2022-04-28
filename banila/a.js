function A({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "a";

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<div class="a-item">root</div>${this.state
      .map(
        (node, index) =>
          `<div class="a-item" data-index="${index}">${node.name}</div>`
      )
      .join("")}`;
  };
}

export default A;
