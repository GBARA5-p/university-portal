/* =========================
   UNIVERSITY PORTAL JS
========================= */

document.addEventListener("DOMContentLoaded", function(){

    console.log("University Portal Loaded Successfully");

    highlightActiveLink();

    animateCards();

    displayCurrentDate();

});

/* =========================
   ACTIVE NAVIGATION
========================= */

function highlightActiveLink(){

    let links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {

        if(link.href === window.location.href){

            link.style.background = "#00a000";
            link.style.fontWeight = "bold";

        }

    });

}

/* =========================
   WELCOME MESSAGE
========================= */

function welcomeStudent(){

    alert(
        "Welcome GBARA WEWELOBARI PEACEFUL to the University Portal"
    );

}

/* =========================
   DASHBOARD CARD ANIMATION
========================= */

function animateCards(){

    let cards = document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        setTimeout(()=>{

            card.style.transition = "0.6s";
            card.style.opacity = "1";

        },index * 200);

    });

}

/* =========================
   PRINT RECEIPT
========================= */

function printReceipt(){

    window.print();

}

/* =========================
   COURSE SEARCH
========================= */

function searchCourses(){

    let input =
    document.getElementById("courseSearch");

    let filter =
    input.value.toUpperCase();

    let table =
    document.getElementById("courseTable");

    let tr =
    table.getElementsByTagName("tr");

    for(let i=1;i<tr.length;i++){

        let td =
        tr[i].getElementsByTagName("td")[0];

        if(td){

            let txt =
            td.textContent || td.innerText;

            if(txt.toUpperCase().indexOf(filter)>-1){

                tr[i].style.display="";

            }

            else{

                tr[i].style.display="none";

            }

        }

    }

}

/* =========================
   CURRENT DATE
========================= */

function displayCurrentDate(){

    let dateBox =
    document.getElementById("currentDate");

    if(dateBox){

        let today =
        new Date();

        dateBox.innerHTML =
        today.toDateString();

    }

}

/* =========================
   GPA CALCULATOR
========================= */

function calculateGPA(){

    let totalUnits =
    parseFloat(
    document.getElementById("units").value);

    let totalPoints =
    parseFloat(
    document.getElementById("points").value);

    if(isNaN(totalUnits) || isNaN(totalPoints)){

        alert("Enter valid values");

        return;

    }

    let gpa =
    (totalPoints / totalUnits)
    .toFixed(2);

    document.getElementById("gpaResult")
    .innerHTML =
    "Calculated GPA: " + gpa;

}

/* =========================
   SHOW NOTIFICATION
========================= */

function showNotification(message){

    let notice =
    document.createElement("div");

    notice.innerText = message;

    notice.style.position = "fixed";
    notice.style.top = "20px";
    notice.style.right = "20px";
    notice.style.background = "#006400";
    notice.style.color = "white";
    notice.style.padding = "15px";
    notice.style.borderRadius = "10px";
    notice.style.zIndex = "9999";

    document.body.appendChild(notice);

    setTimeout(()=>{

        notice.remove();

    },3000);

}

/* =========================
   ACADEMIC CALENDAR BUTTON
========================= */

function openCalendar(){

    showNotification(
        "Academic Calendar Loaded"
    );

}

/* =========================
   LIBRARY BUTTON
========================= */

function accessLibrary(){

    showNotification(
        "Welcome to Digital Library"
    );

}

/* =========================
   RESULTS BUTTON
========================= */

function checkResults(){

    showNotification(
        "Results Successfully Loaded"
    );

}

/* =========================
   SCHOOL FEES BUTTON
========================= */

function feesStatus(){

    showNotification(
        "School Fees Payment Verified"
    );

}

/* =========================
   ABOUT PAGE BUTTON
========================= */

function developerInfo(){

    alert(
        "Developer: GBARA WEWELOBARI PEACEFUL"
    );

}