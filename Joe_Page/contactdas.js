"use strict";

let messages = [];

window.onload = getData;
function getData() {
  let myData = localStorage.getItem("myMessages");
  messages = JSON.parse(myData);
  fn();
}
function saveChange() {
  localStorage.setItem("myMessages", JSON.stringify(messages));
}
function fn() {
  const numF = document.getElementById("num");
  const form = document.forms.myForm;
  const nameF = form.fName;
  const emailF = form.email;
  const sbjctF = form.sbjct;
  const msgF = form.msg;
  const prev = form.prev;
  const next = form.next;
  const dlt = form.delete;

  prev.addEventListener("click", prevDis);
  next.addEventListener("click", nextDis);
  dlt.addEventListener("click", deletemsg);
  let current = messages.length - 1;
  displaymsg();
  function displaymsg() {
    numF.value = "I have " + messages.length + " messages right now";
    nameF.value = messages[current].name;
    emailF.value = messages[current].email;
    sbjctF.value = messages[current].sbjct;
    msgF.value = messages[current].msg;
  }
  function prevDis() {
    if (current == 0) {
      current = messages.length - 1;
    } else {
      current--;
    }
    displaymsg();
  }
  function nextDis() {
    if (current == messages.length - 1) {
      current = 0;
    } else {
      current++;
    }
    displaymsg();
  }
  function deletemsg() {
    if (messages.length == 0) return;
    else {
      messages.splice(current, 1);
      if (messages.length == 0) {
        nameF.value = "";
        emailF.value = "";
        sbjctF.value = "";
        msgF.value = "";
        alert("no more messages");
      } else {
        prevDis();
      }
      saveChange();
      numF.value = "I have" + messages.length + " message right now";
    }
  }
}
