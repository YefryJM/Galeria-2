function fnEnviar(){
    /*Derando variables */
    var vNombre = vApellido = vCorreo = vInstitucion = "";

    

    /*Asignando variables */
    //vNombre = document.getElementById("idNombre").value;
    vNombre = $("#idNombre").val();

    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;
    


    /*Insertando datos a la vista html */
    //document.getElementById("sNombre").innerHTML = vNombre;
    $("#sNombre").text(vNombre);


    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sInstitucion").innerHTML = vInstitucion;

    
    if(validaCampos()==true){
 
       /* var Modalhtml = document.getElementById("mRegistro");
        var miModal = new bootstrap.Modal(Modalhtml);
        miModal.show();*/

        $("#mRegistro").modal("show");
        //$("#mRegistro").modal("hide");
        
    }
    
    
        

    console.log("Nombre: "+vNombre 
    + " Apellido: "+vApellido 
    + " Correo: "+vCorreo
    + "Institución :"+vInstitucion);
}


function validaCampos(){
    var valor = true;

    var vNombre = document.getElementById("idNombre").value;
    var vApellido = document.getElementById("idApellido").value;
    var vCorreo = document.getElementById("idCorreo").value;
    var vInstitucion = document.getElementById("idInstitucion").value;

    //objetos

    debugger

    var objNombre = document.getElementById("idErrorNombre");
    var objApellido = document.getElementById("idErrorApellido");
    var objCorreo = document.getElementById("idErrorCorreo");
    var objInstitucion = document.getElementById("idErrorInstitucion");
    

    if(vNombre.trim().length == 0){
        valor = false;
        objNombre.style.display="block"
        document.getElementById("idErrorNombre").focus();
    }else{
        objNombre.style.display="none"
    }

    if(vApellido.trim().length == 0){
        valor = false;
        objApellido.style.display="block"
        document.getElementById("idErrorApellido").focus();
    }else{
        objApellido.style.display="none"
    }

    if(vCorreo.trim().length == 0){
        valor = false;
        objCorreo.style.display="block"
        document.getElementById("idErrorCorreo").focus();
    }else{
        objCorreo.style.display="none"
    }

    if(vInstitucion.trim().length == 0){
        valor = false;
        objInstitucion.style.display="block"
        document.getElementById("idErrorInstitucion").focus();
    }else{
        objInstitucion.style.display="none"
    }

    return valor;
}


function nombreFuncion2(valor){
    //codigo para procesar ese valor
}

function nombreFuncion3(valor){
    //codigo para procesar ese valor
    valor = "Estes es el valor: "+valor
    return valor;
}


function nombreFuncion4(valor){
    //codigo para procesar ese valor
    valor = "Profe Necesito Ayuda, no entiendo nada!!"    
}