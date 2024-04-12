let pix = document.getElementById('pix').innerText
let tooltip = document.getElementById('myTooltip')
const copyPix = async () => {
  try {
    await navigator.clipboard.writeText(pix)
    tooltip.innerHTML = 'Copiado ' + pix
  } catch (err) {
    console.error('Falha ao copiar: ', err)
  }
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar PIX";
}