import getData from "./Api.js";
import Bread from "./Breadcrumb.js";
import ImageView from "./ImageView.js";
import Loading from "./Loading.js";
import Nodes from "./Nodes.js";
const cache = {};
function App($app) {
  this.state = {
    isRoot: false,
    data: [],
    depth: [],
    viwer: "",
    isLoading: false,
  };
  const loading = new Loading({
    $app,
    initialState: { isLoading: this.state.isLoading },
  });
  const handleBreadClick = (node) => {
    if (node.innerText === "root") {
      this.setState({
        ...this.state,
        isRoot: true,
        depth: [],
        data: cache[""],
      });
    } else {
      if (
        node.innerText !== this.state.depth[this.state.depth.length - 1].name
      ) {
        let selectIndex;
        const selectNode = this.state.depth.find((v, i) => {
          if (v.name === node.innerText) {
            selectIndex = i;
            return v;
          }
        });
        console.log(selectNode, selectIndex);
        this.setState({
          ...this.state,
          depth: this.state.depth.slice(0, selectIndex + 1),
          data: cache[selectNode.id],
        });
      }
    }
  };
  const bread = new Bread({
    $app,
    initialState: { depth: this.state.depth },
    onClick: handleBreadClick,
  });
  const handleOnClick = async (node) => {
    const cacheData = cache[node.id];

    if (!cacheData) {
      if (node.type === "DIRECTORY") {
        const nextData = await isLoading(getData(node.id));
        cache[node.id] = nextData;
        this.setState({
          ...this.state,
          isRoot: false,
          data: nextData,
          depth: [...this.state.depth, node],
        });
      } else {
        this.setState({
          ...this.state,
          viwer: node.filePath,
        });
      }
    } else {
      if (node.type === "DIRECTORY") {
        const nextData = cacheData;
        this.setState({
          ...this.state,
          isRoot: false,
          data: nextData,
          depth: [...this.state.depth, node],
        });
      } else {
        this.setState({
          ...this.state,
          viwer: node.filePath,
        });
      }
    }
  };
  const handleBackClick = () => {
    const prevId = this.state.depth[this.state.depth.length - 2]
      ? this.state.depth[this.state.depth.length - 2].id
      : "";
    const prevData = cache[prevId];
    this.setState({
      ...this.state,
      depth: this.state.depth.slice(0, this.state.depth.length - 1),
      isRoot: this.state.depth.length === 1,
      data: prevData,
    });
  };
  const handleImgClick = () => {
    this.setState({
      ...this.state,
      viwer: "",
    });
  };
  const nodes = new Nodes({
    $app,
    initialState: { isRoot: this.state.isRoot, data: this.state.data },
    onClick: handleOnClick,
    backClick: handleBackClick,
  });
  const img = new ImageView({
    $app,
    initialState: { viwer: this.state.viwer },
    onClick: handleImgClick,
  });
  this.setState = (nextState) => {
    this.state = nextState;
    nodes.setState({ isRoot: this.state.isRoot, data: this.state.data });
    bread.setState({ depth: this.state.depth });
    img.setState({ viwer: this.state.viwer });
    loading.setState({ isLoading: this.state.isLoading });
  };
  const isLoading = async (data) => {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      return await data;
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };
  const init = async () => {
    try {
      const newData = await isLoading(getData());
      cache[""] = newData;
      console.log(newData);
      this.setState({
        ...this.state,
        isRoot: true,
        data: newData,
        depth: [],
      });
    } catch (e) {
      console.log("App getData error : ", e);
    }
  };
  init();
}
export default App;
