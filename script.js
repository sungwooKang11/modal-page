const modalOpen = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modalClose");
const modal = document.querySelector(".modal");

const openModal = () => {
    modal.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);