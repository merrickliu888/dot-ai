/*
 * This file contains utility functions for retrieving data from the DOM.
 */

const get_search_query = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get("q");
};

const get_context = () => {
    let context = "";

    const sr = document.getElementsByClassName("MjjYud");
    const sr_2 = document.getElementsByClassName("ULSxyf");
    const sr_3 = document.getElementsByClassName("hlcw0c");
    for (let i = 0; i < sr.length; i++) {
        context += sr[i].innerText + "\n";
    }
    for (let i = 0; i < sr_2.length; i++) {
        context += sr_2[i].innerText + "\n";
    }
    for (let i = 0; i < sr_3.length; i++) {
        context += sr_3[i].innerText + "\n";
    }

    return context;
};

export { get_search_query, get_context };
