var submit_btn=document.getElementById("submit_btn");


submit_btn.addEventListener("click",event=>{
    event.preventDefault();
    
    var error_msg=document.getElementById("error_msg_container");
    var error_msg_txt=document.getElementById("error_msg_txt");
    
    error_msg.classList.add("hidden");
    //initialize the fileds
    var full_name_in=document.getElementById("full_name_input");
    var date_in=document.getElementById("date_input");
    var email_in=document.getElementById("email_input");
    var country_in=document.getElementById("country_input");
    var course_in=document.getElementById("course_input");
    
    full_name_in.classList.remove("error");
    date_in.classList.remove("error");
    email_in.classList.remove("error");
    country_in.classList.remove("error");
    course_in.classList.remove("error");
    
    //check if fields are empty
    if(document.my_form.full_name.value==""){
        error_msg.classList.remove("hidden");
        error_msg_txt.innerHTML="Please enter your full name."
        full_name_in.classList.add("error");
        return;
    } 
    
    
    //validate email if not empty
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if(document.my_form.email.value=="" || !pattern.test(document.my_form.email.value)){
        error_msg.classList.remove("hidden");
        error_msg_txt.innerHTML="Please enter a valid email."
        email_in.classList.add("error");
        return;
    } 
    
    if(document.my_form.dob.value==""){
        error_msg.classList.remove("hidden");
        error_msg_txt.innerHTML="Please enter a valid date."
        date_in.classList.add("error");
        return;
    } 
    
    if(document.my_form.country.value==""){
        error_msg.classList.remove("hidden");
        error_msg_txt.innerHTML="Please enter your country of origin."
        country_in.classList.add("error");
        return;
    } 
    
    if(document.my_form.course.value==""){
        error_msg.classList.remove("hidden");
        error_msg_txt.innerHTML="Please enter the course you would like to enroll in."
        course_in.classList.add("error");
        return;
    } 
    
    //if all inputs are valid and all checks are true
    alert("Enrolled successfully.")
  
})