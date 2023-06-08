const APIURL = 'https://api.github.com/users/'
const main = document.getElementById("main");

generateProfile();

async function generateProfile() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch(APIURL, config)

    const data = await res.json()

    main.innerHTML = data.profile;
}

main.addEventListener("keydown", (evento) =>{
    if (evento.keycode === 13) {
        let inputData = document.getElementById("search").value;
        
    }
})