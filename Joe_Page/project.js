"use strict";
let projects = [];

window.onload = getpData;
function getpData() {
  // let myData = localStorage.getItem("mycourse");
  // //console.log(JSON.parse(myData));
  // courses = JSON.parse(myData); //assign ka2
  // console.log("here", courses);

  let mypData = localStorage.getItem("myproject");
  //console.log(JSON.parse(mypData));
  projects = JSON.parse(mypData); //assign kas2
  console.log("here", projects);
  fn();
}
/**
 * the function to be executed on page load
 * @returns{undefined}
 */
function fn() {
  ///////////////////////////////////////////////
  //////////////////////////////////////////////start of course
  let courseparentdiv = document.querySelector("#prodiv");
  document
    .getElementById("sortprojectdate")
    .addEventListener("click", sortByDate);
  document
    .getElementById("sortprojecthard")
    .addEventListener("click", sortByHardness);
  // sort button and event listner
  displayprojects();
  //displays the projects on pageload starts here
  /**
   * to display the projects on course page
   * @returns{undefined}
   */
  function displayprojects() {
    console.log("here1");
    const coursehtml = document.createElement("div");
    coursehtml.setAttribute("class", "projectinnerdiv");
    courseparentdiv.appendChild(coursehtml);
    let crows = Math.ceil(projects.length / 2);
    let ccounter = 1;
    let cindexcounter = 0;
    for (let i = 0; i < crows; i++) {
      console.log("here2");
      const row = document.createElement("div");
      row.setAttribute("class", "row mt-3 mt-1 pt-2 here");
      row.setAttribute("id", "projectparentdiv");
      coursehtml.appendChild(row);
      for (let i = 0; i < 2; i++) {
        if (ccounter > projects.length) {
          break;
        }
        const col = document.createElement("div");
        col.setAttribute("class", "col-md-6  p-2 here2");
        row.appendChild(col);
        const namediv = document.createElement("h4");
        namediv.setAttribute("class", "courseName");
        col.appendChild(namediv); //appending namediv to the box
        const link = document.createElement("a");
        link.setAttribute("href", projects[cindexcounter].plink);
        link.setAttribute("data-toggle", "tooltip");
        link.setAttribute("title", "Click for more information");
        link.innerHTML = projects[cindexcounter].pname; //inserting the name
        namediv.appendChild(link); //appending link to namediv

        const infodiv = document.createElement("div");
        infodiv.setAttribute("class", "courseInfo");
        col.appendChild(infodiv); //appending infodiv to the box
        infodiv.innerHTML = projects[cindexcounter].pinfo; //inserting pinfo
        const fai = document.createElement("i");
        fai.setAttribute("class", "fas fa-lightbulb");
        infodiv.prepend(fai); //appending font awsome before the information

        const datediv = document.createElement("div");
        datediv.setAttribute("class", "courseDate");
        datediv.innerHTML = projects[cindexcounter].pdate;
        col.appendChild(datediv);

        const harddiv = document.createElement("div");
        harddiv.setAttribute("class", "courseHard");
        harddiv.innerHTML = "hardness:" + projects[cindexcounter].phardness;
        col.appendChild(harddiv);

        ccounter++;
        cindexcounter++;
      }
    }
  }
  //display ends here

  /**
   * sorting projects by date
   *@returns{undefined}
   */
  function sortByDate() {
    projects.sort((aa, bb) => {
      return new Date(aa.pdate) - new Date(bb.pdate);
    });

    courseparentdiv.removeChild(courseparentdiv.lastChild);
    //deletes all the display to rearrange them on date
    displayprojects(); //display the sorted array
  }

  function sortByHardness() {
    projects.sort((aa, bb) => {
      return aa.phardness - bb.phardness;
    });

    courseparentdiv.removeChild(courseparentdiv.lastChild);
    //deletes all the display to rearrange them on date
    displayprojects(); //display the sorted array
  }

  //////////////////////////
  //////////////////////////////end of course
}
