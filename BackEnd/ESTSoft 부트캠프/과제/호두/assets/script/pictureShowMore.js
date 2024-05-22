const btn = document.querySelector('.show-more-btn');
const pictureContainer = document.querySelector('.picture-container');

btn.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        const picture = document.createElement('img');
        picture.src = `assets/img/img_${i + 1}.png`;
        picture.classList.add('image');
        
        const pictureWrap = document.createElement('div');
        pictureWrap.classList.add('picture-wrap');
        
        pictureWrap.appendChild(picture);
        pictureContainer.appendChild(pictureWrap);
    }
    
    let picture = pictureContainer.querySelector('.picture-wrap:nth-last-child(6)');
    picture.scrollIntoView({ behavior: 'smooth' });
});