/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/dpancho')
  .then(response => {
    console.log(response);
    const newCard = cardCreator(response.data);
    entry.appendChild(newCard);
  })
  .catch(error => {
    console.log("No data returned", error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const entry = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell' ];

followersArray.forEach(item => {
  axios
  .get(`https://api.github.com/users/${item}`)
  .then(response => {
    console.log(response);
    const newCard = cardCreator(response.data);
    entry.appendChild(newCard);
  })
  .catch(error => {
    console.log("No data returned", error);
  });
});


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(user){
  const 
    cardContainer = document.createElement('div'),
    cardImg = document.createElement('img'),
    textDiv = document.createElement('div'),
    userName = document.createElement('h3'),
    userLogin = document.createElement('p'),
    userLocation = document.createElement('p'),
    profile = document.createElement('p'),
    profileLinks = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

    //append things
    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(textDiv);
    textDiv.appendChild(userName);
    textDiv.appendChild(userLogin);
    textDiv.appendChild(userLocation);
    textDiv.appendChild(profile);
    textDiv.appendChild(profileLinks);
    textDiv.appendChild(followers);
    textDiv.appendChild(following);
    textDiv.appendChild(bio);

    //classes
    cardContainer.classList.add('card');
    textDiv.classList.add('card-info');
    userName.classList.add('username');
    userLogin.classList.add('gitHubHandle');

    //fill the info
    cardImg.src = user.avatar_url;
    userName.textContent = user.name;
    userLogin.textContent = `GitHub: ${user.login}`;
    userLocation.textContent = `Location : ${user.location}`;
    profile.textContent = `Profile: `;
    profileLinks.href = user.html_url;
    profileLinks.textContent = user.html_url;
    followers.textContent = `Followers: ${user.followers}`;
    following.textContent = `Following: ${user.following}`;
    bio.textContent = `Bio : ${user.bio}`;
    
  return cardContainer;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
