import { getrecipecard } from "./getrecipe.js";

const cardparentcontainer = document.querySelector(".main");
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const createElement = (element) => document.createElement(element);
const getrecipes = async () => {
    try {
        const {data} = await axios.get(URL);
        return data.meals;
    }
    catch (error) {
        console.log(error);
    }
};

    const recipes = await getrecipes(URL);

    getrecipecard(recipes, cardparentcontainer, createElement);
    console.log(recipes); 