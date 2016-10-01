<style>
	
</style>

<template>
	 <home data-page="true">
      <nav class="tabs header-tabs">
        <div class="tab-items">
          <a class="tab-item"><i class="icon icon-home"></i></a>
          <a class="tab-item"><i class="icon icon-info-outline"></i></a>
          <a class="tab-item"><i class="icon icon-settings"></i></a>
        </div>
        <div class="tab-indicator"></div>
      </nav>

      <div class="content" data-tab-contents="true" data-disable-swipe="false" data-tab-default="1">
        <!-- TAB -->
        <inicial :api="api"> </inicial>
        <!-- TAB -->

        <!-- TAB -->
        <div class="tab-content">
          <div class="padded-full">
            <h1>Orçamento</h1>
            <p>
              Preencha os campos abaixo para que possamos identificar qual o serviço indicado e <strong>estimar</strong> o preço do serviço.
            </p>
            <hr>
            <div class="row">
              <div class="phone-12 column">
                <label class="checkbox">
                <input type="checkbox" required>
                  Seu computador está ligando? *
                  <span></span>
              </div>
              <div class="phone-12 column">
                <label>Se ele liga, selecione um dos problemas abaixo:</label>
                <button class="btn btn-problemas fit-parent primary" data-autobind="true" data-popover-id="btn-problemas">Selecione o problema aqui</button>
              </div>
              <div class="phone-12 column">
                <p>
                  Texto de possível explicação do problema.<br>
                  <strong>Preço estimado: </strong> R$ 00,00
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- TAB -->
        <!-- TAB -->
        <div class="tab-content">
          <div class="padded-full">
            <h1>Configurações</h1>
            <ul class="list">
              <li>
                <i class="pull-right icon icon-expand-more"></i>
                <a href="#link1" class="padded-list">Alterar dados</a>
                <div class="accordion-content">
                  <div class="input-wrapper">
                    <input class="with-label" type="number" id="phone" placeholder="Máscara do telefone aqui">
                  </div>
                </div>
              </li>
              <li>
                <i class="pull-right icon icon-expand-more"></i>
                <a href="#link2" class="padded-list">Sobre</a>
                <div class="accordion-content">
                  <p class="accordion-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </li>
              <li>
                <i class="pull-right icon icon-expand-more"></i>
                <a href="#link3" class="padded-list">Feedback</a>
                <div class="accordion-content">
                  <textarea name="name" rows="10" cols="40"></textarea>
                  <div class="row">
                    <div class="phone-12 column">
                     <button id="btn-feedback" class="btn fit-parent primary">Enviar Feedback</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- TAB -->
      </div>
    </home>
	</template>

	<script>
	import Inicial from './Inicial.vue'; 

		export default{
      props: ['api'], 

			data: () => {
				return {
					isLogged: false
				}
			}, 

			ready: function(){
		        this.isLogged = this.api.isLogged(); 
			}, 

			components:{
				Inicial
			}
		}
	</script>