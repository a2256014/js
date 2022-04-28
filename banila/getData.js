const request = () => {
  const data = fetch("../public/test.json").then((response) => {
    return response.json();
  });

  return data;
};

export default request;
