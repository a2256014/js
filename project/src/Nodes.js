const DIRECTORY = "./assets/directory.png";
const FILE = "./assets/file.png";
const PREV = "./assets/prev.png";

function Nodes({ $app, initialState, onClick, backClick }) {
  this.state = initialState;
  this.target = document.createElement("div");
  this.target.className = "Nodes";
  this.onClick = onClick;
  this.backClick = backClick;
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map((node) => {
          const iconPath = node.type === "FILE" ? FILE : DIRECTORY;
          return `
            <div class="Node" data-node-id="${node.id}">
                <img src='${iconPath}' />
                <div>"${node.name}"</div>
            </div>
            `;
        })
        .join("");

      this.target.innerHTML = !this.state.isRoot
        ? `<div class="Node" ><img src="${PREV}"></div>${nodesTemplate}`
        : nodesTemplate;
    }
    this.target.querySelectorAll(".Node").forEach((item) => {
      item.addEventListener("click", (e) => {
        const $target = e.path.filter((item) => item.className === "Node");
        const { nodeId } = $target[0].dataset;
        const selectedNode = this.state.nodes.find(
          (node) => node.id === nodeId
        );
        if (selectedNode) {
          this.onClick(selectedNode);
        } else {
          this.backClick();
        }
      });
    });
  };
}

export default Nodes;
