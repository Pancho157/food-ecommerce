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
  const tuesday = 2;

  renderShopStatusOnStatusTag("closed");

  //if open, replaces closed tag
  if (day != tuesday && (shopOpenHour <= hours || hours <= shopClosingHour)) {
    if (hours <= shopClosingHour) {
      renderShopStatusOnStatusTag("closing soon");
    } else {
      renderShopStatusOnStatusTag("open");
    }
  }
}

verifyAndRenderShopStatus();
setInterval(verifyAndRenderShopStatus, 900000);
