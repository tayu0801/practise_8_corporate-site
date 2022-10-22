function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function openModalInquire(elm) {
  const openInquireBtn = document.getElementById('openInquireBtn');

  const modal = document.getElementById('modal');
  openInquireBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

function closeModalInquire(elm) {
  const closeInquireBtn = document.getElementById('closeInquireBtn');
  closeInquireBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__container-inner') && e.target.id !== 'openInquireBtn') {
      modal.style.display = 'none';
    }
  });
}

function openMenu(elm) {
  const menu = document.getElementById('menu');
  const scrollTop = document.getElementById('scrollTopButton');
  menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    const nav = document.getElementById('drawerNav');
    nav.classList.toggle('in');
  });
}

scrollTop('scrollTopButton');
openModalInquire('openInquireBtn');
closeModalInquire('closeInquireBtn');
openMenu('menu');
