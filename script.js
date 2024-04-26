'use strict';
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModalAll = document.querySelectorAll('.show-modal');
// close Close Func
const closeModal = function () {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
};
// open Modal Func
const openModal = function () {
  modalElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

// for (let index = 0; index < btnsShowModalAll.length; index++) {
//   btnsShowModalAll[index].addEventListener('click', openModal);
// }

btnsShowModalAll.forEach(element => {
  element.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlayElement.addEventListener('click', closeModal);

document.addEventListener('keydown', function (esc) {
  if (esc.key === 'Escape' && !modalElement.classList.contains('hidden')) {
    closeModal();
  }
});
