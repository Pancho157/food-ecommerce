const statusLight = document.querySelector(".status");
const statusText = document.querySelector(".status--text");

const shopOpenHour = 20;
const shopClosingHour = 1;

function renderShopStatusOnStatusTag(status) {
  if (status == "open") {
    statusText.innerHTML = "Abierto";
    statusLight.style.backgroundColor = "green";
  } else if (status == "closing soon") {
    statusText.innerHTML = "Cierra pronto";
    statusLight.style.backgroundColor = "orange";
  } else {
    statusText.innerHTML = "Cerrado";
    statusLight.style.backgroundColor = "red";
  }
}

function verifyAndRenderShopStatus() {
  var date = new Date(),
    day = date.getDay(),
    hours = date.getHours();

  renderShopStatusOnStatusTag("closed");

  //if open, replaces closed tag
  if (day != 1) {
    if (shopOpenHour <= hours <= 00 || 00 <= hours <= shopClosingHour) {
      if (shopClosingHour - hours <= 1) {
        renderShopStatusOnStatusTag("closing soon");
      } else {
        renderShopStatusOnStatusTag("open");
      }
    }
  }
}

verifyAndRenderShopStatus();
setInterval(verifyAndRenderShopStatus, 900000);
