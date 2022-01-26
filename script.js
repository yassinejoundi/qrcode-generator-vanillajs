const title = document.querySelector("#title");
const content = document.querySelector("#content");
const bgcolor = document.querySelector("#bg-color");
const dotcolor = document.querySelector("#dot-color");
const img = document.querySelector("#img");
const start = document.querySelector("#start");
const canvas = document.querySelector("#qrcode");
const download = document.querySelector("#download");

start.addEventListener("click", () => {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
      element: qrcodeContainer,
      value: content.value,
      background: bgcolor.value,
      foreground: dotcolor.value,
      size: 600,
      padding:50,
    })
});

download.addEventListener('click', ()=>{
    const link = document.createElement("a");
    link.download = `${title.value != '' ? title.value : 'QR Code'}.png`;
    link.href = document.querySelector("#qrcode").toDataURL();
    link.click();
})
