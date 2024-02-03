/*
 * This file contains utility functions for retrieving data from the DOM.
 */

const getSearchQuery = () => {
    const url = window.location.search;
    const params = new URLSearchParams(url);
    return params.get("q");
};

export { getSearchQuery };
