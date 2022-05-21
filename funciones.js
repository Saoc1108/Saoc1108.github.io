function validar() 
{
    let usr = document.getElementById("nombre").value;
    let pass = document-getElementById("clave").value;

    if (usr == "" || pass == "") {
        alerta("ingrese datos");
    }

    
}