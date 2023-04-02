function mostrarOpciones(event) {
    const select = event.currentTarget;
    const destinatario = select.value;
    const opcionesSelect = document.getElementById('opciones');
    
    opcionesSelect.innerHTML = '';
    
    if (destinatario === 'ale') {
      const opciones = ['Consulta 1', 'Consulta 2', 'Consulta 3'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    } else if (destinatario === 'dani') {
      const opciones = ['Consulta 4', 'Consulta 5', 'Consulta 6'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    } else if (destinatario === 'luisi') {
      const opciones = ['Consulta 7', 'Consulta 8', 'Consulta 9'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    } else if (destinatario === 'nico') {
      const opciones = ['Constructora de Edificios', 'Inmobiliarias', 'Corralones', 'Casas de Porcelanatos', 'Casas de Sanitarios', 'Casas de Todo para el Hogar'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    } else if (destinatario === 'rodri') {
      const opciones = ['Consulta 13', 'Consulta 14', 'Consulta 15'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    } else if (destinatario === 'general') {
      const opciones = ['Otro Tipo', 'Reclamo'];
      for (let i = 0; i < opciones.length; i++) {
        const option = document.createElement('option');
        option.value = opciones[i];
        option.text = opciones[i];
        opcionesSelect.appendChild(option);
      }
    }
  }
  
  function enviarConsulta(event) {
    event.preventDefault();
    const destinatarioSelect = document.getElementById('destinatario');
    const destinatarioOption = destinatarioSelect.options[destinatarioSelect.selectedIndex];
    const destinatario = destinatarioOption.text;
    const email = destinatarioOption.getAttribute('data-email');
    const opcionesSelect = document.getElementById('opciones');
    const opciones = opcionesSelect.options[opcionesSelect.selectedIndex].text;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const tipoConsultaInputs = document.getElementsByName('tipoConsulta');
    let tipoConsulta;
    for (let i = 0; i < tipoConsultaInputs.length; i++) {
      if (tipoConsultaInputs[i].checked) {
        tipoConsulta = tipoConsultaInputs[i].value;
        break;
      }
    }
    const consulta = document.getElementById('consulta').value;
  
    let mensaje = `Usted está enviando un mail a ${destinatario} (${email}) por ${tipoConsulta}.`;
    if (destinatario === 'General') {
      const descripcion = document.getElementById('descripcion').value;
      if (descripcion) {
        mensaje += ` La descripción es: ${descripcion}.`;
      } else {
        mensaje += ` Por favor, indique la descripción.`;
        return alert(mensaje);
      }
    }
  
    const confirmacion = confirm(mensaje + ' ¿Desea continuar?');
    if (confirmacion) {
      const formulario = document.getElementById('consultaForm');
      formulario.submit();
    }
  }
  
  function mostrarOpciones(event) {
    const destinatarioSelect = event.target;
    const opcionesSelect = document.getElementById('opciones');
    opcionesSelect.innerHTML = '';
    
    if (destinatarioSelect.value === 'ale') {
      const opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
      agregarOpciones(opciones, opcionesSelect);
    } else if (destinatarioSelect.value === 'dani') {
      const opciones = ['Opción 4', 'Opción 5', 'Opción 6'];
      agregarOpciones(opciones, opcionesSelect);
    } else if (destinatarioSelect.value === 'luisi') {
      const opciones = ['Opción 7', 'Opción 8', 'Opción 9'];
      agregarOpciones(opciones, opcionesSelect);
    } else if (destinatarioSelect.value === 'nico') {
      const opciones = ['Constructora de Edificios', 'Inmobiliarias', 'Corralones', 'Casas de Porcelanatos', 'Casas de Sanitarios', 'Casas de Todo para el Hogar'];
      agregarOpciones(opciones, opcionesSelect);
    } else if (destinatarioSelect.value === 'rodri') {
      const opciones = ['Opción 13', 'Opción 14', 'Opción 15'];
      agregarOpciones(opciones, opcionesSelect);
    } else if (destinatarioSelect.value === 'general') {
      const opciones = ['Otro Tipo', 'Reclamo'];
      agregarOpciones(opciones, opcionesSelect);
    }
  }
  
  function agregarOpciones(opciones, select) {
    opciones.forEach(opcion => {
      const option = document.createElement('option');
      option.text = opcion;
      select.add(option);
    });
  }
  
  const formulario = document.getElementById('consultaForm');
  formulario.addEventListener('submit', enviarConsulta);
  const destinatarioSelect = document.getElementById('destinatario');
  destinatarioSelect.addEventListener('change', mostrarOpciones);
  