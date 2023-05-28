function closeModal() {
  const modalContainer = document.querySelector(".modal--container");
  modalContainer.className = "modal--container hidden";
}

function openModal() {
  const modalContainer = document.querySelector(".modal--container");
  modalContainer.className = "modal--container";
}
