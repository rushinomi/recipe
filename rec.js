const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const getrecipes = async () => {
    try {
        const {data} = await axios.get(URL);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
 
    const recipes = await getrecipes(URL);
    console.log(recipes); 