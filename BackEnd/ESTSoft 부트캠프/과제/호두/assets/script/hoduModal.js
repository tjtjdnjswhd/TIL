const modalBg = document.createElement('div');
modalBg.classList.add('modal-bg');

const modal = document.createElement('div');
modal.classList.add('modal');

const modalImg = document.createElement('img');
modalImg.src = 'assets/img/hodu-modal.png';
modalImg.alt = '고양이 얼굴';
modal.appendChild(modalImg);

const textWrap = document.createElement('div');

const modalStrong = document.createElement('strong');
modalStrong.textContent = 'Thank you!';

const modalSpan = document.createElement('span');
modalSpan.textContent = 'Lorem Ipsum is simply dummy text of the printing industry.';

textWrap.append(modalStrong, modalSpan);
modal.appendChild(textWrap);

const modalCloseBtn = document.createElement('button');
modalCloseBtn.classList.add('btn');
modalCloseBtn.textContent = 'OK! I Love HODU';
modalCloseBtn.addEventListener('click', removeModal);
modal.appendChild(modalCloseBtn);

modalBg.addEventListener('click', removeModal);

const modalBtn = document.querySelector('.hodu-modal-btn');
modalBtn.addEventListener('click', () => {
    document.body.appendChild(modalBg);
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.classList.add('active');
        modalBg.classList.add('active');
    }, 100);
});

function removeModal() {
    modal.classList.remove('active');
    modalBg.classList.remove('active');
    setTimeout(() => {
        modalBg.remove();
        modal.remove();
    }, 300);
}