import { getSearchResults } from './get-search-results';

/* export const handleSearch = async (searchTerm) => {
    const div = document.getElementById('search-results');
    div.innerHTML = "<img src='loader.gif'/>";
    const response = await getSearchResults(searchTerm);
    div.innerHTML = '';
    response.map((urlSet) => {
        const a = document.createElement('a');
        a.href="#";
        const img = document.createElement('img');
        img.src = urlSet.thumb;
        a.appendChild(img);
        div.appendChild(a);
        return a;
    });
}; */

export const handleSearch = async (searchTerm) => {
    const div = document.getElementById('search-results');
    div.innerHTML = "<img src='loader.gif'/>";
    const response = await getSearchResults(searchTerm);
    const html = response.reduce((currentString, urls) => {
        return currentString + `<a href=${urls.full}><img src=${urls.thumb}/></a>`;
    }, '');
    div.innerHTML = html;
}; 

export const resultClicked = (fn) => {
    const div = document.getElementById('search-results');
    div.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'IMG' ) {
            return fn(e.target.parentElement.href);
        };
    });
};
