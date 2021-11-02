function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let diagonal = table.rows[i].cells[i]
    diagonal.setAttribute('style', 'background:red');
  }
}
