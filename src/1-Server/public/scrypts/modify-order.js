function add(id) {
  const input = document.querySelector(`[data-prodID="${id}"]`);
  input.value++;
}

function removeOne(id) {
  const input = document.querySelector(`[data-prodID="${id}"]`);
  input.value--;
}
