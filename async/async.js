const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Apple = async () => {
  await delay(1000);
  return "apple";
};

const Banana = async () => {
  await delay(2000);
  return "banana";
};

Apple().then((apple) =>
  Banana().then((banana) => console.log(`${apple}+${banana}`))
); //3초 소요 및 콜백지옥

const getFruit = async () => {
  const apple = await Apple();
  const banana = await Banana();
  return `${apple}+${banana}`;
};

getFruit().then(console.log);

const getAllFruit = () => {
  return Promise.all([Apple(), Banana()]).then((fruits) => {
    return fruits;
  });
};

getAllFruit().then(console.log);

// getAllFruit().then((...item) => {
//   const value = document.createElement("div");
//   value.innerHTML = item;
//   value.setAttribute("id", "friut");
//   const container = document.getElementById("h");
//   console.log("container: ", container);
//   container.append(value);
// });
