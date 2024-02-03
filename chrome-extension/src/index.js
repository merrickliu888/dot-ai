const { getSearchQuery } = require("./utils/retrieval.js");
const { createPanel } = require("./utils/create-html.js");

// Get search query from search bar
const search_query = getSearchQuery();

// Inject dot-ai div into page
const panel = createPanel(search_query);
const div = document.getElementById("rhs");
if (div === null) {
    document.getElementById("rcnt").appendChild(panel);
} else {
    div.prepend(panel);
}
