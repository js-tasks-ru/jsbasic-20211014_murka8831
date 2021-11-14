/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.tHead = document.createElement('thead');
    this.bodyTable = document.createElement('tbody');
    this.bodyHead();
    this.render(rows);
    this.removeButtons();
  }

  removeButtons() {
    let buttons = this.elem.querySelectorAll('button');
    for (let button of buttons) {
      button.addEventListener('click', () => {
        let thButton = button.closest('tr');
        thButton.remove();
      })
    }
  }

  bodyHead() {
    let headBody = ['Имя', "Возраст", "Зарплата", "Город", ""];
    let tr = document.createElement('tr');
    
    for (let item of headBody) {
      let th = document.createElement('th');
      th.innerHTML = item;
      tr.append(th);
    }

    this.tHead.append(tr);
    this.elem.append(this.tHead);
  }

  render(rows) {
    for (let row of rows) {
      let tr = document.createElement('tr');
      
      for (let key in row) {
        let td = document.createElement('td');
        td.innerHTML = row[key];
        tr.append(td);
      }

      let td = document.createElement('td');
      td.innerHTML = '<button>X';
      tr.append(td);
      this.bodyTable.append(tr);
    }
    this.elem.append(this.bodyTable);
  }
}



