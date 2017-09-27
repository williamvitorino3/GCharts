function ver() {
  var checkbox = document.getElementsByTagName('INPUT');

  for (var i = 0; i < checkbox.length; i++)
  {
    document.getElementById(checkbox[i].name).style.display = (
      checkbox[i].checked ?
      "block":
      "none"
    );
  }
}

function getElemento() {
  var elements = document.getElementsByTagName('OPTION');
  for (var i = 0; i < elements.length; i++) {
    if(elements[i].selected) {
      //document.getElementByClass("Chart").id = elements[i].value;
      console.log(elements[i].value);
    }
  }
}
