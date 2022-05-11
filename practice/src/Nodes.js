const PREV = "./assets/prev.png";
const FILE = "./assets/file.png";
const DIRECTORY = "./assets/directory.png";
function Nodes({ $app, initialState, onClick, backClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.backClick = backClick;
  this.target = document.createElement("div");
  this.target.className = "Nodes";
  $app.appendChild(this.target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    const inner = this.state.data
      .map((node) => {
        const filePath = node.type === "FILE" ? FILE : DIRECTORY;
        return `<div class="Node"><img src="${filePath}"><div>${node.name}</div></div>`;
      })
      .join("");

    this.target.innerHTML = this.state.isRoot
      ? inner
      : `<div class="Node"><img src="${PREV}"></div>${inner}`;
  };
  this.target.addEventListener("click", (e) => {
    try {
      const select = this.state.data.find(
        (v) => v.name === e.target.closest(".Node").innerText
      );
      if (select) this.onClick(select);
      else this.backClick();
    } catch (e) {
      console.log("잘못된 부분 클릭");
    }
  });
}
export default Nodes;
