(function($) {
    "use strict";

	// ______________ Page Loading
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-bs-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	$('.table-subheader').click(function(){
		$(this).nextUntil('tr.table-subheader').slideToggle(100);
	});

	// REPLY
	function replay() {
		"use strict";
		
		let replayButtom = document.querySelectorAll('.reply a')
		// Creating Div
		let Div = document.createElement('div')
		Div.setAttribute('class', "comment mt-5 d-grid")
		// creating textarea
		let textArea = document.createElement('textarea')
		textArea.setAttribute('class', "form-control")
		textArea.setAttribute('rows', "5")
		textArea.innerText = "Your Comment";
		// creating Cancel buttons
		let cancelButton = document.createElement('button');
		cancelButton.setAttribute('class', "btn btn-danger");
		cancelButton.innerText = "Cancel";
		
		let buttonDiv = document.createElement('div')
		buttonDiv.setAttribute('class', "btn-list ms-auto mt-2")
		
		// Creating submit button
		let submitButton = document.createElement('button');
		submitButton.setAttribute('class', "btn btn-success ms-3");
		submitButton.innerText = "Submit";
		
		// appending text are to div
		Div.append(textArea)
		Div.append(buttonDiv);
		buttonDiv.append(cancelButton);
		buttonDiv.append(submitButton);
		
		replayButtom.forEach((element, index) => {
		
		element.addEventListener('click', () => {
		let replay = $(element).parent()
		replay.append(Div)
		
		cancelButton.addEventListener('click', () => {
		Div.remove()
		})
		})
		})
		
		
		}
		replay()
		
	// ______________ Horizonatl
	$(document).ready(function() {
      $("a[data-theme]").click(function() {
        $("head link#theme").attr("href", $(this).data("theme"));
        $(this).toggleClass('active').siblings().removeClass('active');
      });

      $("a[data-effect]").click(function() {
        $("head link#effect").attr("href", $(this).data("effect"));
        $(this).toggleClass('active').siblings().removeClass('active');
      });
    });

	// ______________Full screen
	$("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })

	// ______________Quantity Cart Increase & Descrease
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}

		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('div').find('.qty');
			var currentVal = parseInt($qty.val());
			if (!isNaN(currentVal) && currentVal > 0) {
				$qty.val(currentVal - 1);
			}
		});
	});

	// __________MODAL

	// showing modal with effect
	$('.modal-effect').on('click', function(e) {
		e.preventDefault();
		var effect = $(this).attr('data-bs-effect');
		$('#modaldemo8').addClass(effect);
	});

	// hide modal with effect
	$('#modaldemo8').on('hidden.bs.modal', function(e) {
		$(this).removeClass(function(index, className) {
			return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
		});
	});

	// ______________Back to top Button
	$(window).on("scroll", function(e) {
    	if ($(this).scrollTop() > 0) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $("#back-to-top").on("click", function(e){
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });

	// ______________ Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: '#e2e2e9',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Chart-circle
	if ($('.chart-circle-transparent').length) {
		$('.chart-circle-transparent').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: 'rgba(0, 0, 0, 0.1)',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Chart-circle
	if ($('.chart-circle-primary').length) {
		$('.chart-circle-primary').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: 'rgba(112, 94, 200, 0.4)',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Chart-circle
	if ($('.chart-circle-secondary').length) {
		$('.chart-circle-secondary').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: 'rgba(251, 28, 82, 0.4)',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Chart-circle
	if ($('.chart-circle-success').length) {
		$('.chart-circle-success').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: 'rgba(66, 196, 138, 0.5)',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Chart-circle
	if ($('.chart-circle-warning').length) {
		$('.chart-circle-warning').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: 'rgba(255, 171, 0, 0.5)',
			  lineCap: 'round'
			});
		});
	}

	// ______________ Global Search
	$(document).on("click", "[data-bs-toggle='search']", function(e) {
		var body = $("body");

		if(body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		}else{
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});

	$(document).on("click", ".close-btn", function() {
		$("body").removeClass("search-show");
	});

	const DIV_CARD = 'div.card';

	// ______________ Attach Remove
	$(document).on('click', '[data-toggle="remove"]', function(e) {
		let $a = $(this).closest(".attach-supportfiles");
		$a.remove();
		e.preventDefault();
		return false;
	});


	// ______________ Tooltip
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 	 return new bootstrap.Tooltip(tooltipTriggerEl)
	})


	// ______________ Popover
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	html:
	return new bootstrap.Popover(popoverTriggerEl)
	})

	// ______________Live Toast
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')
	if (toastTrigger) {
	toastTrigger.addEventListener('click', () => {
		const toast = new bootstrap.Toast(toastLiveExample)

		toast.show()
	})
	}

	// ______________ Card Remove
	$(document).on('click', '[data-bs-toggle="card-close"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});


	// ______________ Card Remove
	$(document).on('click', '[data-bs-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________ Card Collapse
	$(document).on('click', '[data-bs-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ Card Fullscreen
	$(document).on('click', '[data-bs-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ SWITCHER-toggle ______________//

	$('.layout-setting').on("click", function(e) {
		if (!document.body.classList.contains('dark-mode')) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
			$('body').removeClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('dark-header');
			$('body').removeClass('color-header');
			$('body').removeClass('light-header');
			$('body').removeClass('gradient-header');
            localStorage.setItem("azeadarkMode", true);
            localStorage.removeItem("azealightMode");
			$('#myonoffswitch2').prop('checked', true);
			$('#myonoffswitch5').prop('checked', true);
			$('#myonoffswitch8').prop('checked', true);
		} else {
            $('body').addClass('light-mode');
            $('body').removeClass('dark-mode');
			$('body').removeClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('gradient-header');
            $('body').removeClass('light-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('color-menu');
            localStorage.setItem("azealightMode", true);
            localStorage.removeItem("azeadarkMode");
			$('#myonoffswitch1').prop('checked', true);
			$('#myonoffswitch3').prop('checked', true);
			$('#myonoffswitch6').prop('checked', true);
		}
		localStorageBackup();
		checkOptions();
	});


	  $('.default-menu').on('click', function() {
		var ww = document.body.clientWidth;
		if (ww >= 992) {
			$('body').removeClass('sidenav-toggled');
		}
	});

})(jQuery);