function SendMail(){
    const params = {
        from_name : document.getElementById("fullName").value, 
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    
    };
    emailjs.send("service_9z0kmao", "template_hx7hinh", params).then(function(res) {
        alert('Success!' + res.status);
    })
}