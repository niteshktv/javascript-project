//education add and clear button 
//add button
let row=1;
let education_btn = document.getElementById("add-education");
let table_body = document.getElementById("table-body");

education_btn.addEventListener("click", () => {
  let tr = document.createElement("tr");

  let template = `
                <tr id='data' row="1" class="table-row">
                  <td><input type="text" id="college-name" placeholder="enter university name"></td>
                  <td><input type="text" id="degree-name" placeholder="enter degree/diploma"></td>
                  <td><input type="text" id="field-name"></td>
                  <td><input type="date" id="year-name"></td>
                  <td><input type="text" id="grades" placeholder="enter your grade"></td>
                </tr>
             `;
  tr.insertAdjacentHTML('beforeend', template)
  table_body.appendChild(tr);
  row++;
});

//clear button
let remove_education = document.getElementById("clear-education");
remove_education.addEventListener('click', ()=>{
  if(row > 1){
    table_body.deleteRow(row-1);
    row--;
  }
})


console.log(remove_education);


//experience add and clear button 
//add button
let flag = 100;
let experience_btn = document.getElementById("add_experience");
let experience_block = document.getElementById("experience-data-1");

experience_btn.addEventListener("click", () => {
    let experienceDiv = document.createElement("div");
    flag = flag+1;
    let template = `
    
    <input
      type="date"
      name="experience_start_date"
      id="experience_start_date"
    />
    
    <input
      type="date"
      name="experience_start_date"
      id="experience_start_date"
    />
    
    <input
      type="text"
      name="company name"
      id="company_name"
      placeholder="enter company name"
    />
    <button id="${flag}" onclick="removeExperience(this)">Clear</button>
    `;
    experienceDiv.id = `experience-data-${flag}`;
    experienceDiv.insertAdjacentHTML('beforeend', template);
    experience_block.appendChild(experienceDiv);
    
})

//clear button
// let remove_experience = document.getElementById("remove_experience");
document.getElementById("100").style.display = "none";
function removeExperience(button){
  if(button.id !== 100){
    let num = button.id;
  console.log(num);
  let row = document.getElementById('experience-data-'+num);
  console.log("row: "+row);
  row.remove();
  }
}



//certification add and clear button 
let count = 1;
let certificate_btn = document.getElementById("add_certificate");
let certificate_block = document.getElementById("certificate-data-1");

certificate_btn.addEventListener("click", () => {
    let certificate_Div = document.createElement("div");
    count = count +1;
    let template = `
    
        <input type="date" name="Certification_date" id="Certification_date" />
       
        <input
          type="text"
          name="Certification_feild"
          id="Certification_feild"
        />
        
        <input
          type="text"
          name="Certification_authority"
          id="Certification_authority"
        />
        <button id="${count}" onclick="removeCertificate(this)">Clear</button>
    `;
    certificate_Div.id = `certificate-data-${count}`;
    certificate_Div.insertAdjacentHTML('beforeend', template);
    console.log(certificate_Div);
    // console.log(certificate_block);
    certificate_block.appendChild(certificate_Div);
})

document.getElementById("1").style.display = "none";
function removeCertificate(button){
  if(button.id != 1){
    let num = button.id;
  console.log(num);
  let row = document.getElementById('certificate-data-'+num);
  console.log("row: "+row);
  row.remove();
  }
}


//valid email function
function valid_email(email){
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!mailFormat.test(email)){
      alert("Invalid Email");
  }
  
}


//generate button 

//validation function
function validations(){

  //valid first name
  if(document.getElementById("f-name").value.length <= 3){
    alert("Enter valid First name");
  }

  //valid last name
  if(document.getElementById("l-name").value.length <= 3){
    alert("Enter valid Last name");
  }
  //valid email
  valid_email(document.getElementById('email').value);

  //valid phone
  if(document.getElementById("phone").value.length < 10){
    alert("Invaild phone");
  }

  if(document.getElementById("address").value.length <= 0){
    alert("Enter vaild address");
  }
  
  if(document.getElementById("aboutme").value.length <= 500){
    alert("Length should be greater than 20");
  }
}

//local storage function
function local_storage(){
  const name = document.getElementById('f-name').value;
  localStorage.setItem("NAME", name);
}

let generate_btn = document.getElementById("generate-btn");
generate_btn.addEventListener('click', ()=>{
  validations();
  local_storage();

});