"use strict";

let courses = [];
let projects = [];
window.onload = getData;
function getData() {
  let myData = localStorage.getItem("mycourse");
  courses = JSON.parse(myData);
  let myData2 = localStorage.getItem("myproject");
  projects = JSON.parse(myData2);
  console.log(projects);
  fn();
}

/**
 * @returns{undefined}
 */
function fn() {
  function SaveDataToLocalStorage() {
    localStorage.setItem("mycourse", JSON.stringify(courses));
    localStorage.setItem("myproject", JSON.stringify(projects));
  }
  // let toupdate = {};
  const ccreatebtn = document.getElementById("ccreate");
  const cdeletebtn = document.getElementById("cdelete");
  const cupdatebtn = document.getElementById("cupdate");
  const pro = document.getElementById("pro");
  const cor = document.getElementById("cor");
  ccreatebtn.addEventListener("click", displaycourseform);
  cdeletebtn.addEventListener("click", displaysearchdiv);
  cupdatebtn.addEventListener("click", displaysearchdiv);
  pro.addEventListener("click", setType);
  cor.addEventListener("click", setType);

  const formdiv = document.getElementById("cformdiv");
  const searchdiv = document.getElementById("cSearch");
  const myform = document.forms.myForm;
  const actionbtn = myform.action;
  const cnameF = myform.cName;
  const cdateF = myform.cDate;
  const clinkF = myform.cLink;
  const cinfoF = myform.cInfo;
  const chardF = myform.chard;
  const founddiv = myform.cfound;
  const typepc = document.getElementById("typeOf");

  /**
   * displays the serah box and the form
   * @returns{undefined}
   */
  function displaysearchdiv() {
    //formdiv.style.display = "block";
    searchdiv.removeAttribute("disabled");
    searchdiv.value = "";
    founddiv.value = "no match";
    searchdiv.addEventListener("keyup", lookforcourse);

    if (this == cupdatebtn) {
      actionbtn.innerHTML = "update";
    }
    if (this == cdeletebtn) {
      actionbtn.innerHTML = "delete";
    }
  }

  function setType() {
    if (this.innerHTML == "Project") {
      typepc.value = "Project";
      chardF.removeAttribute("disabled");
      actionbtn.innerHTML = "";
      cnameF.value = "";
      cdateF.value = "";
      clinkF.value = "";
      cinfoF.value = "";
      chardF.value = "";
      founddiv.value = "";
      searchdiv.value = "";
    } else {
      typepc.value = "Course";
      chardF.setAttribute("disabled", "");
      actionbtn.innerHTML = "";
      cnameF.value = "";
      cdateF.value = "";
      clinkF.value = "";
      cinfoF.value = "";
      chardF.value = "";
      founddiv.value = "";
      searchdiv.value = "";
    }
  }
  /**
   * displays the form for courses inf
   * @returns {undefined}
   */
  function displaycourseform() {
    searchdiv.setAttribute("disabled", "");
    founddiv.value = "";
    searchdiv.value = "";
    //  formdiv.style.display = "block";
    if (this == ccreatebtn) {
      actionbtn.innerHTML = "add";
      cnameF.value = "";
      cdateF.value = "";
      clinkF.value = "";
      cinfoF.value = "";
      chardF.value = "";
    }
  }

  /**
   * continuously checking for a mach of course in search input
   * @returns{undefined}
   */
  function lookforcourse() {
    let inp = searchdiv.value.toLowerCase();
    if (typepc.value == "Course") {
      for (let cc of courses) {
        if (cc.cname.toLowerCase().startsWith(inp)) {
          founddiv.value = cc.cid;
          cnameF.value = cc.cname;
          clinkF.value = cc.clink;
          cinfoF.value = cc.cinfo;
          cdateF.value = cc.cdate;
          return;
        }
      }
    } else {
      for (let cc of projects) {
        if (cc.pname.toLowerCase().startsWith(inp)) {
          founddiv.value = cc.pid;
          cnameF.value = cc.pname;
          clinkF.value = cc.plink;
          cinfoF.value = cc.pinfo;
          cdateF.value = cc.pdate;
          chardF.value = cc.phardness;
          return;
        }
      }
    }
    founddiv.value = "no match";
    cnameF.value = "";
    clinkF.value = "";
    cinfoF.value = "";
    cdateF.value = "";
  }

  actionbtn.addEventListener("click", actionFun);
  /**performs the action on click to deleter,create or update course
   * @returns{undefined}
   */
  function actionFun() {
    //console.log(courses, "heree");
    const cname = cnameF.value;
    const cdate = cdateF.value;
    const clink = clinkF.value;
    const cinfo = cinfoF.value;
    const chard = chardF.value;
    if (this.innerHTML == "") {
      alert("choose action");
    } else if (typepc.value == "") {
      alert("choose project or course");
    } else if (this.innerHTML == "add") {
      if (typepc.value == "Course") {
        const newc = {
          cname: cname,
          cinfo: cinfo,
          cid: cname,
          cdate: cdate,
          clink: clink,
        };
        courses.push(newc);
      } else {
        const newp = {
          pname: cname,
          pinfo: cinfo,
          pid: cname,
          pdate: cdate,
          plink: clink,
          phardness: chard,
        };
        projects.push(newp);
      }
      SaveDataToLocalStorage();
    } else if (this.innerHTML == "update") {
      let id = founddiv.value;
      if (id == "no match") {
        alert("Enter vaid information for search input");
      } else {
        if (typepc.value == "Course") {
          const newc = {
            cname: cname,
            cinfo: cinfo,
            cid: cname,
            cdate: cdate,
            clink: clink,
          };
          for (let i = 0; i < courses.length; i++) {
            if (courses[i].cid == id) {
              courses.splice(i, 1, newc);
              SaveDataToLocalStorage();
              alert("update was succesful");
            }
          }
        } else {
          const newp = {
            pname: cname,
            pinfo: cinfo,
            pid: cname,
            pdate: cdate,
            plink: clink,
            phardness: chard,
          };
          console.log(projects);
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].pid == id) {
              projects.splice(i, 1, newp);
              SaveDataToLocalStorage();
              console.log(projects);
              alert("update was succesful");
            }
          }
        }
      }
    } else if (this.innerHTML == "delete") {
      if (founddiv.value == "no match") {
        alert("Enter vaid information for search input");
      } else {
        if (typepc.value == "Course") {
          let id = founddiv.value;
          for (let i = 0; i < courses.length; i++) {
            if (courses[i].cid == id) {
              courses.splice(i, 1);
              SaveDataToLocalStorage();
              alert("delete was succesful");
            }
          }
        } else {
          let id = founddiv.value;
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].pid == id) {
              projects.splice(i, 1);
              SaveDataToLocalStorage();
              alert("delete was succesful");
            }
          }
        }
      }
    }
  }
}
