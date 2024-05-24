{
    const background = document.createElement('div');
    background.classList.add('sidebar-bg');
    background.addEventListener('click', remove);
    
    const sidebar = document.querySelector('#header-sidebar');
    const sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
    sidebarOpenBtn.addEventListener('click', () => {
        document.body.append(background);
        setTimeout(() => {
            sidebar.classList.add('open');
            background.classList.add('open');
        }, 300);
    });

    const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
    sidebarCloseBtn.addEventListener('click', remove);

    function remove() {
        sidebar.classList.remove('open');
        background.remove();
    }
}