{
    const btn = document.querySelector('.show-more-btn');
    const pictureContainer = document.querySelector('.picture-container');
    const limit = 12;
    let page = 1;
    
    btn.addEventListener('click', async () => {
        const pictureUrls = await getPictureUrls(page, 12);
        page++;

        pictureUrls.forEach(url => {
            const picture = document.createElement('img');
            picture.src = url;
            
            const pictureWrap = document.createElement('div');
            pictureWrap.classList.add('picture-wrap');
            
            pictureWrap.appendChild(picture);
            pictureContainer.appendChild(pictureWrap);
        });
        
        const lastPictureWrap = pictureContainer.querySelector(`.picture-wrap:nth-last-child(${limit})`);
        lastPictureWrap.scrollIntoView({ behavior: 'smooth' });
    });
    
    async function getPictureUrls(page, limit) {
        const url = 'https://picsum.photos/v2/list';
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const list = await response.json();
        return list.map(item => item.download_url);
    }
}