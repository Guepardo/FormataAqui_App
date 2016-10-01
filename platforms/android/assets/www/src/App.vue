 <style>
 	p {
 		font-size: 16px;
 	}

 	#logo{
 		height: 200px;
 	}

 	.margin{
 		margin-top: 2em;
 	}

 	.title {
 		margin-left: 1em;
 	}

 	.accordion-p {
 		line-height: normal;
 		text-align: justify;
 	}
 </style>

 <template>
 	<!-- Side Panel tags go here -->
 	<!-- Notification tags go here -->
 	<!-- Dialog tags go here -->

 	<!-- POPOVER -->
 	<div class="popover" id="btn-problemas">
 		<ul class="list">
 			<li><a class="padded-list">Lentidão</a></li>
 			<li><a class="padded-list">Tela preta</a></li>
 			<li><a class="padded-list">Tela azul</a></li>
 			<li><a class="padded-list">Reinicia o tempo todo</a></li>
 			<li><a class="padded-list">Tela apagando</a></li>
 			<li><a class="padded-list">Bipes constantes</a></li>
 			<li><a class="padded-list">Teclado não funciona</a></li>
 			<li><a class="padded-list">Outro</a></li>
 		</ul>
 	</div>
 	<!-- POPOVER end -->

 	<!-- PANEL -->
 	<painel-solicitar :api="api"> </painel-solicitar>
 	<!-- PANEL end -->

 	<home :api="api"> </home>
 	</template>

 	<script>
 		import Home    		   from './components/Home.vue'; 
 		import PainelSolicitar from './components/PainelSolicitar.vue'; 

 		export default {

 			data: () =>{
 				return{
 					app: phonon.navigator(), 
 					isLogged: false, 
 					api: new Api()
 				}
 			}, 

 			ready: function(){
		        // facebookConnectPlugin.browserInit(1766014373669293, ''); 
 				  
 				  phonon.options({
		            navigator: {
		                defaultPage: 'home',
		                animatePages: true,
		                enableBrowserBackButton: true,
		            },
		            i18n: null
		        });
		        
		        this.app.start();

		        this.isLogged = this.api.isLogged(); 

 			}, 

 			components: {
 				Home, 
 				PainelSolicitar
 			} 
 		}
 	</script>