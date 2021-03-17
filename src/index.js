import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';


import { searchTriggered } from './search-triggered';
import { handleSearch, resultClicked  } from './search-results';
import { showLightBox, listenForLightBoxClosed } from './lightbox';

searchTriggered(handleSearch);
resultClicked(showLightBox);
listenForLightBoxClosed();

/*  const makeRequest = async function () {
    const result = await fetch('https://api.giphy.com/v1/gifs/search?api_key=hWVXe92JZbiOsarl8hNdsO9z9GhjZYiw&q=dalek');
    const searchResult = await result.json();
    console.log(searchResult);
};

makeRequest(); */

/* const result = fetch('https://api.giphy.com/v1/gifs/search?api_key=hWVXe92JZbiOsarl8hNdsO9z9GhjZYiw&q=dalek')
result.then((result) => result.json()).then((searchResults) => console.log(searchResults)) */