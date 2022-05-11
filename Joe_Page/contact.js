window.onload = fn;

function fn() {
  let messages = [];
  // Parse the serialized data back into an aray of objects
  messages = JSON.parse(localStorage.getItem("myMessages")) || [];
  function SaveDataToLocalStorage(data) {
    // Push the new data (whether it be an object or anything else) onto the array
    messages.push(data);
    // Alert the array value
    console.log(messages); // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("myMessages", JSON.stringify(messages));
  }
  const myform = document.forms.myForm;
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", sendEmail);

  function sendEmail() {
    const name = myform.fname.value;
    const email = myform.email.value;
    const sbjct = myform.sbjct.value;
    const msg = myform.msg.value;
    const data = { name: name, email: email, sbjct: sbjct, msg: msg };
    SaveDataToLocalStorage(data);
  }
}
