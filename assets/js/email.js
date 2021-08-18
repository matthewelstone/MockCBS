// ------- Modal adjusted from W3 schools//
var modal = document.getElementById("rules-modal");
var btn = document.getElementById("rules-link");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display="block";
}
span.onclick = function(){
    modal.style.display= "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    } 
}




function sendMailConfirmation(){
    var modal = document.getElementById("send-email-modal");
    var btn = document.getElementById("submit-form");
    var span = document.getElementById("close-email-confirmation")

    modal.style.display="block";

    span.onclick = function(){
        modal.style.display="none";
    }
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    }

}

function sendMail(contactForm){
    emailjs.send("service_9xpd5g2","CiceroneMock",{
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "cbs_mock_message":contactForm.messageInformation.value
    })
    .then(
        function(response){
            console.log("success")
            sendMailConfirmation();
        },
        function(error){
            console.log("failed");
        });
    return false;
}

