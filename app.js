function addNewWEField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("Placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row", 3);
    newNode.setAttribute("Placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}


//generating cv
function generateCV(){
//  console.log("generating cv");

let nameField = document.getElementById("nameField").value;
let nameT1 = document.getElementById("nameT1");
nameT1.innerHTML = nameField;

//direct
document.getElementById("nameT2").innerHTML = nameField;

//contact
document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;


//address
document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

//fb
document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

//insta
document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

//linked
document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

//objective

document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

//we

let wes = document.getElementsByClassName("weField");
let str = "";
for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;

//aq

let aqs = document.getElementsByClassName("eqField");

let str1 = "";
for (let e of aqs){
    str1 += `<li> ${e.value} </li>`;

}
document.getElementById("aqT").innerHTML = str1;

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";

}

//print cv
function printCV(){
    window.print();
}