// This function checks for blank input text fields

function check()  {

    if (document.getElementById('name').value==""
        || document.getElementById('name').value==undefined) {
            alert ("Please Enter Your Name");
            return false;
            }
    return true;
}

