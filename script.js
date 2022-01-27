const content = document.querySelector("#content");
const foreground = document.querySelector("#foreground");
const background = document.querySelector("#background");
const size = document.querySelector("#range");
const canvas = document.querySelector("#qr-code");
const generate = document.querySelector(".primary-btn");
const btns = document.querySelectorAll(".outline-btn");
const circles = document.querySelectorAll('.circle')

circles[0].style.backgroundColor = foreground.value
circles[1].style.backgroundColor = background.value

foreground.addEventListener('change', ()=>{
  circles[0].style.backgroundColor = foreground.value
})

background.addEventListener('change', ()=>{
  circles[1].style.backgroundColor = background.value
})

generate.addEventListener("click", () => {
  canvas.innerHTML = "";
  new QRious({
    element: canvas,
    value: content.value,
    background: background.value,
    foreground: foreground.value,
    size: size.value,
    padding: 50,
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `QR Code.${btn.innerText.toLowerCase()}`;
    link.href = canvas.toDataURL();
    link.click();
  });
});

/* 
const bgcolor = document.querySelector("#bg-color");
const dotcolor = document.querySelector("#dot-color");
const img = document.querySelector("#img");
const start = document.querySelector("#start");
const canvas = document.querySelector("#qrcode");
const download = document.querySelector("#download");

start.addEventListener("click", () => {
    canvas.innerHTML = "";
    new QRious({
      element: canvas,
      value: content.value,
      background: bgcolor.value,
      foreground: dotcolor.value,
      size: 600,
      padding:50,
    })
});

download.addEventListener('click', ()=>{
    const link = document.createElement("a");
    link.download = `QR Code.png`;
    link.href = document.querySelector("#qrcode").toDataURL();
    link.click();
}) */
