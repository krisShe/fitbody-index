//  Read more button
const ingredientsAll = document.querySelectorAll('.ingredient-item');
const ingredientsRest = [...ingredientsAll].slice(6);
const readButton = document.getElementById('read-more');
let isExpanded = false;
ingredientsRest.forEach((item) => item.style.display = 'none');
readButton.addEventListener("click", function (e) {
    isExpanded = !isExpanded;
    ingredientsRest.forEach((item) => item.style.display = isExpanded ? 'block' : 'none');
})