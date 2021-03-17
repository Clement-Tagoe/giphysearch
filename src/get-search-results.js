export const getSearchResults = async function (text) {
    const term = text;
    const apiUrlKey = 'https://api.giphy.com/v1/gifs/search?api_key=hWVXe92JZbiOsarl8hNdsO9z9GhjZYiw&q=';
    const result = await fetch(`${apiUrlKey}${term}`);
    const searchResults = await result.json(); 
    const urlArray = searchResults.data.map((item) => {
        return {
            thumb: item.images.downsized_still.url,
            full: item.images.original.url
        }
    });
    return urlArray;
};
