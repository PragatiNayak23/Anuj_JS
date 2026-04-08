const submitHandler = (event) =>{
    event.preventDefault();  /// no reload 
    // console.log("Form Submittt.....");

    // var fname = document.getElementById("name"); // form input
    var fname = document.getElementById("name").value;
    var eemail = document.getElementById("email").value;
    var ccountry = document.getElementById("country").value;
    var ccolour = document.getElementById("color").value;

    const ggender = document.getElementsByName("ggender")// input female male 

    for(let i=0;i<ggender.length;i++)
    {
        if(ggender[i].checked)
        {
            console.log(ggender[i].value)
        }
    }

    console.log(fname);
    console.log(eemail);
    console.log(ccountry);
    console.log(ccolour);


    // browser....
    const nameR = document.getElementById("nameResult")
    nameR.innerHTML = fname;
    const emailR = document.getElementById("emailResult")
    emailR.innerHTML = eemail;
    const countryR = document.getElementById("countryResult")
    countryR.innerHTML = ccountry;
    const genderR = document.getElementById("genderResult")
    let selectGender = "";
    for(let i=0;i<ggender.length;i++)
    {
        if(ggender[i].checked)
        {
            selectGender = ggender[i].value;
        }
    }
    genderR.innerHTML = selectGender;
    const colorR = document.getElementById("colorResult")
    colorR.innerHTML = ccolour;

    const result = document.getElementById("result")
    result.style.display = "block";
    result.style.backgroundColor = colorR.value;
    result.style.padding = "10px";
    result.style.margin = "10px";
    result.style.border = "1px solid black";
}