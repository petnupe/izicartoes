var _HOST_ = 'http://www2.tecbiz.com.br/tecbiz/tecbiz.php';

if (_HOST_ != 'http://www2.tecbiz.com.br/tecbiz/tecbiz.php') {
	$('div[data-role="content"]').css('background-color', 'orange');
}

var _OPERADORA_ = 'IZI Cartões';

$(document).ready(function(){
	$('h1').html(_OPERADORA_);
	$('#textoSenhaInicial').html('Esta ação só poderá ser desfeita pela ' + _OPERADORA_ + '!');
	$('h4').html(_OPERADORA_ + ' 1.0');
});

