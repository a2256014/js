function Nodes({ $app, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement("ul");
  this.onClick = onClick;

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }; //react의 data처리

  this.render = () => {
    this.$target.innerHTML = this.state.nodes
      .map((node) => `<div class="Node"><li>${node.name}</li></div>`)
      .join("");
  }; //react의 return

  this.$target.querySelectorAll(".Node").forEach(($node) => {
    $node.addEventListener("click", nodeClick);
  });

  const nodeClick = (e) => {
    const { nodeId } = e.target.dataset;
    const selectNode = this.state.nodes.find((node) => node.id === nodeId);

    if (selectNode) {
      this.onClick(selectNode);
    }
  };
}

export default Nodes;
