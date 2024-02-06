/*
 * This file contains utility functions for retrieving data from the DOM.
 */

const get_search_query = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get("q");
};

export { get_search_query };
