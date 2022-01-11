// alert("hy")

function formSubmit(e){
e.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var phone = document.getElementById('phone');
    var username = document.getElementById('username');

    if(validateUser(username.value)){
        document.getElementById('user_err').classList.remove("error_msg_show");
        if(validateEmail(email.value))
         {
            document.getElementById('email_err').classList.remove("error_msg_show"); 
            if(validatePassword(password.value))
            {
                document.getElementById('pass_err').classList.remove("error_msg_show");
                if(validatePhone(phone.value))
                {
                    document.getElementById('phone_err').classList.remove("error_msg_show");
                    alert("registerd successfullyyyyy")
                }else{
                    document.getElementById('phone_err').classList.add("error_msg_show");
                }

            }else{
                document.getElementById('pass_err').classList.add("error_msg_show");

            }
        }
        else{
            document.getElementById('email_err').classList.add("error_msg_show");
        }
    }else{
        document.getElementById('user_err').classList.add("error_msg_show");

    }


    function validateUser(user){
        var filter = /^[a-zA-Z\-]+$/;
        if(!filter.test(user)){
           return false;
        }
        return true;      
    }
    function validateEmail(email)
    {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!filter.test(email))
        {
            return false;
        }
        return true;
    }2

    function validatePassword(password) {

        // console.log(password)
        if (password.length >= 6) {
            return true;
        }
        return false;
    }
    function validatePhone(phone) {
        console.log(phone)
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(phone)) {
            return false
        }
        return true;
    }

}
