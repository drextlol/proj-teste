var local;
var html;
var inp;
$(".disclamer").hide();

$(document).ready(function() {

    /* Mascaras de campos */

    $(function() {
        /* Mascára dos campos */
	    $(".date").mask("99/99/9999");

	    var masks = ['(00) 0000-00000', '(00) 0000-00009'],
	    maskBehavior = function (val, e, field, options) {
	        return val.length > 14 ? masks[0] : masks[1];
	    };

	    $('.phone').mask(maskBehavior, {
	        onKeyPress: function (val, e, field, options) {
	            field.mask(maskBehavior(val, e, field, options), options);
	        }
	    });

	    $(".cep").mask("99999-999");
	    $(".cnpj").mask("99.999.999/9999-99");
	    $(".cpf").mask("999.999.999-99");
	    $('.money').mask('000.000.000.000.000,00', { reverse: true });
	    $('.placa').mask('aaa-9999');
	    $('.cardcredit').mask('9999.9999.9999.9999');
	    $('.codecardcredit').mask('9999');
	    $('.datecardcredit').mask('99/9999');
	    /* Fim Mascára dos campos */
    });
});
