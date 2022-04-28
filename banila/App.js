import A from "./a.js";
import request from "./getData.js";
import Nodes from "./Nodes.js";

const handleClick = (selectNode) => {};

function App($app) {
  this.state = {
    isRoot: false,
    nodes: [], //html 데이터를 담는 곳
    depth: [],
  };

  const a = new A({ $app, initialState: this.state.depth });

  const nodes = new Nodes({
    $app,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: handleClick(selectNode),
  });
  console.log(nodes);
  console.log(a);

  this.setState = (nextState) => {
    this.state = nextState;
    a.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  const init = async () => {
    try {
      const data = await request();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
  init();
}

export default App;
