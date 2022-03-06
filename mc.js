var x = "";

var validate = function(val, form) {
    
    let x = document.querySelector('input[name = "choice"]:checked').value;
    document.getElementById("pname").innerHTML = "You picked ❝" + x + "❞, thank you for your input!" ;

    //returnS(x,"formresult");
    console.log(x);

    
    /* var radios = document.getElementsByName('choice');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           x = radios[i].value; 
           break;
         }
    }
    */
    
}