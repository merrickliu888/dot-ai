const { get_search_query, get_context } = require("./utils/web-scrape.js");
const { create_panel } = require("./utils/create-html.js");
const { get_answer } = require("./utils/api-calls.js");

// Retrieve search query and context
const query = get_search_query();
const context = get_context();
console.log(context);

// Inject dot-ai div into page
const panel = create_panel(query, "Loading...");
const div = document.getElementById("rhs");
if (div === null) {
    document.getElementById("rcnt").appendChild(panel);
} else {
    div.prepend(panel);
}

get_answer("http://localhost:8000/predict", {
    query,
    context,
})
    .then((response) => {
        content = response.text;
        console.log(content);
        document.getElementById("content").innerText = content;
    })
    .catch((error) => {
        console.error(error.message);
    });
