const APIURL = `https://api.github.com/users/`;
const avatarContainer = document.querySelector(".avatar");
const ul = document.getElementById("profileUl");

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

    if(data) {
        const avatarUrl = data.avatar_url.value
        let img = document.createElement('img')
        avatar.src = avatarUrl
        document.getElementById('avatar').appendChild(img)
        return avatarContainer
    } else {
        return null
    }
    // Aquí puedes manipular la respuesta y mostrar la información en tu página
  } catch (error) {
    console.log(error);
  }
}
