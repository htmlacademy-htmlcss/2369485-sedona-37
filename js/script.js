const openButtonModal = document.querySelector(".booking-hotel");
const closeButtonModal = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

openButtonModal.onclick = function(){
  modal.classList.remove('modal-container-close');
  modalContainer.classList.remove('hidden');
};

closeButtonModal.onclick = function(){
  modal.classList.add('modal-container-close');
  modalContainer.classList.add('hidden');
};
