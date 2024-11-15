const d = document;
export function validacion() {
	const $formulario = document.getElementById('formulario');
	//const $inputs = document.querySelectorAll('#formulario input');
	/*seleccionar todos los elementos del formulario de clase formulario-contacto con 
	atributo required, es decir, solo aquellos que vamos realmente a validar */
	const $inputsRequeridos = document.querySelectorAll('.formulario-contacto [required]');
	//console.log($inputs);
	

/* recorrer los inputs recogidos en la variable $inputsRequeridos e ir asignando a cada uno de ellos
dinámicamente un span */
	$inputsRequeridos.forEach((input) => {
		const $span = document.createElement('span');
		//a cada span le asignamos como id el atributo name de cada input.
		$span.id = input.name;
		// el contenido del span va a ser lo que venga en el title de cada input
		$span.textContent = input.title;
		// Le asignamos la clase formulario-mensaje-error y la clase no visible para ocultarlo
		$span.classList.add('formulario-contacto-error', 'novisible');
		//insertar el elemento justo al lado de su input como hermano posterior (afterend)
		input.insertAdjacentElement('afterend', $span);
	});


	/*vamos usar el evento keyup para comprobar mientras se vaya escribiendo. También podría haberse hecho 
	por ejemplo al submit */
	d.addEventListener('keyup', (e) => {
		// validará solo aquellos campos requeridos de la clase del formulario
		if (e.target.matches('.formulario-contacto [required]')) {
			//creación de variable del DOM para apuntar a e.target para simplificar sintaxis 
			const $input = e.target;
			/* usamos el operador de cortocircuito(||) para controlar los textarea que 
			no tienen atributo pattern, pero sí le pusimos atributo data-pattern (en el textarea)*/
			const patron = $input.pattern || $input.dataset.pattern;
			/* comprobar que cumple el patrón pero que empiece a validar cuando ya haya algo escrito en el cuadro de texto, 
			para que no salga nada más hacer clic en el cuadro de texto y esté vacío */
			if (patron && $input.value !== '') {
				//variable para guardar la expresión regular en la que se le pasa el patrón que quiero evaluar como parámetro
				const regEx = new RegExp(patron);
				console.log("el input tiene patrón",$input.value);
				//comprobar si el patrón cumple o no con la expresión regular
				if (!regEx.exec($input.value)) {
					/*capturamos el id del span que creamos dinámicamente y le añadirmos la clase is-active en caso de 
					no cumplirse la expresión regular, mientras que si la cumple, se la retiramos, para que se ejecute 
					el css correspondiente (formulario-contacto-error.is-active)*/
					d.getElementById($input.name).classList.add('is-active');
				} else {
					d.getElementById($input.name).classList.remove('is-active');
				}
			}
			// en caso de no tener patrón
			if (!patron) {
				//console.log("el input no tiene patrón",$input.value);
				//si el campo está vacío, igualmente le añadimos la clase is-active y en caso contrario se la retiramos
				if ($input.value === '') {
					d.getElementById($input.name).classList.add('is-active');
				} else {
					d.getElementById($input.name).classList.remove('is-active');
				}
			}
		}
	  });
	//miramos cuando se detecte el submit de enviar
	d.addEventListener("submit",(e)=>{
		//e.preventDefault();
		alert("Enviando formulario");
		const $loader=d.querySelector('.formulario-contacto-loader');
		const $respuesta=d.querySelector('.formulario-contacto-respuesta');
		$loader.classList.remove('novisible');
	
		setTimeout(()=>{
			$loader.classList.add("novisible");
			$respuesta.classList.remove("novisible");
			$formulario.reset();
	
			setTimeout(()=>{
				$respuesta.classList.add("novisible")
				
			},5000);
		},5000);
	
	})
}
