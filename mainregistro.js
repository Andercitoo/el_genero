function mostrar(){
    const datos = {
        contra: document.querySelector(".contra").value,
        correo: document.querySelector(".correo").value,
        nombre: document.querySelector(".nombre").value
    };    

    if(datos.nombre.length == 0){
        alert("el campo de nombre no puede estar vacío")
        return false;
    }else if(datos.nombre.length < 3){
        alert("el nombre es demasiado corto")
        return false;
    }else if(datos.nombre.length > 12){
        alert("el nombre es demasiado largo")
        return false;
    }else if(datos.correo.length == 0){
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
