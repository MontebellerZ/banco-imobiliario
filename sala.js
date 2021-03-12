var dados = window.localStorage;

function titulo(){
	var sala = dados.getItem("sala");
	document.title = "Sala "+sala;
}