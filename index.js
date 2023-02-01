let btn = document.getElementById("btn");
let table_body = document.getElementById("table-body");

btn.addEventListener("click", () => {
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
});

let experience_btn = document.getElementById("add_experience");
let experience_block = document.getElementById("experience-data");

experience_btn.addEventListener("click", () => {
    let experienceDiv = document.createElement("div");

    let template = `
    <label for="from">From</label>
    <input
      type="date"
      name="experience_start_date"
      id="experience_start_date"
    />
    <label for="Till">Till</label>
    <input
      type="date"
      name="experience_start_date"
      id="experience_start_date"
    />
    <label for="company name">Company Name</label>
    <input
      type="text"
      name="company name"
      id="company_name"
      placeholder="enter company name"
    />
    `;
    experienceDiv.insertAdjacentHTML('beforeend', template);
    experience_block.appendChild(experienceDiv);
    
})

let certificate_btn = document.getElementById("add_certificate");
let certificate_block = document.getElementById("certificate-data");

certificate_btn.addEventListener("click", () => {
    let certificate_Div = document.createElement("div");

    let template = `
    <label for="certification_datte">Certification Date</label>
        <input type="date" name="Certification_date" id="Certification_date" />
        <label for="Certification_feild">Certification Feild</label>
        <input
          type="text"
          name="Certification_feild"
          id="Certification_feild"
        />
        <label for="Certification_authority">Certification Authority</label>
        <input
          type="text"
          name="Certification_authority"
          id="Certification_authority"
        />
    `;
    certificate_Div.insertAdjacentHTML('beforeend', template);
    // console.log(certificate_Div);
    // console.log(certificate_block);
    certificate_block.appendChild(certificate_Div);
    
})