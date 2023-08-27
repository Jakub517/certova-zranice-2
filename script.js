let itemsEaten = 0;
let isVomiting = false;

function feedDevil() {
  const itemInput = document.getElementById("itemInput");
  const logList = document.getElementById("logList");
  const vomitContainer = document.getElementById("vomitContainer");

  if (!isVomiting) {
    if (itemInput.value !== "") {
      itemsEaten++;
      const newItem = document.createElement("li");
      newItem.textContent = itemInput.value;
      logList.appendChild(newItem);

      if (itemsEaten === 5) {
        itemsEaten = 0;
        isVomiting = true;
        setTimeout(() => {
          vomitContainer.textContent = "";
          vomitContainer.classList.remove("vomiting");
          isVomiting = false;
          logList.innerHTML = ""; // Maže seznam snězených věcí
        }, 5000);
        vomitContainer.textContent = "Čert zvrací...";
        vomitContainer.classList.add("vomiting");
      }

      itemInput.value = ""; // Vymaže obsah pole pro vstup
    }
  }
}

function toggleMenu() {
  const gameMenu = document.getElementById("gameMenu");
  const menuButton = document.querySelector(".menu-button");
  gameMenu.style.left = gameMenu.style.left === "0px" ? "-250px" : "0px";
  menuButton.classList.toggle("open");
}
