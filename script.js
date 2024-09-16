const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup'); 
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
    wrapper.style.display = 'flex'; 
});

iconClose.addEventListener('click', () => {
    wrapper.style.display = 'none'; 
});
