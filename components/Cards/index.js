// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    response.data.articles.javascript.forEach(element => {
      cardContainer.append(article(element));
    });

    response.data.articles.bootstrap.forEach(element => {
      cardContainer.append(article(element));
    });

    response.data.articles.technology.forEach(element => {
      cardContainer.append(article(element));
    });

    response.data.articles.jquery.forEach(element => {
      cardContainer.append(article(element));
    });

    response.data.articles.node.forEach(element => {
      cardContainer.append(article(element));
    });
  })
  .catch(error => {
    console.log("Nothing to see here", error);
  });

function article(data) {
  console.log(data);

  const newArticle = document.createElement("div");
  headline = document.createElement("div");
  author = document.createElement("div");
  imgDiv = document.createElement("div");
  img = document.createElement("img");
  authorsName = document.createElement("span");

  newArticle.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgDiv.classList.add("img-container");

  newArticle.append(headline);
  newArticle.append(author);
  author.append(imgDiv);
  imgDiv.append(img);
  author.append(authorsName);

  headline.textContent = data.headline;
  img.src = data.authorPhoto;
  authorsName.innerText = data.authorName;

  return newArticle;
}
