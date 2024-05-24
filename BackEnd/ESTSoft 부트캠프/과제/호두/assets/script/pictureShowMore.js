{
    const btn = document.querySelector('.show-more-btn');
    const pictureContainer = document.querySelector('.picture-container');
    const limit = 12;
    let page = 1;
    
    btn.addEventListener('click', async () => {
        const pictureInfos = await (async () => {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            return await response.json();
        })();
        page++;

        pictureInfos.forEach(pictureInfo => {
            const picture = document.createElement('img');
            picture.src = pictureInfo.download_url;
            
            const pictureWrap = document.createElement('div');
            pictureWrap.classList.add('picture-wrap');
            
            pictureWrap.appendChild(picture);
            pictureContainer.appendChild(pictureWrap);
        });
        
        const lastPictureWrap = pictureContainer.querySelector(`.picture-wrap:nth-last-child(${limit})`);
        lastPictureWrap.scrollIntoView({ behavior: 'smooth' });
    });
}