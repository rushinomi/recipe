export const getcuisinecard = (arrofcuisines, parentElement, createElement) => {
    for(let cuisine of arrofcuisines) {
        const cuisinecontainer = createElement("div");
        cuisinecontainer.classList.add("filter");
        cuisinecontainer.setAttribute("data-id", cuisine.idMeal);

        //checkbox
        const checkbox = createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("data-id", cuisine.idMeal);

        //label 
        const label = createElement("label");
        label.classList.add("cuisine-label", "d-flex", "align-items-center", "gap-small", "padding-bottom");
        label.appendChild(checkbox);

        const labeltext = createElement("span");
        labeltext.innerText = cuisine.strMeal;
        labeltext.setAttribute("data-id", cuisine.idMeal);
        label.appendChild(labeltext);
        // label.innerText = cuisine.Cuisine;
        label.setAttribute("data-id", cuisine.idMeal);

        cuisinecontainer.appendChild(label);
        parentElement.appendChild(cuisinecontainer);
        

        // if (cuisine.strMealThumb) {
        //     const thumb = createElement('img');
        //     thumb.classList.add('cuisine-thumb');
        //     thumb.setAttribute('src', cuisine.strMealThumb);
        //     thumb.setAttribute('alt', cuisine.strMeal);
        //     label.appendChild(thumb);
        // }
//
        // const text = createElement('span');
        // text.classList.add('cuisine-name');
        // text.innerText = cuisine.strMeal;
        // label.appendChild(text);
        // cuisinecontainer.appendChild(label);
        // parentElement.appendChild(cuisinecontainer);
    }
}