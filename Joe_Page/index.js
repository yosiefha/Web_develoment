"use strict";
const projects = [];
const messages = [];
const courses = [];

const p2 = {
  pname: "Lyberinth Project",
  pinfo: "Polymorphism, inheritance and interface using java language and javaFX as GUI",
  pid: "pr",
  pdate: "2018-04-30",  
  phardness: "4",
};
const p3 = {
  pname: "Personal Web Page",
  pinfo: "html, css and manipulating the code from js",
  pid: "wap",
  pdate: "2019-05-20", 
  phardness: "4",
};

const p4 = {
  pname: "Adrress Book Project ",
  pinfo: "Full stack developement using Flask, Javascript,HTML,CSS.",
  pid: "library",
  pdate: "2021-05-15", 
  phardness: "5",
};
projects.push(p2, p3, p4);

const c1 = {
  cname: " Modeling  and Computational Engineering (python)- MOD510",
  cinfo: "This course introduces numerical methods and modeling \
          techniques used to solve practical problems. \
          The course provides insights and skills in \
          computational thinking and programming techniques",
  cid: "pSolving",
  cdate: "2091-12-20",
  
};
const c2 = {
  cname: "Introduction to Data Science (Python)-DAT540",
  cinfo: "The course provides a knowledge and experience in data engineering tasks \
   and  accustoms students with data science project lifecycle.",
  cid: "pp",
  cdate: "2019-11-20",
  
};
const c3 = {
  cname: "Object Oriented Programming (java)- IN1010",
  cinfo: "- have overview of some basic data structures (especially linked lists) and the most important operations on them \
          - advanced object-oriented mechanism such as sub-classes, polymorphism and interface.",
  cid: "oopjava",
  cdate: "2018-05-20",
  
};
const c4 = {
  cname: "Data Structure (java)-IN2010",
  cinfo: "have an overview of data structures like lists, trees, graphs, hash tables, \
          and priority queues, and control their use to achieve effective programs",
  cid: "ds",
  cdate: "2018-12-06",
  
};
const c5 = {
  cname: "Probability and Statistics 2- STA500",
  cinfo: "Basic issues in probability. Presentation of a number \
          of commonly used probability distributions. Short introduction to \
          extreme-value statistic. Estimation, in particular the maximum likelihood principle \
          and confidence intervals in various situations. Brief introduction to Bayesian statistics. \
          Introduction to stochastic processes, in particular Poisson processes and Markov processes.\
           Theory and areas for applications of the various methods will be covered.",
  cid: "dm",
  cdate: "2019-1-25",
  
};
const c6 = {
  cname: "Machine Learning - ELE520",
  cinfo: "The course focuses on the mathematical foundations of methods \
        for learning the underlying structures from data and to train models that\
        can make predictions when presented with new data. Such predictions can \
        typically involve the discrimination between different categories of data,\
        or pattern classification, which will be the main focus of this course",
  cid: "oopjs",
  cdate: "2020-05-05",
  
};
const c7 = {
  cname: "Data Mining and Deep Learning- DAT550",
  cinfo: "The purpose of this course is for students to gain knowledge \
          and practical experience of data mining and deep learning \
          techniques The course will prepare the students with a deep \
          knowledge of technologies and be able to prepare large-scale data \
          for data mining (pre-processing), feature extraction, dimensionality \
          reduction and use a number of data mining and deep learning methods \
          for classification, regression and clustering tasks that can help \
          to extract actionable knowledge. The course will provide the opportunity\
           for students to learn state-of-the-art data mining and deep learning \
           algorithms and tools. The students will get hands-on experience to try \
            these tools on real data through lab assignments and a project",
  cid: "wap",
  cdate: "2020-05-18",
  
};
const c8 = {
  cname: " Database Systems -DAT220",
  cinfo: " This course introduces students to the fundamentals of \
           database systems. The course includes basic database theory, \
           data models, data modeling, relational database, SQL and transactions. \
           The course teaches how to apply a database system and how to design a good database",
  cid: "qa",
  cdate: "2020-05-12",
 
};
const c9 = {
  cname: " Information retrieval and text mining -DAT640",
  cinfo: "The course offers an introduction to techniques and \
          methods for processing, mining, and searching in massive text\
          collections. The course considers a broad variety of applications\
          and provides an opportunity for hands-on experimentation with\
          state-of-the-art algorithms using existing software tools and data collections",
  cid: "sel",
  cdate: "2021-11-30",
  
};

const c10 = {
  cname: " Statistical learning -STA530",
  cinfo: "Introduction to statistical learning, multiple linear regression, classification, resampling \
       methods, model selection, regularization, non-linearity, tree-based methods, cluster analysis. ",
  cid: "sel",
  cdate: "2021-12-8",
  
};
const c11 = {
  cname: " Statistical modeling and simulation -STA510",
  cinfo: "This course provides a foundation for problem solving in technology, science \
          and economy using statistical modeling, simulation and analysis. ",
  cid: "sel",
  cdate: "2021-12-8",
  
};

courses.push(c2, c3, c4, c5, c6, c7, c8, c9, c1,c10,c11);
window.onload = fn;

function fn() {
  localStorage.setItem("mycourse", JSON.stringify(courses)); //ka1
  localStorage.setItem("myproject", JSON.stringify(projects)); //ka1
  localStorage.setItem("myMessages", JSON.stringify(messages)); //ka1
}

