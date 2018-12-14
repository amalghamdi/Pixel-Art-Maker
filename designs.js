// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var table = document.getElementById('pixelCanvas');
  
  // Create grid:
  table.innerHTML ='';
  var tBody = document.createElement('tBody');
  for (var x = 0; x < height; x++) {
    var tr = document.createElement('tr');
    for (var y = 0; y < width; y++) {
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(''));
      tr.appendChild(td);
    }
  tBody.appendChild(tr);
  }
  table.appendChild(tBody); 
}

// Changing pixel color:

$('body').on('click','td', function() {
  var color = document.getElementById('colorPicker').value;
  $(this).css('background-color', color);
});
  
