function setTrafficLight() {
  let trafficLight = document.querySelectorAll(".trafficLight");
  let color = ["green", "yellow", "red"];
  let number = 2;
  return function () {
    trafficLight[number].style.background = "black";
    number = number == 2 ? 0 : number + 1;
    trafficLight[number].style.background = color[number];
  };
}
const color = setTrafficLight();
document.querySelectorAll(".trafficLight").forEach((elem) => {
  elem.addEventListener("click", color);
});
