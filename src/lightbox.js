export const showLightBox = (fullUrl) => {
    const lightBoxDiv = document.getElementById('lightbox');
    lightBoxDiv.className = 'shown'; 
    const body = document.getElementsByTagName('BODY')[0];
    body.className = 'no-scroll';
    const innerLightBox = document.getElementById('lightbox-inner');
    innerLightBox.innerHTML = `<img src=${fullUrl}/><input type='text' value=${fullUrl}/>`;
}; 


export const listenForLightBoxClosed = () => {
    const lightBoxDiv = document.getElementById('lightbox');
    const innerLightBox = document.getElementById('lightbox-inner');
    const body = document.getElementsByTagName('BODY')[0];
    body.className = 'no-scroll';
    lightBoxDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = e.target;
        if(target === lightBoxDiv) {
            lightBoxDiv.className = '';
            body.className = '';
            innerLightBox.innerHTML = '';
        };
    });
};