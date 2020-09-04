// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

function cardMaker(obj){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const aName = document.createElement('span')

    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    aName.textContent = obj.authorName

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgDiv.classList.add('img-container')
    img.classList.add('img')
    aName.classList.add('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgDiv)
    imgDiv.appendChild(img)
    author.appendChild(aName)

    // cardsContainer.appendChild(card)
card.addEventListener('click', event => {
    console.log(headline)
})
    // console.log(card)
    return card
}

// const cards = document.querySelector('cards')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
    // console.log(stuff.data.articles.bootstrap[0])
const cardsArray = stuff.data.articles.bootstrap

cardsArray.forEach(array => {
    const userCard = cardMaker(array)
    cardsContainer.appendChild(userCard)
    })
    .catch(err =>{
    debugger
})
})

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
    const cardsArray = stuff.data.articles.javascript

    cardsArray.forEach(array => {
    const userCard = cardMaker(array)
    cardsContainer.appendChild(userCard)
    })
    .catch(err =>{
    debugger
})
})

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
    const cardsArray = stuff.data.articles.technology

    cardsArray.forEach(array => {
    const userCard = cardMaker(array)
    cardsContainer.appendChild(userCard)
    })
    .catch(err =>{
    debugger
})
})


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
    const cardsArray = stuff.data.articles.jquery

    cardsArray.forEach(array => {
    const userCard = cardMaker(array)
    cardsContainer.appendChild(userCard)
    })
    .catch(err =>{
    debugger
})
})


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
    const cardsArray = stuff.data.articles.node

    cardsArray.forEach(array => {
    const userCard = cardMaker(array)
    cardsContainer.appendChild(userCard)
    })
    .catch(err =>{
    debugger
})
})