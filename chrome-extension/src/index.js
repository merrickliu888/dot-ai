const { get_search_query } = require("./utils/web-scrape.js");
const { create_panel } = require("./utils/create-html.js");
const { get_answer } = require("./utils/api-calls.js");

// Get search query from search bar
const search_query = get_search_query();

// Inject dot-ai div into page
const panel = create_panel(search_query, "Loading...");
const div = document.getElementById("rhs");
if (div === null) {
    document.getElementById("rcnt").appendChild(panel);
} else {
    div.prepend(panel);
}

get_answer("http://localhost:8000/predict", {
    query: search_query,
})
    .then((response) => {
        content = response.text;
        console.log(content);
        document.getElementById("content").innerText = content;
    })
    .catch((error) => {
        console.error(error.message);
    });
