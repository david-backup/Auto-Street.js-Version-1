/********** variables de la partie "modal" **********/
const modalContainer = document.querySelector(".modal__container");
const trash = document.querySelector(".fa-xmark");

/********** ouverture et fermeture de la modal au click *********/
const btnModifier = document.querySelector(".btn__modifier");
btnModifier.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});
function closeModal() {
  trash.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}
closeModal();

/**********création du contenue de la modal **********/
async function createModal() {
  const modalGarage = document.querySelector(".modal__garage");
  modalGarage.innerHTML = "";
  const arrayWorks = await getWorks();
  arrayWorks.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const trashDiv = document.createElement("div");
    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash-can");
    trash.id = work.id;
    img.src = work.imageUrl;
    modalGarage.appendChild(figure);
    trashDiv.appendChild(trash);
    figure.appendChild(trashDiv);
    figure.appendChild(img);
  });
  deleteProject(); /********** => => => ATTENTION !!! faire jouer la fonction deleteProjet
  une fois que la fonction projectModal ai fini d'être lu !!! ATTENTION **********/
}
createModal();

/********** suppréssion de projets dans la modal **********/
function deleteProject() {
  const trashIcons = document.querySelectorAll(".fa-trash-can");
  const deleteMessage = document.querySelector(".delete__message");
  trashIcons.forEach((trash) => {
    trash.addEventListener("click", async (e) => {
      const id = trash.id;
      const response = await fetch("http://localhost:3000/works/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        deleteMessage.textContent = "Votre projet été supprimé avec succès !";
        console.log("la suppression a réussi !");
        createModal();
        displayWorks();
      } else {
        console.error("Erreur lors de la suppression:", response.statusText);
      }
    });
  });
}
