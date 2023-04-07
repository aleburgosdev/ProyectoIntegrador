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


