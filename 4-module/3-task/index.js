function highlight(table) {
  let allRows = table.getElementsByTagName("tr");
  let tHead = table.tHead.getElementsByTagName("td");

  for (let k = 0; k < tHead.length; k++) {
    let tdBody;
    if (tHead[k].innerHTML == 'Age') {
      for (let j = 1; j < table.rows.length; j++) {
        tdBody = allRows[j].getElementsByTagName("td");

        if (tdBody[k].innerHTML < 18) {
          allRows[j].setAttribute('style', 'text-decoration: line-through');
        } 
      }
    }
  
    if (tHead[k].innerHTML == 'Gender') {
      for (let n = 1; n < table.rows.length; n++) {
      tdBody = allRows[n].getElementsByTagName("td");
  
        if (tdBody[k].innerHTML == 'm') {
          allRows[n].classList.add('male');
        } else {
          allRows[n].classList.add('female');
          }
      }
    }
          
    if (tHead[k].innerHTML == 'Status') {
     
      for (let i = 1; i < table.rows.length; i++) {
        tdBody = allRows[i].getElementsByTagName("td");
    
        if (tdBody[k].dataset.available == 'true') {
          allRows[i].classList.add('available');
        } else if (tdBody[k].dataset.available == 'false') {
          allRows[i].classList.add('unavailable');
        } else { 
          allRows[i].hidden = true;
          }
        }
      }
    }
    
}
