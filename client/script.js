const button = document.getElementById("search-button")

button.addEventListener("click", sendSearch)

//Send the search query
function sendSearch() {
    const params = new URLSearchParams ({
        q: "coffee",
    })

    const url = `http://localhost:3000/search?${params.toString()}`

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.warn)
}