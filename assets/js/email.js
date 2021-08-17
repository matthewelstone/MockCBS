

function sendMail(contactForm){
    emailjs.send("service_9xpd5g2","CiceroneMock",{
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "cbs_mock_message":contactForm.messageInformation.value
    })
    .then(
        function(response){
            console.log("success")
        },
        function(error){
            console.log("failed");
        });
    return false;
}

