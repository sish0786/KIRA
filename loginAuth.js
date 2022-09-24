var names = document.getElementById("name");
var pass = document.getElementById("password");
function validate(){
    var nameVal = names.value;
    var passval = pass.value;
    if(nameVal === 'kira' && passval === 'beautifulredkiss')
    {
        window.location.href = "envelope.html"
    }
    else
    {
        alert("Incorrect userName or Password");
    }
}