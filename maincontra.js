function mostrar(){
    const datos = {
        contra1: document.querySelector(".contra1").value,
        contra2: document.querySelector(".contra2").value,
        correo: document.querySelector(".mail").value
    };   

    if(datos.correo.length == 0){
        alert("el campo del correo no puede estar vacío")
        return false;
    }else if(datos.contra1.length == 0){
        alert("no puede dejar el campo de contraseña vacio")
        return false;
    } else  if(datos.contra2.length == 0){
        alert("no puede dejar el campo de contraseña vacio")
        return false;
    } else if(datos.contra1.length < 5){
        alert("la contrasña es demasiado corta")
        return false;
    }else if(datos.contra1 == datos.contra2){
        alert("la contraseña se actualizó correctamente")
        
    }else{
        alert("las constraseñas no coinciden")
        return false;
    }

    form.submit()
}
    



