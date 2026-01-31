
import { getcuisinecard } from "./getcuisine.js";
import { getrecipecard } from "./getrecipe.js";

const cardparentcontainer = document.querySelector(".main");
const cuisineparentcontainer = document.querySelector(".cuisine-filter");
const recipeURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const cuisineURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

const createElement = (element) => document.createElement(element);

const getrecipes = async (recipeURL) => {
    try {
        const {data} = await axios.get(recipeURL);
        return data.meals;
    }
    catch (error) {
        console.log(error);
    }
};
const getcuisines = async (cuisineURL) => {
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
    getrecipecard(cuisines, cardparentcontainer, createElement);
    getcuisinecard(recipes, cuisineparentcontainer, createElement);
    getcuisinecard(cuisines, cuisineparentcontainer, createElement);

    