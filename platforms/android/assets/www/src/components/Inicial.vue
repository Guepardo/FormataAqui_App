<template>
	<div class="tab-content">
		<div class="padded-full">
			<div class="row text-center">
				<div class=" phone-12 column">
					<img id="logo" class="animated bounce infinite" src="http://henrique.vilela.me/images/robot.png" >
				</div>
			</div>
			<div class="row text-center margin">
				<button class="btn fit-parent primary" @click="handleButton" >{{labelButton}}</button>
			</div>
			<div class="row margin">

				<div v-if="!isLogged" >
					<p>
						<strong>Faça seu login com o Facebook</strong>
					</p>
					<p>
						É muito mais rápido e prático do que ter que preencher um formulário de cadastro que você já respondeu antes. ;)
					</p>
				</div>

				<div v-else>
					<p>
						<strong>Como funciona?</strong>
					</p>
					<p>
						Resolva seus problemas pressionando apenas dois botões!
					</p>
				</div>

				<div class="row text-center">
					<img src="http://graph.facebook.com/{{user.authResponse.userID}}/picture?type=square" />
					<p>Maria</p>
				</div>
			
			</div>
			<div class="row" style="display: none;">
				<div id="pendente" class="row margin" >
					<ul class="list">
						<li class="divider text-center"><strong>Solicitação em aberto</strong></li>
						<li><span class="padded-list">Feita há 34 minutos</span></li>
						<li><span class="padded-list">Agendado para: 20/09/2016 às 13:00</span></li>
						<li><button id="cancelar" class="btn fit-parent negative">Cancelar</button></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data: () => {
			return {
				isLogged: false, 
				user: {}, 
				api: new Api()
			}
		}, 

		ready: function(){
			this.isLogged = this.api.isLogged(); 
		}, 


		methods:{
			handleButton: function (){
				if(!this.isLogged){
					facebookConnectPlugin.login(["public_profile"],
						this.onFacebookSuccess,
						this.onFacebookError
					);
				}else
					phonon.panel('#solicitar').open(); 
			}, 
			onFacebookSuccess: function(userData){
				// alert("UserInfo: " + JSON.stringify(userData));

				this.user     = userData; 
				this.api.setApiKey(userData.authResponse.accessToken); 

				this.api.getMe(function(data){
					alert(JSON.stringify(data)); 
				}); 

				this.isLogged = true;  
			}, 
			onFacebookError: function(error){
				alert("UserInfo: " + JSON.stringify(error));	
			}
		}, 

		computed:{
			labelButton: function(){
				return (!this.isLogged) ? 'Login com o Facebook' : 'Consertar agora'; 
			}
		}
	}
</script>