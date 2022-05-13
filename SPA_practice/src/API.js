const URL = "../public/";
const getData = async (id = "products", options = {}) => {
  try {
    const fullUrl = `${URL}${id}.json`;
    const data = await fetch(fullUrl, options);

    if (data.ok) return await data.json();

    throw new Error("getData error");
  } catch (e) {
    console.log(e);
  }
};
export default getData;
