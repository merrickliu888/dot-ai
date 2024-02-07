/*
 *This file contains the function to create the HTML for the extension on search page.
 */

const create_panel = (content) => {
    const panel = document.createElement("section");
    panel.id = "dot-ai-section";
    panel.innerHTML = `<div id="content-container"><p id="content">${content}</p></div>`;
    return panel;
};

export { create_panel };
