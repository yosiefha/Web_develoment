window.onload = fn;
function fn() {
  const myform = document.forms.myForm;
  const userF = myform.user;
  const passF = myform.pass;
  const btn = myform.log;

  btn.addEventListener("click", validate);

  function validate() {
    if (userF.value == "luwam" && passF.value === "123") {
      window.open("onlyMePage.html");
    }
    alert("login credential not correct");
  }
}
