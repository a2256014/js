const URL = "./public/";
const getData = async (id = 0) => {
  try {
    const data = await fetch(`${URL}${id}.json`);
    if (data.ok) {
      return await data.json();
    }
  } catch (e) {
    console.log("Api error : ", e);
  }
};
export default getData;
