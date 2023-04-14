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

