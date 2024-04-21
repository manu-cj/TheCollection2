let games =  [
    {
        nom: "Elden ring",
        genre: "Action RPG",
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
    },
    {
        nom: "Dark Souls III",
        genre: "Action RPG",
        description: "Dark Souls III is an action role-playing game known for its challenging gameplay and atmospheric world, where players must navigate treacherous environments and battle terrifying foes.",
        image: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg"
    },
    {
        nom: "The Witcher 3: Wild Hunt",
        genre: "Action RPG",
        description: "The Witcher 3: Wild Hunt is an action role-playing game set in a dark fantasy world, where players control Geralt of Rivia, a monster hunter searching for his missing adopted daughter.",
        image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheWitcher3WildHuntCompleteEdition_enGB_image1600w.jpg"
    },
    {
        nom: "Cyberpunk 2077",
        genre: "Action RPG",
        description: "Cyberpunk 2077 is an action role-playing game set in the dystopian Night City, where players assume the role of V, a mercenary outlaw navigating the seedy underbelly of the city in search of immortality.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg"
    },
    {
        nom: "The Elder Scrolls V: Skyrim",
        genre: "Action RPG",
        description: "The Elder Scrolls V: Skyrim is an action role-playing game set in the fantasy world of Tamriel, where players can explore the vast open world, complete quests, and customize their character's skills and abilities.",
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/skyrim_logo.jpg"
    },
    {
        nom: "Grounded",
        genre: "Survival",
        description: "Grounded is a survival game developed by Obsidian Entertainment, where players are shrunk to the size of insects and must navigate a backyard filled with dangers and mysteries, gathering resources, building shelters, and battling hostile creatures.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61d1AMEC1B1ujSDO2834VWnafAzHYTbGY5YKcaHl69w&s"
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

genres = [];
genres.push('All')

for (let i = 0; i < games.length; i++) {
    createCard(i);
    if (!genres.includes(games[i].genre)) {
        genres.push(games[i].genre)
    }
}


header.appendChild(document.createElement('div'));
let divGenres = header.querySelector('div');
divGenres.classList.add('div-genre');
divGenres = header.querySelector('.div-genre');

function createButton() {
    for (let i = 0; i < 2; i++) {
        divGenres.appendChild(document.createElement('button'));
    }
    let button = document.querySelectorAll('button');
    button[0].classList.add('filter-button');
    button[1].classList.add('hide-button');
    
}

createButton();
const filterButton = divGenres.querySelector('.filter-button');
const hideButton = divGenres.querySelector('.hide-button');
filterButton.innerText = "Filter";
hideButton.innerText = "Hide";
hideButton.style.display = "none";

divGenres.appendChild(document.createElement('nav'));
const nav = divGenres.querySelector('nav');

let genreSelected = [];

for (let i = 0; i < genres.length; i++) {
    nav.appendChild(document.createElement('input'));
    let input = nav.querySelectorAll('input');
    input[i].setAttribute('type', 'checkbox');
    input[i].value = genres[i];
    nav.appendChild(document.createElement('label'));
    input[i].addEventListener('change', (e) => {
        console.log('change');
        if (e.target.checked) {
            console.log(genreSelected);
            if (!genreSelected.includes('All')) {
                if (!genreSelected.includes(input[i].value)) {
                    if (input[i].value === "All") {
                        genreSelected = [];
                    }
                    genreSelected.push(input[i].value);
                    console.log(genreSelected);   
                }
            }
            
        }else {
            if(genreSelected.includes(input[i].value)) {
                let genre = genreSelected.indexOf(input[i].value);
                console.log(genre + ' selected');
                genreSelected.splice(genre, 1);
                console.log(genreSelected);
                  
            }
        }
    })
    
}

let input = nav.querySelectorAll('input');
let label = nav.querySelectorAll('label');
function checkboxDisplay(display) {
    for (let i = 0; i < genres.length; i++) {
        label[i].textContent = genres[i];
        label[i].style.marginRight = "15px";
        input[i].style.display = display;
        label[i].style.display = display;
    }
}
checkboxDisplay("none");


filterButton.addEventListener('click', () => {
    filterButton.style.display = 'none';
    hideButton.style.display = 'block';
    checkboxDisplay("block");
})

hideButton.addEventListener('click', () => {
    hideButton.style.display = 'none';
    filterButton.style.display = 'block';
    checkboxDisplay("none");
})

let filterGames = [];

for (let i = 0; i < games.length; i++) {
    const game = games[i];
    for (let j = 0; j < genreSelected.length; j++) {
        const selected = genresSelected[j];
        if (game.genre.includes(selected)) {
            filterGames.push(game);
            console.log(filterGames);
        }
        
    }
    
    
    
}

    





