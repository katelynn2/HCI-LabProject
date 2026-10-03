const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector ('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/* FAQ */
const faqs = document.querySelectorAll (".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


/*Form validation*/
function validateData() {
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var confpassword=document.getElementById("confpassword");
    var agree=document.getElementById("agree");

    if (username.value.length < 5) {
        alert("Username length must be at least 5 characters");
    }
    else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must ends with @gmail.com");
    }
    else if (!checkAlphanum(password.value)) {
        alert ("Password must be alphanumeric");
    }
    else if (confpassword.value != password.value){
        alert ("Password must be the same");
    }
    else if (!agree.checked){
        alert("Agreement must be checked");
    }
    else {
        alert("Success submit data");
    }
}

function checkAlphanum(password){
    var isAlpha=false;
    var isNum=false;
    for(let i=0; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha=true
        }
        else{
            isNum=true
        }

        if (isAlpha&&isNum){
            return true;
        }
    }
    return false;
}