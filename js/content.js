var local;
var html;
var inp;
$(".disclamer").hide();

$(document).ready(function(){
	$(".link").click(function(e){
		e.preventDefault();
		if($("body").hasClass("active")){
			$(".content").animate({
			    left: "0"
			}, "slow");
			$("body").removeClass("active");
			$(".link").html("Abrir menu");
		}else{
			$(".content").animate({
			    left: "120px"
			}, "slow");
			$("body").addClass("active");
			$(".link").html("Fechar menu");
		}
	});

	if(localStorage.getItem("teste") == null){
		localStorage.setItem("teste", "");
	}

	$('.control').keydown(function(e) {
		inp = $(".control").val().toLowerCase();
	    if (e.keyCode == 13) {
	    	if(inp != ""){
		    	if(inp == "delete"){
					localStorage.setItem("teste", "deletado (0)");
				}else{
					if(inp == "setar"){
						localStorage.setItem("teste", "setado (1)");
					}
				}
				window.location.reload();
			}else{
				$(".disclamer").hide();
			}

	    }
	});

	html = localStorage.getItem("teste");

	if(localStorage.getItem("teste") != "" && localStorage.getItem("teste") != undefined){
		$(".disclamer").show().html("Seu localStorage foi " + html);
	}else{
		$(".disclamer").hide();
	}
});