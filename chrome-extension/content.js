// Helper functions
const createPanel = (search_query) => {
    const panel = document.createElement("section");
    panel.id = "dot-ai-section";
    panel.innerHTML = `<p>Dot AI: ${search_query}</p>`;
    return panel;
};

const getSearchQuery = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get("q");
};

// Get search query from search bar
const search_query = getSearchQuery();

// Inject dot-ai div into page
const panel = createPanel(search_query);
const div = document.getElementById("rcnt");
div.appendChild(panel);
