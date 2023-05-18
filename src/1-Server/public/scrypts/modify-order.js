let elementCounter = document.querySelectorAll(".counter");

function add(index) {
  elementCounter[index].value++;
}

function removeOne(index) {
  elementCounter[index].value--;
}
