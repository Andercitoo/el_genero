function mostrar(){
    const datos = {
        contra: document.querySelector(".contra").value,
        correo: document.querySelector(".correo").value,
    };    
    
    if(datos.correo.length == 0){
        alert("el campo del correo no puede estar vacío")
        return false;
    }else if(datos.contra.length == 0){
        alert("no puede dejar el campo de contraseña vacio")
        return false;
    }else if(datos.contra.length < 5){
        alert("la contrasña es demasiado corta")
        return false;
    }else{
        alert("el registro se hizo adecuadamente")
    }

    form.submit()
}