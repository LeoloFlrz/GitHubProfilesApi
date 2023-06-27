const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");

main.addEventListener("keydown", (evento) => {
  if (evento.keycode === 13) {
    let inputData = document.getElementById("search").value;
    return inputData;
  }
  return inputData;
});

async function generateProfile(inputData) {
  try {
    const res = await fetch(APIURL+inputData);
    console.log(res);

    const data = await res.json();

    main.innerHTML = data;
  } catch (error) {
    console.log(error);
  }
}

generateProfile();
