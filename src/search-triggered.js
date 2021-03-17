export const searchTriggered = function (fn) {
    const searchButton = document.getElementById('search-button');
    const searchText = document.getElementById('search-text');

    searchButton.addEventListener('click', () => {
        if (!searchText.value.length) {
            return;
        }
        fn(searchText.value);
    });

    searchText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (!searchText.value.length) {
                return;
            }
            fn(searchText.value);
        }
    });
};