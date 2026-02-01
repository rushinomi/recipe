const cardid = localStorage.getItem("id");

const singlerecipebaseCuisineURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cardid}`;

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

const singlerecipes = await getMultipleCuisineRecipes(singlerecipebaseCuisineURL);
console.log(singlerecipes);