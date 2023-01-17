const btnEl = document.getElementById("btn")
const apiKey = /* Write your API key here */;
const jokeEl = document.getElementById("joke");
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Loading...";
        btnEl.disabled = true;
        btnEl.innerText = "Updating..."
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        jokeEl.innerText = "Try again later";

    }
}

btnEl.addEventListener("click", getJoke);




