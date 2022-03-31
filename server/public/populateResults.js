function collectResultData() {
    const params = (new URL(document.location)).searchParams;
    // API request to get search result data
    const dataUrl = `http://localhost:3000/requestResults?${params.toString()}`
    fetch(dataUrl)
    .then(res => res.json())
    // Use it to populate the webpage
    .then(populateSearchResults)
    .catch(console.warn)
}

function populateSearchResults(data) {
    // Time taken in seconds for search results and the amount of them
    document.getElementById("time-taken").innerHTML = `About ${data['search_information'].total_results.toLocaleString("en-US")} results (${data['search_information'].time_taken_displayed} seconds)` 
    
    // Normal Google search results with corrisponding links
    data['organic_results'].forEach(result => {
        document.getElementById(`result${result.position}-heading`).innerHTML = result.title;
        document.getElementById(`result${result.position}-heading`).href = result.link;
        document.getElementById(`result${result.position}-desc`).innerHTML = result.snippet;
    });
    
    // Hide the "People also ask" table unless it is included in the search results
    document.getElementById("question-table").style.display = "none"
    if (data['related_questions'] && data['related_questions'] !== undefined) {
        document.getElementById("question-table").style.display = "block";

        data['related_questions'].forEach(question => {
            const tableRow = document.createElement("tr");
            const tableHead = document.createElement("th")
            const tableRowLink = document.createElement("a");
            tableRow.scope = "row";
            const queryParams = new URLSearchParams({q:question.question})
            tableRowLink.href = `http://localhost:3000/search?${queryParams.toString()}`
            tableRowLink.innerHTML = question.question;
            tableHead.appendChild(tableRowLink)
            tableRow.appendChild(tableHead)
            document.getElementById("question-table-body").appendChild(tableRow)
        })
    }
}

//Run as soon as "http://localhost:3000/search?" is loaded
collectResultData()
