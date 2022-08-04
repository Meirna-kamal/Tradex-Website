var myForm=document.querySelector("#user-form")
function textValidation(element){
    var inputValue=element.value.trim()
    if(inputValue.length<=2) element.nextElementSibling.innerText="please enter a valid username"
    else element.nextElementSibling.innerText=""
}
function emailValidation(element){
    var emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailPattern.test(element.value))
    if(emailPattern.test(element.value)==false) element.nextElementSibling.innerText="invalid Email"
    else element.nextElementSibling.innerText=""
}
myForm.addEventListener("input", function(e){
    if(e.target.id=="user-name" || e.target.id=="user-subject" ||e.target.id=="user-message"){
        console.log(e)
        textValidation(e.target)}
    else if(e.target.id=="user-email"){
        emailValidation(e.target)
    
    }
})