const state = {
  parrotCount: 1,
  parrotWidth: 25,
};
const parrotPen = document.getElementById("parrot");
parrotPen.innerHTML += `<image src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" class="parrotPicture" width="${state.parrotWidth}"/>`;
const parrots = document.getElementsByClassName("parrotPicture");
const parrotCountContainer = document.getElementById("parrotContainer");

const addParrot = (event) => {
  state.parrotCount += 1;
  parrotCountContainer.textContent = `Parrot Count: ${state.parrotCount}`;
  parrotPen.innerHTML += `<image src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" class="parrotPicture" width="${state.parrotWidth}"/>`;

  if (state.parrotCount % 2 === 0) {
    state.parrotWidth *= 1.08;

    for (var i = 0; i < parrots.length; i++) {
      parrots[i].setAttribute("width", state.parrotWidth);
    }
  }
};

const resetParrotCount = (event) => {
  state.parrotWidth = 25;
  for (var i = 0; i < parrots.length; i++) {
    parrots[i].setAttribute("width", state.parrotWidth);
  }

  parrotPen.innerHTML = `<image src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" class="parrotPicture" width="${state.parrotWidth}"/>`;
  state.parrotCount = 0;
  parrotCountContainer.textContent = `Parrot Count: ${state.parrotCount}`;
};

const registerEventHandlers = (event) => {
  const parrotButton = document.querySelector("#parrot");
  parrotButton.addEventListener("click", addParrot);
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", resetParrotCount);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
