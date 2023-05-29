function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a, b) => {
    const aRowText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bRowText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    if (isNaN(aRowText)) {
      return aRowText > bRowText ? 1 * dirModifier : -1 * dirModifier;
    } else {
      return parseInt(aRowText) - parseInt(bRowText) > 0
        ? -1 * dirModifier
        : 1 * dirModifier;
    }
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  tBody.append(...sortedRows);

  table.querySelectorAll("th").forEach((th) => {
    th.classList.remove("th-sort-asc", "th-sort-desc");
  });

  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);

  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach((thSelected) => {
  thSelected.addEventListener("click", () => {
    const table = thSelected.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      thSelected.parentElement.children,
      thSelected
    );
    const currentIsAscending = thSelected.classList.contains("th-sort-asc");

    sortTableByColumn(table, headerIndex, !currentIsAscending);
  });
});
