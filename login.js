function loguear()
{

let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if(user=="JFKENNEDY" && pass=="123456789")
{
    
    window.location="grados.html";
}

else
{

    alert("Datos Incorrectos")
}
}