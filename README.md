<div align="center">
  <img src="https://github.com/merrickliu888/dot-ai/blob/main/chrome-extension/extension/icons/dot.png" alt="Dot" width="75">  
  <h1>Dot-AI<br> Enhancing Chrome with RAG and LLMs</h1>
  <br>
</div>

-   Developed a Chrome extension that integrates Retrieval-Augmented Generation and Large Language Models into the browser to enhance search.
-   Utilizes Google's search engine as the retrieval system, and the search results as the content.
-   Here is an example. The extension can be seen right below the image of the puppy, and to the left of the "About" section:
<img src="https://github.com/merrickliu888/dot-ai/blob/main/public/Example.png" alt="Example">

## Implementation
### Frontend

-   Used Chrome's extension API, Javascript, HTML, and CSS to integrate the extension into the search engine.

### Backend

-   Used Cohere's LLM/API in the backend to synthesize information retrieved from Google search results.
-   Used FastAPI to build a backend API.
