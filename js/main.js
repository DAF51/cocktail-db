//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const url = new URL('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
const button = document.querySelector("button")
button.addEventListener("click", getCocktail);

function getCocktail(){
const cocktail = document.querySelector("input").value.toLowerCase()
let search = url.searchParams;
search.set("s",`${cocktail}`)

url.search = search.toString();
new_url = url.toString();

console.log(typeof new_url)

fetch(new_url)
  .then(response => response.json())
  .then(data => {
    const drinkName = data.drinks[0].strDrink
    const drinkPicture = data.drinks[0].strDrinkThumb
    const instructions = data.drinks[0].strInstructions
    document.querySelector("h2").innerText = `${drinkName}`
    document.querySelector("img").setAttribute("src", `${drinkPicture}`)
    document.querySelector("h3").innerText = `${instructions}`
  });
}

