function collectResultData() {
    const params = (new URL(document.location)).searchParams;
    const dataUrl = `http://localhost:3000/requestResults?${params.toString()}`
    fetch(dataUrl)
    .then(res => res.json())
    .then(populateSearchResults)
    .catch(console.warn)
}

function populateSearchResults(data) {
    console.log(data['organic_results']);
    data['organic_results'].forEach(result => {
        document.getElementById(`result${result.position}-heading`).innerHTML = result.title;
        document.getElementById(`result${result.position}-heading`).href = result.link;
        document.getElementById(`result${result.position}-desc`).innerHTML = result.snippet;
    });
}

collectResultData()