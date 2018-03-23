// This function checks for blank input text fields
// It will alert the site visitor if he/she leaves one or both fields
// blank when they click 'send'.

function check()  {

    var errorMessage = "";

    if (document.getElementById('name').value==""
        || document.getElementById('name').value==undefined) {
            errorMessage += "Please enter your Name \n";
            document.getElementById('name').style.bordercolor = 'red';    
        }
        
    if (document.getElementById('email').value==""
        || document.getElementById('email').value==undefined) {
            errorMessage += "Please enter your Email \n";
            document.getElementById('email').style.bordercolor = 'red'; 
        }
    
    if (errorMessage != "") {
        alert(errorMessage);
        return false;
     }

    return true;

}

