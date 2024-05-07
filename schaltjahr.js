let buttoncheck = document.getElementById("check");

buttoncheck.onclick = function()
{

    let j = parseInt(document.getElementById("jahr").value);
    if (!isNaN(j) && Number.isInteger(j) && j >= 1000 && j <= 9999) {
    if ((j % 4 == 0) && (j % 100 !== 0 ||j % 400 == 0) ){

        document.getElementById("result").textContent = j + " ist ein Schaltjahr!";
        document.getElementById("jahr").value = ""; 
    }
    else
    {
        document.getElementById("result").textContent = j + " ist kein Schaltjahr!";   
        document.getElementById("jahr").value = "";
    }
}
else {

    document.getElementById("result").textContent = "Ungültiges Jahr! Bitte geben Sie eine vierstellige Zahl zwischen 1000 und 9999 ein.";
        document.getElementById("jahr").value = ""; // Clear the input field
}


}