"use strict";
let courses = [];
window.onload = getData;
function getData() {
  let myData = localStorage.getItem("mycourse");
  courses = JSON.parse(myData); //assign ka2
  console.log("here", courses);
  fn();

  //////////let messages = [];
  // Parse the serialized data back into an aray of objects
  ////////////////messages = JSON.parse(localStorage.getItem("myMessages")) || [];////////////

  /**
   * the function to be executed on page load
   * @returns{undefined}
   */
  function fn() {
    ///////////////////////////////////////////////
    //////////////////////////////////////////////start of course
    let courseparentdiv = document.querySelector(".course.second");
    document.getElementById("sortcourse").addEventListener("click", sortByDate);
    document
      .getElementById("sortdes")
      .addEventListener("click", sortDescending);
    // sort button and event listner
    displayCourses();
    //displays the courses on pageload starts here
    /**
     * to display the courses on course page
     * @returns{undefined}
     */
    function displayCourses() {
      const coursehtml = document.createElement("div");
      coursehtml.setAttribute("class", "courseinnerdiv");
      courseparentdiv.appendChild(coursehtml);
      let crows = Math.ceil(courses.length / 2);
      let ccounter = 1;
      let cindexcounter = 0;
      for (let i = 0; i < crows; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row mt-3 mt-1 pt-2 here");
        coursehtml.appendChild(row);
        for (let i = 0; i < 2; i++) {
          if (ccounter > courses.length) {
            break;
          }
          const col = document.createElement("div");
          col.setAttribute("class", "col-md-6  p-2 here2");
          row.appendChild(col);
          const namediv = document.createElement("div");
          namediv.setAttribute("class", "courseName");
          col.appendChild(namediv); //appending namediv to the box
          const link = document.createElement("a");
          link.setAttribute("href", courses[cindexcounter].clink);
          link.setAttribute("data-toggle", "tooltip");
          link.setAttribute("title", "Click for more information");
          link.innerHTML = courses[cindexcounter].cname; //inserting the name
          namediv.appendChild(link); //appending link to namediv

          const infodiv = document.createElement("div");
          infodiv.setAttribute("class", "courseInfo");
          col.appendChild(infodiv); //appending infodiv to the box
          infodiv.innerHTML = courses[cindexcounter].cinfo; //inserting cinfo
          const fai = document.createElement("i");
          fai.setAttribute("class", "fas fa-lightbulb");
          infodiv.prepend(fai); //appending font awsome before the information

          const datediv = document.createElement("div");
          datediv.setAttribute("class", "courseDate");
          datediv.innerHTML = courses[cindexcounter].cdate;
          col.appendChild(datediv);
          ccounter++;
          cindexcounter++;
        }
      }
    }
    //display ends here

    /**
     * sorting courses by date
     *@returns{undefined}
     */
    function sortByDate() {
      courses.sort((aa, bb) => {
        return new Date(aa.cdate) - new Date(bb.cdate);
      });

      courseparentdiv.removeChild(courseparentdiv.lastChild);
      //deletes all the display to rearrange them on date
      displayCourses(); //display the sorted array
    }
    function sortDescending() {
      courses.sort((aa, bb) => {
        return new Date(bb.cdate) - new Date(aa.cdate);
      });

      courseparentdiv.removeChild(courseparentdiv.lastChild);
      //deletes all the display to rearrange them on date
      displayCourses(); //display the sorted array
    }
  }
}
