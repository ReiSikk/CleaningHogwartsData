"use strict";
const url = "https://petlatkea.dk/2021/hogwarts/students.json";

window.addEventListener("DOMContentLoaded", start);

let firstname, middlename, lastname;

const allStudents = [];

function start() {
  console.log("start");
  loadJSON();
}

function loadJSON() {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      //when loaded prepare objects
      prepareData(jsonData);
    });
}

function prepareData(jsonData) {
  jsonData.forEach((student) => {
    //for each object read the properties
    let fullname = student.fullname;
    let gender = student.gender;
    let house = student.house;
    /*  console.log(studentName);
     console.log(gender);
     console.log(house); */

    // clean extra spaces
    fullname = fullname.replace(/\s+/g, " ").trim();
    /* console.log(fullname); */

    //converting them into variables we want

    //first name
    let firstname = fullname.substring(fullname[0], fullname.indexOf(" "));
    firstname = firstname[0].toUpperCase() + firstname.substring(1).toLowerCase();
    console.log("firstname is : ", firstname);

    //middlename(s)
    let middlename = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
    middlename = middlename[0].toUpperCase() + middlename.substring(1).toLowerCase();
    console.log("middlename(s) is: ", middlename);

    //last name
    let lastname = fullname.substring(fullname.lastIndexOf(" ") + 1);
    lastname = lastname[0].toUpperCase() + lastname.substring(1).toLowerCase();
    console.log("last name is: ", lastname);
  });

  // NEW OBJECT PROTOTYPE

  /*   const Student = {
    firstname: "",
    middlename: "",
    lastname: "",
    nickname: "",
    gender: "",
    house: "",
    image: "",
  }; */
}
