const APIURL = `https://api.github.com/users/${inputData}`;
const main = document.getElementById("main");

main.addEventListener("keydown", (evento) => {
  if (evento.keycode === 13) {
    let inputData = document.getElementById("search").value;
    return inputData;
  }
  return inputData;
});

async function generateProfile() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(APIURL, config)
    .then((response) => response.json())
    .then((data) => console.log(data));
  const data = await res.json();

  main.innerHTML = data.profile;
}

main.addEventListener("keydown", (evento) => {
  if (evento.keycode === 13) {
    let inputData = document.getElementById("search").value;
    return inputData;
  }
});
