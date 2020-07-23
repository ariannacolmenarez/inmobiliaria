function validar(){
	var nombre, correo, asunto, expresion;
	nombre= document.getElementById("nombre").value;
	correo= document.getElementById("correo").value;
	asunto= document.getElementById("asunto").value;
	expresion=/\w+@\w+\.+[a-z]/;

  if (nombre==="" ) {
  	alert("Todos los campos son obligatorios")
  	return false;
  }
  else if (correo==="" ) {
  	alert("Todos los campos son obligatorios")
  	return false;
  }
  else if (asunto==="" ) {
  	alert("Todos los campos son obligatorios")
  	return false;
  }
  else if (nombre.length>30) {
  	alert("El nombre es muy largo")
  	return false;
  }
  else if (correo.length>80) {
  	alert("El correo es muy largo")
  	return false;
  }
  else if (!expresion.test(correo)) {
  	alert("El correo no es vàlido")
  	return false;
  }
  else{
  	alert("enviado exitosamente");
  }

}
