let BtnEnd = document.querySelector(".btnend");

BtnEnd.addEventListener("click", () => {
  document.querySelector(".front").style.display = "none";
  document.querySelector(".back").style.display = "block";
});

document.querySelector(".goBackTOFront").addEventListener("click", () => {
  document.querySelector(".front").style.display = "block";
  document.querySelector(".back").style.display = "none";
});
