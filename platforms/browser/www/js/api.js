var Api = function(){
	this.api_key = null;  
	this.api_domain = 'http://localhost/'; 
}; 

//Métodos ~privados~
Api.prototype.getApiKey = function(){
	return window.localStorage.getItem('api_key'); 
}; 

Api.prototype.setApiKey = function(api_key){
	window.localStorage.setItem('api_key', api_key); 
}; 

Api.prototype.sender = function(relativePath, data, callback){
	$.post({crossDomain: true,
			url: this.api_domain+relativePath, 
		    data: data}).
	done(callback). 
	fail(callback); 
}; 
//Métodos ~privados~

Api.prototype.getUser    = function(callback){
	var data = {
		api_key: this.getApiKey()
	}; 

	this.sender('u/getUser', data, callback); 
}; 

Api.prototype.isLogged = function(){
	return !(this.getApiKey() == null || this.getApiKey() == ''); 
}; 

Api.prototype.login = function(telefone, senha, callback){
	var data = {
		telefone : telefone, 
		senha    : senha
	}; 

	this.sender('u/login', data, callback); 
}; 

Api.prototype.register = function(nome, telefone, senha, confirmacao, callback){
	var data = {
		nome               : nome, 
		telefone           : telefone, 
		senha              : senha, 
		senha_confirmation : confirmacao
	}; 

	this.sender('u/register', data, callback); 
};

//Rotas que precisam da api_key: 
Api.prototype.order = function(complemento, latitude, logitude, visita_hora, visita_data, callback){
	if(this.getApiKey() == null)
		return false; 

	var data = {
		api_key: this.getApiKey()
	}; 

	//do stuffs. 
	this.sender('s/order', data, callback); 
}; 

Api.prototype.getAll = function(callback){
	if(this.getApiKey() == null)
		return false; 

	var data = {
		api_key: this.getApiKey()
	}; 

	//do stuffs. 
	this.sender('s/getAll', data, callback); 
}; 



