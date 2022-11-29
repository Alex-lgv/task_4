const a1 = document.querySelector("#a1");
a1.addEventListener("click", function (event) {
  event.preventDefault();
  const b1 = prompt("Введите текст для изменения");
  this.textContent = b1;
});
