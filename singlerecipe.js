const cardid = localStorage.getItem("id"); 
const recipeURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cardid}`;

const fetchRecipeWithIngredients = async () => {
    try {
        const { data } = await axios.get(recipeURL);
        const meal = data.meals[0]; 
        
        console.log("Meal:", meal.strMeal); 
        console.log("Instructions:", meal.strInstructions); 
        
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push({
                    ingredient: meal[`strIngredient${i}`],
                    measure: meal[`strMeasure${i}`]
                });
            }
        }
        console.log("Ingredients:", ingredients); 
        
        return { meal, ingredients };
    } catch (error) {
        console.log("Error fetching recipe:", error);
    }
};

fetchRecipeWithIngredients();

const displayRecipe = async () => {
    const { meal, ingredients } = await fetchRecipeWithIngredients();
    
    
    const mainContainer = document.querySelector("body") || document.body;
    
    
    const recipeHTML = `
        <div style="max-width: 800px; margin: 20px auto; padding: 20px;">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100%; height: auto;">
            
            <h3>Ingredients:</h3>
            <ul>
                ${ingredients.map(ing => `<li>${ing.ingredient} - ${ing.measure}</li>`).join('')}
            </ul>
            
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
    `;
    
    mainContainer.innerHTML += recipeHTML;
};

displayRecipe();