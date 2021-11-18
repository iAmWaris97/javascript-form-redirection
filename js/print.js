function setValues(){
    $(document).ready(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var telephone = $("#telephone").val();
        var enquiry = $("#enquiry").val();
        var message = $("#message").val();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("telephone" , telephone);
        localStorage.setItem("enquiry", enquiry);
        localStorage.setItem("message", message);
        return false;
    });
}

