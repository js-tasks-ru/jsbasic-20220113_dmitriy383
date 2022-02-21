function highlight(table) {

  let rows = table.querySelectorAll('tr');

  for (let row of rows) {
    for (let cell of row.cells) {
      if (cell.hasAttribute('data-available')) {
        if (cell.dataset.available === 'true') {
          row.classList.add('available');
        } else if (cell.dataset.available === "false") {
          row.classList.add('unavailable');
        }
      } else {
        row.setAttribute('hidden', 'true');
      }
    }
  }
  for (let row of rows) {
    for (let cell of row.cells) {
      if (cell.text.Content === 'm') {
        row.classList.add('male');
      } else {
        row.classList.add('female');
      }
    }
  }
  for (let row of rows) {
    for (let cell of row.cells) {
      if (cell.text.Content < 18) {
        row.style = "text-decoration: line-through";
      }
    }
  }
}