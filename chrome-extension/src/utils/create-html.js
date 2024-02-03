/*
 *This file contains the function to create the HTML for the extension on search page.
 */

const createPanel = (search_query) => {
    const panel = document.createElement("section");
    panel.id = "dot-ai-section";
    panel.innerHTML = `<p>Dot AI: ${search_query}</p>`;
    return panel;
};

export { createPanel };
