{
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY < 500) {
            scrollUpBtn.classList.remove('active');
        } else {
            scrollUpBtn.classList.add('active');
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}