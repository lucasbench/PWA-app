// call the container from html
const container = document.querySelector(".container") 
//array of cards with names and images
const cards = [
    {name: "Wine Regions", image: "images/maps/burgundyMap.jpg"},
    {name: "Reviews", image: "images/dunkids.jpg"},
    {name: "Wine Pairing", image: "images/maps/ItalyMap.jpg"},
    {name: "The Somm", image: "images/WhiteWineTastingGrid.jpg"}
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
