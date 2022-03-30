const form = document.getElementById("search-form")
form.addEventListener("submit", sendSearch)

//Send the search query
function sendSearch(e) {
    e.preventDefault();
    if (e.target.searchquery.value.trim() && e.target.searchquery.value.trim() !== undefined) {
        const params = new URLSearchParams({
            q: e.target.searchquery.value.trim(),
        })
    
        const searchUrl = `http://localhost:3000/search?${params.toString()}`

        if (e.submitter.name === "search") {
            window.location.href = searchUrl;
        } else {
            const params = new URLSearchParams ({
                q: `${e.target.searchquery.value.trim()}`,
                location: "London",
                google_domain: "google.co.uk",
                safe: "active",
                engine: "google",
                api_key: api_key
            })
            const dataUrl = `http://localhost:3000/requestResults?${params.toString()}`
            fetch(dataUrl)
            .then(res => res.json())
            .then(data => {window.location.href = data['organic_results'][0]['link'];})
            .catch(console.warn)
        }
    }
}