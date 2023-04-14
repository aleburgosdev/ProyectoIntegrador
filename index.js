function enviarConsulta(event) {
  event.preventDefault();
  const destinatario = 'consulta@creator.com';
  const email = document.getElementById('email').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const pais = document.getElementById('pais').value;
  const tipoConsultaInputs = document.getElementsByName('tipoConsulta');
  let tipoConsulta;
  for (let i = 0; i < tipoConsultaInputs.length; i++) {
    if (tipoConsultaInputs[i].checked) {
      tipoConsulta = tipoConsultaInputs[i].value;
      break;
    }
  }
  const consulta = document.getElementById('consulta').value;

  let mensaje = `Usted está enviando un mail por ${tipoConsulta}.`;
  
  const confirmacion = confirm(mensaje + ' ¿Desea continuar?');
  if (confirmacion) {
    const formulario = document.getElementById('consultaForm');
    formulario.submit();
  }
}


//-----------------integracion de API---------------------//

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "https://reqres.in/api/users",
    dataType: 'json',
    success: function(card){
        let crearTarjetas = card
        console.log(crearTarjetas.data)
        let reviews = document.querySelector('#reviews')
        card.data.forEach(usuario => {
          reviews.innerHTML += ` 
            <div class="card rounded-3 bg-transparent shadow-none border-0" style="width: 18rem;">
              <img src="${usuario.avatar}" class="card-img-top rounded-circle img-thumbnail align-self-center " alt="..." style="height: 160px; width: 160px;">
              <div class="card-body text-center">
                <p class="card-text">${usuario.first_name}</p>
                <p class="card-text">${usuario.last_name}</p>
              </div>
            </div>
          `     
        });      
      }
  })
})


//VALIDACIÓN DE FORMULARIO DE INGRESO Y DE REGISTRO UTILIZANDO JQUERY
$(document).ready(function() {
  $("#primer-form").validate(
      {
          rules: {
              nombre: {
                  required: true,
                  minlength: 3,
              },
              email: {
                  required: true,
                  email: true
                 
              },
              clave: {
                 required: true,
                 minlength: 7
              }
         },
         messages: {
              nombre: {
                  required: "El nombre de usuario debe contener al menos 3 letras",
                  minlength: "El nombre de usuario debe contener al menos 3 letras"
              },
              email: {
                  required: "Debe ingresar su correo electrónico",
                  email: "El email no tiene el formato requerido"
                  
              },
              clave: {
                  required: "Ingrese su contraseña",
                  minlength: "La contraseña debe contener al menos 7 caracteres"
              }
              
         }
      }
  )

  $("#segundo-form").validate(
      {
          rules: {
              usuarioRegistro: {
                  required:  true,
                  minlength: 3,
              },
              emailRegistro: {
                  required: true,
                  email: true
                 
              },
              claveRegistro: {
                 required: true,
                 minlength: 7
              },
              claveConfirm: {
                  required: true,
                  minlength: 7
               }

         },
         messages: {
              usuarioRegistro: {
                  required: "El nombre de usuario debe contener al menos 3 letras",
                  minlength: "El nombre de usuario debe tener al menos 3 letras"
              },
              emailRegistro: {
                  required: "Ingrese su correo electrónico",
                  email: "El email no tiene el formato requerido"
              },
              claveRegistro: {
                  required: "Ingrese su contraseña",
                  minlength: "La contraseña debe contener al menos 7 caracteres"
              },
              claveConfirm: {
                  required: "Confirme la contraseña ingresada",
                  minlength: "La contraseña debe contener al menos 7 caracteres"

              }
              
         }
      }
  )

});


// Código para obtener pdf

function genPDF(){
  var doc= new jsPDF();
  let Usuario=document.getElementById("usuarioRegistro").value;
  let correoElectronico=document.getElementById("emailRegistro").value;
  let clave=document.getElementById("claveRegistro").value;
  let ConfirmacionDeClave=document.getElementById("claveConfirm").value;

  doc.text("Usuario: "+ Usuario,10,20);
  doc.text("Email: "+ correoElectronico,10,30);
  doc.text("Contraseña: "+ clave,10,40);
  doc.text("Confirmación de contraseña: "+ConfirmacionDeClave,10,50);
  doc.save("Midocumento.pdf")
}



