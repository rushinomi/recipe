
import { getcuisinecard } from "./getcuisine.js";
import { getrecipecard } from "./getrecipe.js";

const cardparentcontainer = document.querySelector(".main");
const cuisineparentcontainer = document.querySelector(".cuisine-filter");

const serchbox = document.querySelector(".input");
const baseCuisineURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
const cuisineList = ['Indian', 'American', 'Chinese', 'Italian', 'Mexican', 'French'];

let searchvalue = "";
let allRecipes = []; // Store all recipes from multiple cuisines
let filteredarrfrecipes = [];
let arrofselectedcuisines = [];


const createElement = (element) => document.createElement(element);

// Fetch recipes from multiple cuisines and get their area/cuisine info
const getMultipleCuisineRecipes = async () => {
    try {
        let recipes = [];
        
        for (let cuisine of cuisineList) {
            const url = `${baseCuisineURL}${cuisine}`;
            const { data } = await axios.get(url);
            if (data.meals) {
                // Add cuisine info to each meal
                data.meals.forEach(meal => {
                    meal.strArea = cuisine; // Store the cuisine name
                });
                recipes = [...recipes, ...data.meals];
            }
        }
        return recipes;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};

// Initialize: Fetch all recipes from multiple cuisines
allRecipes = await getMultipleCuisineRecipes();

// Filter recipes based on selected cuisines and search term
const getfiltereddata = () => {
    let filtered = allRecipes;

    // Filter by search term
    if (searchvalue.length > 0) {
        filtered = filtered.filter((recipe) =>
            recipe.strMeal.toLowerCase().includes(searchvalue)
        );
    }

    // Filter by selected cuisines
    if (arrofselectedcuisines.length > 0) {
        filtered = filtered.filter((recipe) =>
            arrofselectedcuisines.includes(recipe.strArea)
        );
    }

    return filtered;
};

// Handle search input
const searchinputhandler = (event) => {
    searchvalue = event.target.value.toLowerCase();
    const filtereddata = getfiltereddata();
    cardparentcontainer.innerHTML = "";
    getrecipecard(filtereddata, cardparentcontainer, createElement);
};

// Handle cuisine checkbox selection
const handlecuisineclick = (event) => {
    if (event.target.type === "checkbox") {
        const cuisine = event.target.dataset.cuisine;
        const isselected = event.target.checked;

        // Add or remove selected cuisine
        arrofselectedcuisines = isselected 
            ? [...arrofselectedcuisines, cuisine] 
            : arrofselectedcuisines.filter(c => c !== cuisine);

        // Re-render filtered recipes
        const filtereddata = getfiltereddata();
        cardparentcontainer.innerHTML = "";
        getrecipecard(filtereddata, cardparentcontainer, createElement);
    }
};



// Event listeners
serchbox.addEventListener("keyup", searchinputhandler);
cuisineparentcontainer.addEventListener("change", handlecuisineclick);

// Initial render: Display all recipes and cuisine checkboxes
getrecipecard(allRecipes, cardparentcontainer, createElement);

// Create cuisine checkboxes
cuisineList.forEach(cuisine => {
    const cuisinecontainer = createElement("div");
    cuisinecontainer.classList.add("filter");

    const checkbox = createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("data-cuisine", cuisine);

    const label = createElement("label");
    label.classList.add("cuisine-label", "d-flex", "align-items-center", "gap-small", "padding-bottom");
    label.appendChild(checkbox);

    const labeltext = createElement("span");
    labeltext.innerText = cuisine;
    label.appendChild(labeltext);

    cuisinecontainer.appendChild(label);
    cuisineparentcontainer.appendChild(cuisinecontainer);
});

cardparentcontainer.addEventListener("click", (event) => {
    const cardid = event.target.dataset.id;
    console.log(cardid);
    if(cardid){
        localStorage.clear();
        localStorage.setItem("id", cardid);
        location.href = "singlerecipe.html";
    }
});
    