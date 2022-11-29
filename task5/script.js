document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(input.value);
  document.querySelector("input").value = "";
  p.textContent = input.value = "";
});

const input = document.querySelector("input");
const p = document.querySelector("#duplicateField");

input.addEventListener("input", function () {
  p.textContent = input.value;
});
