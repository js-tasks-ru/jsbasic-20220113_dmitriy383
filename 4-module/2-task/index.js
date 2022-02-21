function makeDiagonalRed(table) {

  let elem = table.rows[0].cells[0];
  elem.style.backgroundColor = 'red';
  console.log(elem);

  let elem1 = table.rows[1].cells[1];
  elem1.style.backgroundColor = 'red';
  console.log(elem1);

  let elem2 = table.rows[2].cells[2];
  elem2.style.backgroundColor = 'red';
  console.log(elem2);

  let elem3 = table.rows[3].cells[3];
  elem3.style.backgroundColor = 'red';
  console.log(elem3);

  let elem4 = table.rows[4].cells[4];
  elem4.style.backgroundColor = 'red';
  console.log(elem4);
  
}
