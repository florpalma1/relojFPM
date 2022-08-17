window.addEventListener('load',function(){

	let actualizarHora = function(){

		let fecha= new Date();
		let horas= fecha.getHours();
		let ampm;
		let minutos = fecha.getMinutes();
		let segundos = fecha.getSeconds();
		let diaSemana = fecha.getDay();
		let dia = fecha.getDate();
		let mes = fecha.getMonth();
		let anio = fecha.getFullYear();

		let pHoras = document.getElementById('horas');
		let pAMPM = document.getElementById('ampm');
		let pMinutos = document.getElementById('minutos');
		let pSegundos = document.getElementById('segundos');
		let pDiaSemana = document.getElementById('diaSemana');
		let pDia = document.getElementById('dia');
		let pMes = document.getElementById('mes');
		let pAnio = document.getElementById('anio');

		let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
		pDiaSemana.textContent= semana[diaSemana];

		pDia.textContent= dia;

		let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		pMes.textContent= meses[mes];

		pAnio.textContent= anio;

		if(horas >= 12){
			horas = horas -12;
			ampm= 'PM';
		}else{
			ampm= 'AM';
		}

		if(horas == 0){
			horas = 12;
		}

		if (horas<10){
			horas="0"+horas;
		}

		pHoras.textContent=horas;
		pAMPM.textContent=ampm;

		if (minutos<10){
			minutos="0"+minutos;
		}

		if (segundos<10){
			segundos="0"+segundos;
		}

		pMinutos.textContent=minutos;
		pSegundos.textContent=segundos;
	}

	actualizarHora();
	setInterval(actualizarHora,1000);
});