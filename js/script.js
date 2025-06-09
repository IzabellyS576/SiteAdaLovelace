document.getElementById("button").addEventListener("click",validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value !="" && 
    document.getElementById("telefone").value !=""){
        alert("Prontinho! Você receberá as novidades por email!")
    }else{
        alert("Preencha os campos de Nome e Email antes de enviar!")
    }
}