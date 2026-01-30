import { getrecipecard } from "./getrecipe.js";

const cardparentcontainer = document.querySelector(".main");
const recipeURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const cuisineURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

const createElement = (element) => document.createElement(element);

const getrecipes = async (URL) => {
    try {
        const {data} = await axios.get(URL);
        return data.meals;
    }
    catch (error) {
        console.log(error);
    }
};
const getcuisines = async () => {
    try {
        const {data} = await axios.get(cuisineURL);
        return data.meals;
    }
    catch (error) {
        console.log(error);
    }
};

    const recipes = await getrecipes(recipeURL);
    const cuisines = await getcuisines(cuisineURL);

    getrecipecard(recipes, cardparentcontainer, createElement);
    console.log(cuisines); 