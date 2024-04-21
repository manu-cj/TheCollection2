let games =  [
    {
        nom: "Elden ring",
        genre: "Rpg",
        description: "Elden Ring is a dark fantasy action RPG set in a vast world created by George R. R. Martin, offering intense combat, deep exploration, and a gripping narrative",
        image: "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/03-news/ER-SOTE-announcement.jpg?twic=v1/cover=500x556/step=10/quality=80"
    },
    {
        nom: "World of warcraft",
        genre: "Mmorpg",
        description: "World of warcraft is a massively multiplayer online role-playing game set in the fantastical world of Azeroth, where players embark on epic quests, engage in thrilling battles, and forge alliances with other adventurers",
        image: "https://iwant.games/wp-content/uploads/world-of-warcraft-the-war-within-thumb-468x702.jpg"
    },
    {
        nom: "Résident evil 4",
        genre: "Horror",
        description: "Résident evil 4 is a survival horror game that follows special agent Leon S. Kennedy as he navigates a rural European village infested with grotesque creatures, combining intense action with chilling atmosphere and strategic combat.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png"
    }
];


const body = document.querySelector('body');
body.appendChild(document.createElement('header'));
body.appendChild(document.createElement('main'));
body.appendChild(document.createElement('footer'));

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


header.appendChild(document.createElement('h1'));
document.querySelector('h1').innerText = "My favorite games";
header.appendChild(document.createElement('p'));
header.querySelector('p').classList.add("description");
document.querySelector('.description').innerText = "My list of favorite games";

function createCard(index) {
    const article = document.createElement('article');
    article.innerHTML = `
        <div class="picture-div" style="background-image: url(${games[index].image});">
            <p class="genre">${games[index].genre}</p>
        </div>
        <h5>${games[index].nom}</h5>
        <i>${games[index].description}</i>
    `;
    article.classList.add('card'); 
    main.appendChild(article);
    const pArticle = article.querySelectorAll('p');
    const h2Article = article.querySelector('h2');
    

    
}



for (let i = 0; i < games.length; i++) {
    createCard(i);
    
}

