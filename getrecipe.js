

export const getrecipecard = ( recipes, parentElement, createElement) =>{
    for(let recipe of recipes){
        //parent
        const cardContainer = createElement("div");
        cardContainer.classList.add("card", "shadow");
//image cont
        const cardimagecontainer = createElement("div");
        cardimagecontainer.classList.add("card-image-container");

  //card image
  

const imageelement = createElement("img");
    imageelement.classList.add("card-image");
    imageelement.setAttribute("src", recipe.strMealThumb);
    imageelement.setAttribute("alt", recipe.strMeal);
    imageelement.setAttribute("data-id", recipe.id);
    cardimagecontainer.appendChild(imageelement);
    cardContainer.appendChild(cardimagecontainer);


    //card details container
    const carddetailscontainer = createElement("div");
    carddetailscontainer.classList.add("card-details");

    //card title
    const cardtitleElement = createElement("div");
    cardtitleElement.classList.add("card-title");
    cardtitleElement.innerText = recipe.strMeal;
    carddetailscontainer.appendChild(cardtitleElement);

    //card rating and duration container
    const cardratingdurationcontainer = createElement("div");
    cardratingdurationcontainer.classList.add("card-rating");

    //rating element
    const ratingElement = createElement("div");
    const ratingValueElement = createElement("span");
    ratingValueElement.innerText = `Area: ${recipe.strArea}`;
    ratingElement.appendChild(ratingValueElement);
    cardratingdurationcontainer.appendChild(ratingElement);
  
    //duration (show timer icon instead of ID text)
    const lengthElement = createElement("div");
    lengthElement.classList.add("star-rating");
    const ratingiconelement = createElement("span");
    ratingiconelement.classList.add("time", "material-symbols-outlined");
    ratingiconelement.innerText = "timer";
    lengthElement.appendChild(ratingiconelement);
    // const durationIcon = createElement("span");
    // durationIcon.classList.add("material-symbols-outlined");
    // durationIcon.innerText = "timer";
    // lengthElement.appendChild(durationIcon);  
    const duration = createElement("span");

    lengthElement.appendChild(duration);
    cardratingdurationcontainer.appendChild(lengthElement);
    carddetailscontainer.appendChild(cardratingdurationcontainer);
    cardContainer.appendChild(carddetailscontainer);
    parentElement.appendChild(cardContainer);
    }
};