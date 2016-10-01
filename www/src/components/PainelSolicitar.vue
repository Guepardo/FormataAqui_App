<style>
	
</style>

<template>
	<div id="solicitar" class="panel-full">
		<header class="header-bar">
			<a class="btn icon icon-close pull-right" href="#" data-panel-close="true"></a>
			<h1 class="title">Solicitar</h1>
		</header>
		<div class="content  padded-full">

			<div class="row text-center margin">
				<div class="phone-12 column">
					<p>Aguardando permissão..</p>
				</div>
			</div>

			<div class="circle-progress active">
				<div class="spinner"></div>
			</div>

			<div class="row  text-center margin">
				<button id="" class="btn btn-flat positive"  @click="getLocation">Permitir</button>
			</div>

			<div class="row margin">
				<div class="phone-12 column">
					<strong>Complemento do seu endereço</strong>
					<input type="text" v-model="complemento" placeholder="Nº 2, Lote 2 Qd. 1">
				</div>
			</div>
			
			<div class="row">
				<div class="phone-12 column">
					<label class="checkbox">
						<input type="checkbox">
						<strong>Deseja agendar a visita?</strong>
						<span></span>
					</label>
				</div>
			</div>

			<hr>

			<div class="row ">
				<div class="phone-12 column">
					<strong>Data</strong>
					<input type="date" v-model="data_visita" placeholder="Nº 2, Lote 2 Qd. 1">
				</div>
			</div>

			<div class="row ">
				<div class="phone-12 column">
					<strong>Hora</strong>
					<input type="time" v-model="hora_visita" placeholder="Nº 2, Lote 2 Qd. 1">
				</div>
			</div>

			<div class="row margin">
				<div class="phone-12 column">
					<button id="btn-solicitar" class="btn fit-parent primary" @click="registerOder">Solicitar Visita</button>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props: ['api'], 

		data: () =>{
			return{
				location: {}
			}; 
		}, 

		ready: function(){

		}, 	

		methods:{
			onSuccessLocation: function(position){
				this.location = position; 
				phonon.alert("Sucesso"); 
			}, 

			getLocation: function(){
				var options = {
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0
				};
				navigator.geolocation.getCurrentPosition(this.onSuccessLocation, function(){alert('error')},options); 
			}, 

			registerOder: function(){
				var handler = function(data){
					alert(JSON.stringify(data)); 
				}

				this.api.order(this.complemento, 1000, 1000, this.hora_visita, this.data_visita,handler); 
			}
		}
		
	}
</script>