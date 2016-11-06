    var div = document.getElementById('seriea');
    var prevName;

    div.onclick = function(e) {
      if (e.target.tagName != 'TH') return;
      
      else if (e.target == prevName) {
          
          prevName = "";
          sortTable(e.target.cellIndex, e.target.getAttribute('data-type'), "DESC");
          return;
      } 

      prevName = e.target;   
      sortTable(e.target.cellIndex, e.target.getAttribute('data-type'), "ASC");
    };

    function sortTable(colNum, type, direction) {

      var table = document.getElementById('statsTable');
      
      var tbody = table.getElementsByTagName('tbody')[0];
      
      var rowsArray = [].slice.call(tbody.rows);

      var compare;
      switch (direction) {
        case "DESC": switch (type) {
                           case "number":
                             compare = function(rowA, rowB) {
                               return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
                             };
                           break;
                           case "string":
                             compare = function(rowA, rowB) {
                               return rowA.cells[colNum].children[0].children[0].nextSibling.innerHTML < rowB.cells[colNum].children[0].children[0].nextSibling.innerHTML ? 1 : -1;
                             };
                           break;
                         }
        break;
        case "ASC": switch (type) {
                           case "number":
                             compare = function(rowA, rowB) {
                               return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
                             };
                           break;
                           case "string":
                             compare = function(rowA, rowB) {
                               return rowA.cells[colNum].children[0].children[0].nextSibling.innerHTML > rowB.cells[colNum].children[0].children[0].nextSibling.innerHTML ? 1 : -1;
                             };
                           break;
                         }
        break;
      }

      rowsArray.sort(compare);

      table.removeChild(tbody);

      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      table.appendChild(tbody);

    }