const APIURL = `https://api.github.com/users/`;
const ul = document.getElementById("profileUl");
const userContainer = document.querySelector(".user-info");

const input = document.getElementById("search");

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const inputData = input.value;
    console.log("Enter key pressed. Input data:", inputData);
    generateProfile(inputData);
  }
});

async function generateProfile(inputData) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.get(APIURL + inputData, config);
    const data = response.data;
    console.log(data);

    if (data) {
      const avatarUrl = data.avatar_url;
      let img = document.createElement("img");
      img.src = avatarUrl;
      avatar.innerHTML = "";
      avatar.appendChild(img);

      let profileName = data.name;
      console.log(profileName);
      const nameContainer = document.getElementById("userName");
      if (profileName) {
        nameContainer.textContent = profileName;
      } else {
        nameContainer.textContent = 'User Name Not Available';
      }

      const bioContainer = document.getElementById('bioContainer')
      let profileBio = data.bio
      console.log(profileBio)
      if(profileBio) {
        bioContainer.textContent = profileBio
      } else {
        bioContainer.textContent = 'User Bio Not Available'
      }

      const statsContainer = document.getElementById('statsContainer')
      const followersContainer = document.getElementById('followers')
      const followingContainer = document.getElementById('following')
      const reposContainer = document.getElementById('repos')

      let profileFollowers = data.followers
      let profileFollowing = data.following
      let profileRepos = data.public_repos
      if(profileFollowers && profileFollowing && profileRepos){
        followersContainer.textContent = profileFollowers + ' Followers'
        followingContainer.textContent = profileFollowing + ' Following'
        if (profileRepos) {
          reposContainer.textContent = profileRepos + ' Repos'
          
        }

        // statsContainer.textContent = profileRepos + ' Repos'
      } else {
        statsContainer.textContent = 'User Info Not Available'
      }


      return avatar;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
