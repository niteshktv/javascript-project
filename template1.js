// personal info
document.getElementById('FName').innerText = localStorage.getItem("FName");
document.getElementById('LName').innerText = " " + localStorage.getItem("LName");
document.getElementById("email").innerHTML = `<p id="email"><i class="fa-solid fa-envelope"></i>${localStorage.getItem("email")}</p>`
document.getElementById("address").innerHTML = `<p id="address"><i class="fa-solid fa-location-dot"></i>${localStorage.getItem("address")}</p>`;
document.getElementById("github").innerHTML = `<p id="github"><i class="fa-brands fa-github"></i><a href="https://github.com/${localStorage.getItem("github")}" target="_blank">${localStorage.getItem("github")}</a></p>`;
document.getElementById("linkedIn").innerHTML = `<p id="linkedIn"><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/${localStorage.getItem("linkedIn")}" target="_blank">${localStorage.getItem("linkedIn")}</a></p>`;
document.getElementById("phone").innerHTML = `<p id="phone"><i class="fa-solid fa-phone-volume"></i>${localStorage.getItem("phone")}</p>`;
document.getElementById("website").innerHTML = `<p id="website"><i class="fa-solid fa-globe"></i><a href="${localStorage.getItem("website")}" target="_blank">${localStorage.getItem("website")}</a.</p>`;

//about me
document.getElementById("aboutme").innerHTML = `<p>${localStorage.getItem("aboutme")}</p>`;
localStorage.getItem("data");

//education
let eduData = JSON.parse(localStorage.getItem('educationArr'));
let tempEdu = document.getElementById("education");
for (let i = 0; i < eduData.length; i++) {
    let eduDiv = document.createElement('div');
    eduDiv.className = 'eduDiv';
    let templateEdu = `<div class="eduDiv">
    <h5 id="deg" class="deg">${eduData[i].degree}</h5>
    <p>${eduData[i].sName}</p>
    <p>Field of Study(s): ${eduData[i].fields}</p>
    <p>Grades: ${eduData[i].grades}</p>
    <p>Passing Year: ${eduData[i].passingYear}</p>
</div>`;

    eduDiv.insertAdjacentHTML('beforeend', templateEdu);
    tempEdu.appendChild(eduDiv);

}


//experience
let experienceData = JSON.parse(localStorage.getItem('experienceArr'));
let tempExperience = document.getElementById('experience');

for (let i = 0; i < experienceData.length; i++) {
    let experienceDiv = document.createElement('div');
    experienceDiv.className = 'exp-div';
    let experienceTemplate = `
    <div class="exp-div">
    <p>${experienceData[i].cName}</p>
    <p>${experienceData[i].sDate} - ${experienceData[i].tDate}</p>
    </div>
    `;
    experienceDiv.insertAdjacentHTML('beforeend',experienceTemplate);
    tempExperience.appendChild(experienceDiv);
}


//certificate
let certificateData = JSON.parse(localStorage.getItem('certificateArr'));
let tempCertificate = document.getElementById('certificate');

for (let i = 0; i < certificateData.length; i++) {
    let certificateDiv = document.createElement('div');
    certificateDiv.className = 'certificateDiv';
    let certificateTemplate = `
                        <div class="certificateDiv">
                            <h5>${certificateData[i].CField}</h5>
                            <p>${certificateData[i].CAuth}</p>
                            <p>${certificateData[i].CDate}</p>
                        </div>
    `;
    certificateDiv.insertAdjacentHTML('beforeend',certificateTemplate);
    tempCertificate.appendChild(certificateDiv);
}


//   printbtn
  function print_button(){
    document.getElementById("print-btn").style.visibility="hidden";
    document.getElementById("container").style.width="100%";
    window.print();
    document.getElementById("print-btn").style.visibility="visible";
    document.getElementById("container").style.width="50%";
    document.getElementById("container").style.border="2px solid black";   
  }
//   window.print();