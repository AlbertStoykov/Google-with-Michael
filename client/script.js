const form = document.getElementById("search-form")

form.addEventListener("submit", sendSearch)

//Send the search query
function sendSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({
        q: e.target.searchquery.value,
    })

    const url = `http://localhost:3000/search?${params.toString()}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (e.submitter.name === "search") {
            console.log(data)
        } else {
            window.location.href = data['organic_results'][0]['link']
        }
    })
    .catch(console.warn)
}