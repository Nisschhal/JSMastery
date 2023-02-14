'use strict';

const modalEl = document.querySelector('.modal');
const overyLayEl = document.querySelector('.overlay');
const showBtns = document.querySelectorAll('.show-modal');
const closeBtns = document.querySelector('.close-modal');

console.log(showBtns);

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', openModal);
}
closeBtns.addEventListener('click', closeModal);
overyLayEl.addEventListener('click', closeModal);

function openModal() {
  modalEl.classList.remove('hidden');
  overyLayEl.classList.remove('hidden');
}

function closeModal() {
  modalEl.classList.add('hidden');
  overyLayEl.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalEl.classList.contains('hidden')) {
      closeModal();
    }
  }
});
