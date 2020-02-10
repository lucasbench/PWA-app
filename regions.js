// call the container from html
const container = document.querySelector(".container") 
//array of cards with names and images
const cards = [
    {name: "Burgundy", image: "images/maps/burgundyMap.jpg"},
    {name: "California", image: "images/maps/California.jpg"},
    {name: "France", image: "images/maps/FranceMap.jpg"},
    {name: "Italy", image: "images/maps/ItalyMap.jpg"},
    {name: "New Zealand", image: "images/maps/NewZealandMap.jpg"},
    {name: "Portugal", image: "images/maps/PortugalMap.jpg"},
    {name: "Rhone Valley", image: "images/maps/rhoneFinal.jpg"},
    {name: "South Africa", image: "images/maps/SouthAfrikaMap.jpg"},
    {name: "Spain", image: "images/maps/SpainMap.jpg"}
]
const showCards = () => {
    let output = ""
    cards.forEach(
        ({ name, image }) =>
        (output +=`
            <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Open</a>
            </div>
            `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCards);
