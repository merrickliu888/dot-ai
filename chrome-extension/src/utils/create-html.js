/*
 *This file contains the function to create the HTML for the extension on search page.
 */

const create_panel = (search_query, content) => {
    const panel = document.createElement("section");
    panel.id = "dot-ai-section";
    panel.innerHTML = `<p id="query">Query: ${search_query}</p>
    <p id="content">${content}</p>`;
    return panel;
};

export { create_panel };
