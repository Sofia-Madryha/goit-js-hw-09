const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyStyle = document.querySelector('body');

btnStart.addEventListener('click', changeColor);

function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const id = setInterval(() => {
    btnStart.disabled = true
    console.log(bodyStyle.style.backgroundColor = getRandomHexColor());;
  }, 1000);

  btnStop.addEventListener("click", stopChangeColor);

  function stopChangeColor(){
    clearInterval(id);
    btnStart.disabled = false;
  }
}
