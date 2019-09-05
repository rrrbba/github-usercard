/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/rrrbba')
  .then(response => {
    console.log(response);

    cards.appendChild(followerCard(response.data))
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['mdegregori1', 'LenWinkler', 'crsullivan', 'umekow', 'roywakumelojr', 'Chards79', 'sydneyblom', 'markpkng', 'beautytechy', 'BaoPham92', 'abdirahmanfarah'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    console.log(response);

    cards.appendChild(followerCard(response.data))
  })
  .catch(error =>
    console.log("The data was not returned", error)
    )
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

function followerCard(data){
  //create elements
  const
  newCard = document.createElement('div'),
  newImage = document.createElement('img'),
  cardInfo = document.createElement('div'),
  title = document.createElement('h3'),
  userUser = document.createElement('p'),
  userLocation = document.createElement('p'),
  userProfile = document.createElement('p'),
  webAddress = document.createElement('a'),
  userFollower = document.createElement('p'),
  userFollowing = document.createElement('p'),
  userBio = document.createElement('p');

  //create classes
  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  title.classList.add('name');
  userUser.classList.add('username');

  //create content
  newImage.src = `${data.avatar_url}`;
  title.textContent = `${data.name}`;
  userUser.textContent = `${data.login}`;
  userLocation.textContent = `Location: ${data.location}`;
  webAddress.href = `${data.html_url}`;
  userFollower.textContent = `Followers: ${data.followers}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = `Bio: ${data.bio}`;
  userProfile.textContent = "Profile:";

  //add structure
  newCard.appendChild(newImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(userUser);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(webAddress);
  cardInfo.appendChild(userFollower);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return newCard

};


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
