/**********création du contenue de la modal **********/
async function createModal() {
  const arrayWorks = await getWorks();
  const btnModifier = document.querySelector(".btn__modifier");
  const displayModal = document.querySelector(".modal__container");
  const modalGarage = document.querySelector(".modal__garage");
  btnModifier.addEventListener("click", () => {
    displayModal.style.display = "flex";
  });
  arrayWorks.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const trashDiv = document.createElement("div");
    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash-can");
    img.src = work.imageUrl;
    modalGarage.appendChild(figure);
    trashDiv.appendChild(trash);
    figure.appendChild(trashDiv);
    figure.appendChild(img);
  });
}
createModal();

/********** ouverture et fermeture de la modal au click *********/
function closeModal() {
  const btnClose = document.querySelector(".fa-xmark");
  const modalContainer = document.querySelector(".modal__container");
  btnClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}
closeModal();
/********** suppréssion de projets dans la modal **********/
