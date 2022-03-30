const form = document.getElementById("search-form")

form.addEventListener("submit", sendSearch)

//Send the search query
function sendSearch(e) {
    e.preventDefault();
    if (e.target.searchquery.value.trim() && e.target.searchquery.value.trim() !== undefined) {
        const params = new URLSearchParams({
            q: e.target.searchquery.value.trim(),
        })
    
        const url = `http://localhost:3000/search?${params.toString()}`

        if (e.submitter.name === "search") {
            window.location.href = url;
        } else {
            fetch(url)
            .then(res => res.json())
            .then(data => {window.location.href = data['organic_results'][0]['link'];})
            .catch(console.warn)
        }
    }
}