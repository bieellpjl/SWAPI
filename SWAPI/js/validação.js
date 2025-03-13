function enviar() {
    var inputNumber = document.getElementById("inputNumber");
    var errorMessage = document.getElementById("error-message");

    
    if (inputNumber.value === "") {
        
        alert("Por favor, insira um número!");
        inputNumber.style.borderColor = "red"; 
    } else {
    
        inputNumber.style.borderColor = ""; 
        alert("Número enviado: " + inputNumber.value); 
    }
}
