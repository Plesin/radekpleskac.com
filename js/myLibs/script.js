/**
 * @author Radek Pleskac radekpleskac@gmail.com
 */

(function($){		
	
	/**
	 * Formular validace a ajax submiting
	 */
	
	$.fn.contactForm = function(options) {
		
		$.fn.contactForm.defaults = {
			"hintClass"			: "", //css trida, ktera se prida pro elementy, kdyz je v nich napsany hint
			"borderColor"		: {
				"focus"			: "#8ECC17",
				"blur"			: "#666"
			},
			"required"			: ["email"] //pole ktere musi byt vyplnene			
 		}
		
		var o = $.extend({}, $.fn.contactForm.defaults, options);
		
		return this.each(function() {
			
			var $this = $(this),
				$fields = $this.find("input[type='text'], textarea"),
				$submit = $this.find("input[type='submit']"),
				ajaxData = {};
									
			function bindEvents() {				
				
				$fields.add($submit).focus(function(){
					animateField($(this), o.borderColor.focus);
					
					var val = $.trim($(this).val()),
						title = $.trim($(this).attr("title"));
					
					if (val == title)
						$(this).val("").removeClass(o.hintClass);
				});
				
				$fields.add($submit).blur(function(){
					animateField($(this), o.borderColor.blur);
					
					var val = $.trim($(this).val()),
						title = $.trim($(this).attr("title"));
					
					if (val == "")
						$(this).val($(this).attr("title")).addClass(o.hintClass);
				});
				
				$this.submit(function(){
					return false;
				})
				
				$submit.click(function() {
					var valid = validateForm();
					
					if (valid)
						postMessage(onAjaxSuccess);
					
					return false;
				});
			}
			
			function postMessage(onSuccess) {
				$.ajax({
					type: "post",
					url: "/ajax/contactForm.php",
					data: ajaxData,
					dataType: "json",
					success: function(result) {
						onSuccess();
					},
					error: function(xhr, err, e) {
						
					}
				});
			}
			
			function onAjaxSuccess() {
				showMessage("Thanks for your message. I'll reply as soon as I can.");
				$this[0].reset();
				$fields.addClass(o.hintClass);
				setTimeout(function() {					
					showMessage("");
				}, 5000);
			}
			
			function validateForm() {
				var valid = true;
				showMessage("");
				
				$fields.each(function() {
					var val = $.trim($(this).val()),
						fieldName = $(this).attr("name"); 
										
					if ($(this).data("required") && val == "" || val == $(this).attr("title")) {
						valid = false;
						showMessage("Please fill in all fields.");
						return false;												
					}
					if ( fieldName == "email") {
						valid = isValidEmail(val);
						if(!valid) {
							showMessage("Please provide a valid email address.");
							return false;
						}							
					}
					
					ajaxData[fieldName] = val;
																
				});
				
				return valid;				
			}
			
			function showMessage(msg) {
				if ($("#messageText").length > 0)
					$("#messageText").text(msg);
				else {
					$this.append("<div id='messageText'></div>");
					$("#messageText").text(msg);
				}								
			}
			
			function isValidEmail(email) {
				var reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
				return reEmail.test(email);
			}
						
			//pokud je v nastaveni urceno, ktera pole jsou povinna, pridaji se jQuery data required=true u techto elementu
			function setFieldsData() {
				if (o.required.constructor == Array && o.required.length > 0) {
					
					for ( var i = 0; i < o.required.length; i++) {
						$("[name=" + o.required[i] + "]").data("required", true);
					}					

				}
			}
			
			function animateField($elem, color) {
				$elem.animate({
					borderTopColor: color,
					borderRightColor: color,
					borderBottomColor: color,
					borderLeftColor: color
				}, 600);
				
			}
			
			function init() {
				$this[0].reset();
				bindEvents();
				setFieldsData();
			}
			
			init();
											
		});
		
	}
		
})(jQuery);
$(document).ready(function() {
	
	/**
	 * Skrolovani pomoci jQuery.LocalScroll
	 */
	var hash = location.hash;
	if (hash != "" && (hash == "#home" || hash == "#work" || hash == "#contact"))
		$(window).scrollTo( $(hash), 0 );
	
	function setCurrentLink() {
		var hash = location.hash,
			$links = $("#links").find("a");
			
		if (hash == "" || hash == "#home") {
			$links.removeClass("current");
			$("#homeLink").addClass("current");
		}		
		else if (hash == "#work") {
			$links.removeClass("current");
			$("#workLink").addClass("current");
		}
		else if (hash == "#contact") {
			$links.removeClass("current");
			$("#contactLink").addClass("current");
		}
		
		Cufon.replace('#links a', { hover:true, fontFamily: 'Bebas Neue', textShadow: '#000 1px 1px', color: "#FFE503" });
		Cufon.replace('#links a.current', { hover:true, fontFamily: 'Bebas Neue', textShadow: '#000 1px 1px', color: "#8ECC17" });
		
	}
	
	setCurrentLink();
	
	//iPhone zatim nejak blbne pro localscroll, tak zatim vynechat z animovaneho scrolovani
	if (!(/iPhone/i.test(navigator.userAgent))) {
		$('nav, .content').localScroll({
			hash: true,
			duration: 200,
			easing: 'easeOutExpo',
			onBefore: function() {
				scrolling = 0;			
				return scrolling;
			},
			onAfter: function() {
				scrolling = 1;
				setCurrentLink();			
				return scrolling;
			}
		});	
	}	

	/**
	 * Inicializace kontaktniho formulare
	 */
	$("#contactForm").contactForm({
		"hintClass" : "formHint",
		"required"	: ["name", "email", "message"]		
	});
	
	/**
	 * Zobrazovani info k nahledum v sekci Work
	 */
	$(".thumb").hover(function() {
		$(this).find(".thumbInfo").animate({
			top: "0px"
		}, 100);
	},
	function() {
		$(this).find(".thumbInfo").animate({
			top: "-160px"
		}, 100);
	});
	
	/**
	 * Skryt adresni radek u iPhone a Androidu
	 */
	
	if (/iPhone/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
		setTimeout(function () {
	      window.scrollTo(0, 1);
	    }, 1000);	
	}
	
});
