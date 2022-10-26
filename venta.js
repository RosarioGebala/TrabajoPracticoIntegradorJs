//defino valor de entrada
const valorTicket = 200;


//definir las varibles de descuento.
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;


//capturo informacion desde inputs
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let btnResumen = document.getElementById("btnResumen");
let btnBorrar = document.getElementById("btnBorrar");


//desarrollo funcion borrar
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
    nombre.value=``;
    apellido.value=``;
    mail.value=``;
    cantidadTickets.value=``;
    categoria.value=``;
}

function total_a_pagar() 
{
    if (nombre.value==="") 
    {
        alert("Escribir nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if (apellido.value==="") {
        alert("Escribir apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (mail.value==="") {
        alert("Escribir mail...");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    

    // para corroborar el correo electronico
    const emailValido = mail => 
    {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
    }
    if (!emailValido(mail.value)) 
    {
        alert("Escribir email...");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    if ( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value))) 
    {
        alert("Escribir cantidad..");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }
    if (categoria.value==="") 
    {
        alert("Seleccionar categoria...");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    //multiplico total por entradas
    let totalValorTickets=(cantidadTickets.value)*valorTicket;

    if (categoria.value==0) 
    {
        totalValorTickets=totalValorTickets;
    }
    if (categoria.value==1) 
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    if (categoria.value==2) 
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
    if (categoria.value==3) 
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
    totalPago.innerHTML=totalValorTickets;
    }


function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}





//boton resumen o pagar
btnResumen.addEventListener("click", total_a_pagar);


//boton borrar
btnBorrar.addEventListener("click", reset_total_a_pagar);
