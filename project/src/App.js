import Breadcrumb from "./Breadcrumb.js";
import { getData } from "./getData.js";
import ImgView from "./ImgView.js";
import Loading from "./Loading.js";
import Nodes from "./Nodes.js";

const cache = {};

function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    direct: [],
    isView: null,
    isLoading: true,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    nav.setState(this.state.direct);
    node.setState({ isRoot: this.state.isRoot, nodes: this.state.nodes });
    image.setState(this.state.isView);
    loading.setState(this.state.isLoading);
  };

  const loading = new Loading({ $app, initialState: this.state.isLoading });

  const handleBreadClick = (e) => {
    console.log(e.innerText);
    if (e.innerText === "root") {
      this.setState({
        ...this.state,
        direct: [],
        isRoot: true,
        nodes: cache[e.innerText],
      });
    } else {
      if (
        e.innerText !== this.state.direct[this.state.direct.length - 1].name
      ) {
        let index;
        this.state.direct.forEach((item, i) => {
          if (item.name === e.innerText) {
            index = i;
          }
        });
        console.log("index: ", index);
        const nextDirect = this.state.direct.slice(0, index + 1);
        this.setState({
          ...this.state,
          direct: nextDirect,
          nodes: cache[nextDirect[nextDirect.length - 1].id],
        });
      }
    }
  };

  const nav = new Breadcrumb({
    $app,
    initialState: this.state.direct,
    onClick: handleBreadClick,
  });

  const handleImgClick = () => {
    this.setState({
      ...this.state,
      isView: null,
    });
  };

  const handleClick = async (selectedNode) => {
    console.log(cache);
    this.setState({
      ...this.state,
      isLoading: true,
    });
    try {
      if (selectedNode.type === "DIRECTORY") {
        if (cache[selectedNode.id]) {
          this.setState({
            ...this.state,
            isRoot: false,
            direct: [...this.state.direct, selectedNode],
            nodes: cache[selectedNode.id],
          });
        } else {
          const nextNode = await getData(selectedNode.id);
          this.setState({
            ...this.state,
            isRoot: false,
            direct: [...this.state.direct, selectedNode],
            nodes: nextNode,
          });
          cache[selectedNode.id] = nextNode;
        }
      } else if (selectedNode.type === "FILE") {
        this.setState({
          ...this.state,
          isView: selectedNode.filePath,
        });
      }
    } catch (e) {
      console.log(`handleClick error : ${e}`);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  const image = new ImgView({
    $app,
    initialState: { isView: [] },
    onClick: handleImgClick,
  });

  const handleBackClick = async () => {
    this.state.direct.pop();
    let id;
    if (this.state.direct.length === 0) {
      id = "";
    } else {
      id = this.state.direct[this.state.direct.length - 1].id;
    }
    this.setState({
      ...this.state,
      isLoading: true,
    });
    try {
      if (id) {
        this.setState({
          isRoot: this.state.direct.length === 0 ? true : false,
          direct: [...this.state.direct],
          nodes: cache[id],
        });
      } else {
        this.setState({
          isRoot: this.state.direct.length === 0 ? true : false,
          direct: [...this.state.direct],
          nodes: cache["root"],
        });
      }
    } catch (e) {
      console.log(`handleBackClick error : ${e}`);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  const node = new Nodes({
    $app,
    initialState: { isRoot: this.state.isRoot, nodes: this.state.nodes },
    onClick: handleClick,
    backClick: handleBackClick,
  });

  const init = async (id) => {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });

      const rootNodes = await getData(id);
      console.log(rootNodes);
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes,
      });
      cache["root"] = rootNodes;
    } catch (e) {
      console.log(`App getData error : ${e}`);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };
  init();
}

export default App;
