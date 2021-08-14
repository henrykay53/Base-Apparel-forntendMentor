// Waits for the browser to load before triggering the event handler
window.onload = btn;

var btn = document.getElementById("btn");
document.getElementById("error").style.display = "none"; // Hides error image
btn.onclick = checkEmptyInput;

function checkEmptyInput() {

    var email = document.getElementById("email");

    if(email.value.length < 10) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
    }

    setTimeout(LoadPage, 5000); // Timer is set to 5 seconds after event handler has occured
    
}

// This function reloads the page
function LoadPage() {
    location.reload();
}



