const URL = "../public/";
const getData = async (id = "products") => {
  try {
    const data = await fetch(`${URL}${id}.json`);
    if (data.ok) return await data.json();

    throw new Error(".json() error");
  } catch (e) {
    console.log("getData error : ", e);
  }
};
export default getData;
