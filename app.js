/*******************************************************************************
*                         JavaScript Form Validation                           *
********************************************************************************/
function validateForm() {
  var x = document.gorms["myForm"]["fname"].value;
  if (x === null || x === "") {
    alert("Name must be filled out");
    return false;
  }
}
