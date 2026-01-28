import { createElement } from "react"

export const getrecipecard = ( recipes, parentElement, createElement) =>{
    for(let recipe of recipes){
        //parent
        const cardContainer = createElement("div");
        cardContainer.classlist.add("card", "shadow");
//image cont
        const cardimagecontainer = createElement("div");
        cardimagecontainer.classlist.add("card-image-container");

  //card image

const imageelement = createElement("img");
imageelement.classlist.add("card-image");
imageelement.setAttribute("src", recipe["image-url"]);
imageelement.setAttribute("alt", recipe.TranslatedRecipeName)
    }
}