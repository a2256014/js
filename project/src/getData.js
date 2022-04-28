const BASE_URL = "./public/";

export const getData = async (id) => {
  const url = id ? id : 0;
  try {
    const data = await fetch(`${BASE_URL}${url}.json`);

    if (!data.ok) {
      throw new Error("data error");
    }

    return await data.json();
  } catch (e) {
    console.log("catch error");
  }
};
