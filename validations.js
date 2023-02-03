//valid email function
function valid_email(email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailFormat.test(email)) {
      // alert("Invalid Email");
      focus_func(document.getElementById("email"));
      bool=false;
    }
    else{
      document.getElementById("email").style.border = "1px solid black"
    }
  }
  
  //generate button
  
  //focus function
  function focus_func(elem){
    elem.style.border = "2px solid red";
    elem.focus();
  }
  
  //validation function
  function validations() {
    //valid first name
    const f_name = document.getElementById("f-name").value;
    var FName = /^[a-zA-Z]+[a-zA-Z]+$/;
    if (!f_name.match(FName)) {
      // alert("Invalid first name");
      
      focus_func(document.getElementById("f-name"));
      bool=false;
    }
    else{
      document.getElementById("f-name").style.border = "1px solid black"
    }
  
    //valid last name
    const l_name = document.getElementById("l-name").value;
    var LName = /^[a-zA-Z]+[a-zA-Z]+$/;
    if (!l_name.match(LName)) {
      // alert("Invalid last name");
      
      focus_func(document.getElementById("l-name"));
      bool=false;
    }
    else{
      document.getElementById("l-name").style.border = "1px solid black"
    }
  
    //valid email
    valid_email(document.getElementById("email").value);
  
    //valid phone
    const phone_num = document.getElementById("phone").value;
    if(phone_num[0]!=6 && phone_num[0]!=7 && phone_num[0]!=8 && phone_num[0]!=9){
      focus_func(document.getElementById("phone"));
      bool=false;
    }
    else{
      document.getElementById("phone").style.border = "1px solid black"
    }
  
    //valid address
    const address = document.getElementById("address");
    if (address.value.length <= 0) {
      // alert("Enter vaild address");
      focus_func(address);
      bool=false;
    }
    else{
      address.style.border = "1px solid black"
    }
    //valid introduction
    if (document.getElementById("aboutme").value.length <= 50) {
      // alert("Length should be greater than 20");
      focus_func(document.getElementById("aboutme"));
      bool=false;
    }
    else{
      document.getElementById("aboutme").style.border = "1px solid black"
    }
  
    //valid education details
    const college_name = document.getElementById("college-name");
    if (college_name.value.length === 0) {
      focus_func(college_name);
      bool=false;
    }
    else{
      college_name.style.border = "1px solid black";
    }
  
    const degree_name = document.getElementById("degree-name");
    if (degree_name.value.length === 0) {
      focus_func(degree_name);
      bool=false;
    }
    else{
      degree_name.style.border = "1px solid black"
    }
  
    const passing_year = document.getElementById("year-name");
    if (passing_year.value.length === 0) {
      focus_func(passing_year);
      bool=false;
  
    }
    else{
      passing_year.style.border = "1px solid black"
    }
  
    const grades = document.getElementById("grades");
    if (grades.value.length === 0) {
      focus_func(grades);
      bool=false;
    }
    else{
      grades.style.border = "1px solid black"
    }
  }