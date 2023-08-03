let html = document.querySelector('html');

//Switcher Styles
function switcherEvents() {
	'use strict';

	/***************** RTL Start*********************/
	$('#myonoffswitch55').on('click', function () {
		if (this.checked) {
			$('body').addClass('rtl');

			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "rtl");
			$(".select2-container").attr("dir", "rtl");
			$('body').removeClass('ltr');
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "static/assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
			});
			localStorage.setItem('azeartl', true)
			localStorage.removeItem('azealtr')
			if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
				checkHoriMenu();
			}
		}
	});
	/***************** RTL End *********************/

	/***************** LTR Start *********************/
	$('#myonoffswitch54').on('click', function () {
		if (this.checked) {
			$('body').addClass('ltr');

			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "ltr");
			$(".select2-container").attr("dir", "ltr");
			$('body').removeClass('rtl');
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "static/assets/plugins/bootstrap/css/bootstrap.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = false; //don't know if both are necessary
				carouselData.options.rtl = false;
				$(element).trigger('refresh.owl.carousel');
			});
			localStorage.setItem('azealtr', true)
			localStorage.removeItem('azeartl')
			if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
				checkHoriMenu();
			}
		}
	});
	/***************** LTR End*********************/

	/***************** LIGHT THEME Start*********************/
	$(document).on("click", '#myonoffswitch1', function() {
        if (this.checked) {
            $('body').addClass('light-mode');
            $('body').removeClass('dark-mode');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('gradient-header');
            $('body').removeClass('light-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('color-menu');
			localStorage.setItem('azealightMode', true)
			localStorage.removeItem('azeadarkMode')
			$('#myonoffswitch3').prop('checked', true);
			$('#myonoffswitch6').prop('checked', true);

        }
		localStorageBackup();
		checkOptions();
    });
	/***************** LIGHT THEME End *********************/

	/***************** DARK THEME Start*********************/
	$(document).on("click", '#myonoffswitch2', function() {
        if (this.checked) {
            $('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
			$('body').removeClass('light-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('dark-header');
			$('body').removeClass('color-header');
			$('body').removeClass('light-header');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');
			$('body').removeClass('gradient-header');

			localStorage.setItem('azeadarkMode', true)
			localStorage.removeItem('azealightMode')
			$('#myonoffswitch5').prop('checked', true);
			$('#myonoffswitch8').prop('checked', true);
        }
		localStorageBackup();
		checkOptions();
    });
	/***************** Dark THEME End*********************/

	/***************** VERTICAL-MENU Start*********************/
	$('#myonoffswitch34').on('click', function () {
		if (this.checked) {
			ActiveSubmenu();
			$('body').removeClass('horizontal');
			$('body').removeClass('horizontal-hover');
			$(".main-content").removeClass("hor-content");
			$(".main-content").addClass("app-content");
			$(".main-container").removeClass("container");
			$(".main-container").addClass("container-fluid");
			$(".header").addClass("app-header");
			$(".header").removeClass("hor-header");
			$(".app-sidebar").removeClass("horizontal-main")
			$(".main-sidemenu").removeClass("container")
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$('body').addClass('sidebar-mini');
			$('body').removeClass('default-logo');
			$('body').removeClass('center-logo');
			localStorage.setItem("azeasidebarMini", "true");
			localStorage.removeItem("azeahorizontal");
			localStorage.removeItem("azeahorizontalHover");
			localStorage.removeItem("azeadefaultlogo");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");

			$('#myonoffswitch13').prop('checked', true);
			$('#switchbtn-defaultlogo').prop('checked', true);
			$('#switchbtn-centerlogo').prop('checked', false);
			// menuClick();
			responsive();
		}
	});
	/***************** VERTICAL-MENU End*********************/

	/***************** HORIZONTAL-CLICK-MENU Start*********************/
	$('#myonoffswitch35').on('click', function () {
		if (this.checked) {
			ActiveSubmenu();
			if (window.innerWidth >= 992) {
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".hor-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$(".app-header").removeClass("hor-header");
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('horizontal-hover');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-menu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			// To enable wrap horizontal style
			document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
			localStorage.setItem("azeahorizontal", true);
			localStorage.removeItem("azeasidebarMini");
			localStorage.removeItem("azeahorizontalHover");
			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
				checkHoriMenu();
				responsive();
			}
		}
	});
	/***************** HORIZONTAL-CLICK-MENU End*********************/

	/***************** HORIZONTAL-HOVER-MENU Start*********************/
	$('#myonoffswitch111').on('click', function () {
		if (this.checked) {
			if (window.innerWidth >= 992) {
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal-hover');
			$('body').addClass('horizontal');
			// // To enable wrap horizontal style
			document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".app-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-menu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
				checkHoriMenu();
				responsive();
			}
			localStorage.setItem("azeahorizontalHover", true);
			localStorage.removeItem("azeasidebarMini");
			localStorage.removeItem("azeahorizontal");
			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");

		}

	});
	/***************** HORIZONTAL-HOVER-MENU End*********************/

	/***************** DEFAULT-MENU Start*********************/
	$(document).on("click", '#myonoffswitch13', function() {
        if (this.checked) {
			$('body').addClass('default-menu');
			$('body').removeClass('sidenav-toggled');
			hovermenu();
			$('body').removeClass('closed-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.setItem("azeadefaultmenu", true);
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");

        }
    });
	/***************** DEFAULT-MENU End*********************/

	/***************** CLOSED-MENU Start*********************/
	$(document).on("click", '#myonoffswitch30', function() {
        if (this.checked) {
			$('body').addClass('closed-menu');
			hovermenu();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.setItem("azeaclosedmenu", true);
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");

        }
    });
	/***************** CLOSED-MENU End*********************/

	/***************** ICON-TEXT-MENU Start*********************/
	$('#myonoffswitch14').click(function() {
        if (this.checked) {
			$('body').addClass('icontext-menu');
			icontext();
			$('body').addClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-menu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.setItem("azeaicontextmenu", true);
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");

        }
    });
	/***************** ICON-TEXT-MENU End*********************/

	/***************** ICON-OVERLAY-MENU Start*********************/
	$('#myonoffswitch15').on('click', function () {
        if (this.checked) {
            $('body').addClass('icon-overlay');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('icontext-menu');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.setItem("azeaiconoverlay", true);
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");

        }
    });
	/***************** ICON-OVERLAY-MENU End*********************/

	/***************** HOVER-SUBMENU-MENU Start*********************/
	$('#myonoffswitch17').on('click', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.setItem("azeahoversubmenu", true);
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");

        }
    });
	/***************** HOVER-SUBMENU-MENU End*********************/

	/***************** HOVER-SUBMENU-MENU-1 Start*********************/
	$('#myonoffswitch18').on('click', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu1');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
			$('body').removeClass('double-menu');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.setItem("azeahoversubmenu1", true);
			localStorage.removeItem("azeadoublemenu");
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");
        }
    });
	/***************** HOVER-SUBMENU-MENU-1 End*********************/

	/***************** DOUBLE-MENU Start*********************/
	$(document).on("click", '#myonoffswitch19', function () {
		if (this.checked) {
			$('body').addClass('double-menu');
			doubleLayoutFn();
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-menu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('sidenav-toggled1');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('double-menu-tabs');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.setItem("azeadoublemenu", true);
			localStorage.removeItem("azeadoublemenutabs");
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");
		}
	});
	/***************** DOUBLE-MENU End*********************/

	/***************** DOUBLE-MENU-TABS Start*********************/
	$(document).on("click", '#myonoffswitch20', function () {
		if (this.checked) {
			$('body').addClass('double-menu-tabs');
			doubleLayoutFn();
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-menu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			$('body').removeClass('sidenav-toggled1');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('double-menu');
			$('body').removeClass('center-logo');
			$('body').removeClass('default-logo');

			localStorage.removeItem("azeadefaultmenu");
			localStorage.removeItem("azeaclosedmenu");
			localStorage.removeItem("azeaicontextmenu");
			localStorage.removeItem("azeaiconoverlay");
			localStorage.removeItem("azeahoversubmenu");
			localStorage.removeItem("azeahoversubmenu1");
			localStorage.removeItem("azeadoublemenu");
			localStorage.setItem("azeadoublemenutabs", true);
			localStorage.removeItem("azeacenterlogo");
			localStorage.removeItem("azeadefaultlogo");
		}
	});
	/***************** DOUBLE-MENU-TABS End*********************/

	/***************** Default Logo Start*********************/
	$(document).on("click", '#switchbtn-defaultlogo', function () {
		if (this.checked) {
			$('body').addClass('default-logo');
			$('body').removeClass('center-logo');
			localStorage.setItem("azeadefaultlogo", true);
			localStorage.removeItem("azeacenterlogo");
		}
	});
	/***************** Default Logo End*********************/

	/***************** Center Logo Start*********************/
	$(document).on("click", '#switchbtn-centerlogo', function () {
		if (this.checked) {
			$('body').addClass('center-logo');
			$('body').removeClass('default-logo');
			localStorage.setItem("azeacenterlogo", true);
			localStorage.removeItem("azeadefaultlogo");
		}
	});
	/***************** Center Logo End*********************/

	/***************** LAYOUT-STYLE Start*********************/
	/*Full Width Layout Start*/
    $('#myonoffswitch9').click(function() {
        if (this.checked) {
            $('body').addClass('layout-fullwidth');
			$('body').removeClass('layout-boxed');
            localStorage.setItem("layout-fullwidth", "True");
			localStorage.removeItem("azeaboxedwidth");
        }
    });
	/*Full Width Layout End*/

	/*Boxed Layout Start*/
    $('#myonoffswitch10').click(function() {
        if (this.checked) {
			$('body').addClass('layout-boxed');
			$('body').removeClass('layout-fullwidth');
			localStorage.setItem("azeaboxedwidth", true);
			localStorage.removeItem("azeafullwidth");
        }
    });
	/*Boxed Layout End*/
	/***************** LAYOUT-STYLE End*********************/

	/***************** LAYOUT-POSITIONS Start*********************/

	/*Header-Position Styles Start*/
	$('#myonoffswitch11').click(function() {
        if (this.checked) {
            $('body').addClass('fixed-layout');
			$('body').removeClass('scrollable-layout');

            localStorage.setItem("azeafixed", true);
			localStorage.removeItem("azeascrollable");

        } else {
            $('body').removeClass('fixed-layout');
            localStorage.setItem("fixed-layout", "false");
        }
    });
	$('#myonoffswitch12').click(function() {
        if (this.checked) {
            $('body').addClass('scrollable-layout');
			$('body').removeClass('fixed-layout');

            localStorage.removeItem("azeafixed");
			localStorage.setItem("azeascrollable", true);

        } else {
            $('body').removeClass('scrollable-layout');
            localStorage.setItem("scrollable-layout", "false");
        }
    });
	/*Header-Position Styles End*/
	/***************** LAYOUT-POSITIONS End*********************/

	/***************** MENU-STYLES Start*********************/

	/*Light Menu Start*/
    $(document).on("click", '#myonoffswitch3', function() {
        if (this.checked) {
            $('body').addClass('light-menu');
            $('body').removeClass('color-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');

            localStorage.setItem("azeaLightmenu", true);
			localStorage.removeItem("azeaDarkmenu");
			localStorage.removeItem("azeaGradientmenu");
			localStorage.removeItem("azeaColormenu");

        } else {
            $('body').removeClass('light-menu');
        }
    });
	/*Light Menu End*/

    /*Color Menu Start*/
    $(document).on("click", '#myonoffswitch4', function() {
        if (this.checked) {
            $('body').addClass('color-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('dark-menu');
			$('body').removeClass('gradient-menu');

            localStorage.removeItem("azeaLightmenu");
			localStorage.removeItem("azeaDarkmenu");
			localStorage.removeItem("azeaGradientmenu");
			localStorage.setItem("azeaColormenu", true);

        } else {
            $('body').removeClass('color-menu');
        }
    });
	/*Color Menu End*/

    /*Dark Menu Start*/
    $(document).on("click", '#myonoffswitch5', function() {
        if (this.checked) {
            $('body').addClass('dark-menu');
			$('body').removeClass('color-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('gradient-menu');

            localStorage.removeItem("azeaLightmenu");
			localStorage.setItem("azeaDarkmenu", true);
			localStorage.removeItem("azeaGradientmenu");
			localStorage.removeItem("azeaColormenu");

        } else {
            $('body').removeClass('dark-menu');
        }
    });
	/*Dark Menu End*/

	/*Gradient Menu Start*/
    $(document).on("click", '#myonoffswitch25', function() {
        if (this.checked) {
            $('body').addClass('gradient-menu');
            $('body').removeClass('color-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('dark-menu');

            localStorage.removeItem("azeaLightmenu");
			localStorage.removeItem("azeaDarkmenu");
			localStorage.setItem("azeaGradientmenu", true);
			localStorage.removeItem("azeaColormenu");

        } else {
            $('body').removeClass('gradient-menu');
        }
    });
	/*Gradient Menu End*/
	/***************** MENU-STYLES End*********************/

	/***************** HEADER-STYLES Start*********************/

	/*Light Header Start*/
    $(document).on("click", '#myonoffswitch6', function() {
        if (this.checked) {
            $('body').addClass('light-header');
			$('body').removeClass('color-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('gradient-header');

            localStorage.removeItem("azeaColorheader");
			localStorage.removeItem("azeaDarkheader");
			localStorage.removeItem("azeaGradientheader");
			localStorage.setItem("azeaLightheader", true);

        }
    });
	/*Light Header End*/

	/*Color Header Start*/
    $(document).on("click", '#myonoffswitch7', function() {
        if (this.checked) {
            $('body').addClass('color-header');
			$('body').removeClass('light-header');
			$('body').removeClass('dark-header');
			 $('body').removeClass('gradient-header');

            localStorage.setItem("azeaColorheader", true);
			localStorage.removeItem("azeaDarkheader");
			localStorage.removeItem("azeaGradientheader");
			localStorage.removeItem("azeaLightheader");

        }
    });
	/*Color Header End*/

	/*Dark Header Start*/
    $(document).on("click", '#myonoffswitch8', function() {
        if (this.checked) {
            $('body').addClass('dark-header');
			$('body').removeClass('color-header');
			$('body').removeClass('light-header');
			 $('body').removeClass('gradient-header');

            localStorage.removeItem("azeaColorheader");
			localStorage.setItem("azeaDarkheader", true);
			localStorage.removeItem("azeaGradientheader");
			localStorage.removeItem("azeaLightheader");

        }
    });
	/*Dark Header End*/

	/*Gradient Header Start*/
    $(document).on("click", '#myonoffswitch26', function() {
        if (this.checked) {
            $('body').addClass('gradient-header');
			$('body').removeClass('dark-header');
			$('body').removeClass('color-header');
			$('body').removeClass('light-header');

            localStorage.removeItem("azeaColorheader");
			localStorage.removeItem("azeaDarkheader");
			localStorage.setItem("azeaGradientheader", true);
			localStorage.removeItem("azeaLightheader");

        }
    });
	/*Gradient Header End*/
	/***************** HEADER-STYLES End*********************/


	/***************** Add Switcher Classes *********************/
	//LTR & RTL
	if (!localStorage.getItem('azeartl') && !localStorage.getItem('azealtr')) {

		/*RTL Layout Style*/
		// $('body').addClass('rtl');
		/*RTL Layout Style End*/

		/*LTR Layout Style*/
		// $('body').addClass('ltr');
		/*LTR Layout Style End*/

	}
	//Light-mode & Dark-mode
	if (!localStorage.getItem('azealightMode') && !localStorage.getItem('azeadarkMode')) {
		
		/*Light THEME Start*/
		// $('body').addClass('light-mode');
		/*Light THEME End*/

		/*DARK THEME Start*/
		// $('body').addClass('dark-mode');
		/*Dark THEME End*/
	}

	//Vertical-menu & Horizontal-menu
	if (!localStorage.getItem('azeavertical') && !localStorage.getItem('azeahorizontal') && !localStorage.getItem('azeahorizontalHover')) {
		
		/* Horizontal THEME */
		// $('body').addClass('horizontal');
		/* Horizontal THEME */

		/* Horizontal Hover */
		// $('body').addClass('horizontal-hover');
		/* Horizontal Hover */
	}

	//Vertical Layout Style
	if (!localStorage.getItem('azeadefaultmenu') && !localStorage.getItem('azeaclosedmenu') && !localStorage.getItem('azeaicontextmenu')&& !localStorage.getItem('azeaiconoverlay')&& !localStorage.getItem('azeahoversubmenu')&& !localStorage.getItem('azeahoversubmenu1')&& !localStorage.getItem('azeadoublemenu')&& !localStorage.getItem('azeadoublemenutabs')) {
		/**Default-Menu**/
		// $('body').addClass('default-menu');
		/**Default-Menu**/

		/**closed-Menu**/
		// $('body').addClass('closed-menu');
		/**closed-Menu**/

		/**Icon-Text-Menu**/
		// $('body').addClass('icontext-menu');
		/**Icon-Text-Menu**/

		/**Icon-Overlay-Menu**/
		// $('body').addClass('icon-overlay');
		/**Icon-Overlay-Menu**/

		/**Hover-Sub-Menu**/
		// $('body').addClass('hover-submenu');
		/**Hover-Sub-Menu**/

		/**Hover-Sub-Menu1**/
		// $('body').addClass('hover-submenu1');
		/**Hover-Sub-Menu1**/

		/**Double-Menu**/
		// $('body').addClass('double-menu');
		/**Double-Menu**/

		/**Double-Menu-Tabs**/
		// $('body').addClass('double-menu-tabs');
		/**Double-Menu-Tabs**/
	}

	//Horizontal Logo Style
	if (!localStorage.getItem('azeadefaultlogo') && !localStorage.getItem('azeacenterlogo')) {
		/**Default-Logo**/
		// $('body').addClass('default-logo');
		/**Default-Logo**/

		/**Center-Logo**/
		// $('body').addClass('center-logo');
		/**Center-Logo**/

	}

	/*---  Boxed Layout Start --*/
	if (!localStorage.getItem('azeafullwidth') && !localStorage.getItem('azeaboxedwidth')) {
	// $('body').addClass('layout-boxed');
	}
	/*---  Boxed Layout End --*/

	/*--- Header-Position Styles Start --*/
	if (!localStorage.getItem('azeafixed') && !localStorage.getItem('azeascrollable')) {
	// $('body').addClass('scrollable-layout');
	}
	/*--- Header-Position Styles End --*/

	//Menu Styles
	if (!localStorage.getItem('azeaLightmenu') && !localStorage.getItem('azeaColormenu') && !localStorage.getItem('azeaDarkmenu') && !localStorage.getItem('azeaGradientmenu')) {
		
		/*--- Light Menu Start --*/
		// $('body').addClass('light-menu');
		/*--- Light Menu End --*/

		/*--- Color Menu Start --*/
		// $('body').addClass('color-menu');
		/*--- Color Menu End --*/

		/*--- Dark Menu Start --*/
		// $('body').addClass('dark-menu');
		/*--- Dark Menu End --*/

		/*--- Gradient Menu Start --*/
		// $('body').addClass('gradient-menu');
		/*--- Gradient Menu End --*/
	}
	//Header Styles
	if (!localStorage.getItem('azeaLightheader') && !localStorage.getItem('azeaColorheader') && !localStorage.getItem('azeaDarkheader') && !localStorage.getItem('azeaGradientheader')) {
		
		/*--- Light Header Start --*/
		// $('body').addClass('light-header');
		/*--- Light Header End --*/

		/*--- Color Header Start --*/
		// $('body').addClass('color-header');
		/*--- Color Header End --*/

		/*--- Dark Header Start --*/
		// $('body').addClass('dark-header');
		/*--- Dark Header End --*/

		/*--- Gradient Header Start --*/
		// $('body').addClass('gradient-header');
		/*--- Gradient Header End --*/

	}
	/***************** Add Switcher Classes *********************/


}
switcherEvents();


(function () {
	"use strict";
	/***************** RTL has Class *********************/
	let bodyRtl = $('body').hasClass('rtl');
	if (bodyRtl) {
		$('body').addClass('rtl');

		$('#slide-left').removeClass('d-none');
		$('#slide-right').removeClass('d-none');
		$("html[lang=en]").attr("dir", "rtl");
		$(".select2-container").attr("dir", "rtl");
		$('body').removeClass('ltr');
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "static/assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});

	}
	/***************** RTL has Class *********************/

	/***************** Horizontal has Class *********************/
	let bodyhorizontal = $('body').hasClass('horizontal');
	if (bodyhorizontal) {
		$('body').addClass('horizontal');
		$(".main-content").addClass("hor-content");
		$(".main-content").removeClass("app-content");
		$(".main-container").addClass("container");
		$(".main-container").removeClass("container-fluid");
		$(".app-header").addClass("hor-header");
		$(".hor-header").removeClass("app-header");
		$(".app-sidebar").addClass("horizontal-main")
		$(".main-sidemenu").addClass("container")
		$('body').removeClass('sidebar-mini');
		$('body').removeClass('sidenav-toggled');
		$('body').removeClass('horizontal-hover');
		$('body').removeClass('default-menu');
		$('body').removeClass('icontext-menu');
		$('body').removeClass('icon-overlay');
		$('body').removeClass('closed-menu');
		$('body').removeClass('hover-submenu');
		$('body').removeClass('hover-submenu1');
        // To enable wrap horizontal style
        document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
		// menuClick();
		if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
			checkHoriMenu();
			responsive();
			ActiveSubmenu();
		}
		if (window.innerWidth >= 992) {
			let li = document.querySelectorAll('.side-menu li')
			li.forEach((e, i) => {
				e.classList.remove('is-expanded')
			})
			var animationSpeed = 300;
			// first level
			var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
			var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
			ul1.removeClass('open');
		}
	}
	/***************** Horizontal has Class *********************/

	/***************** Horizontal Hover has Class *********************/
	let bodyhorizontal1 = $('body').hasClass('horizontal-hover');
    if (bodyhorizontal1) {
        if (window.innerWidth >= 992) {
            let li = document.querySelectorAll('.side-menu li')
            li.forEach((e, i) => {
                e.classList.remove('is-expanded')
            })
            var animationSpeed = 300;
            // first level
            var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
            var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
            ul1.removeClass('open');
        }
        $('body').addClass('horizontal-hover');
        $('body').addClass('horizontal');
        // To enable wrap horizontal style
        document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
        $(".main-content").addClass("hor-content");
        $(".main-content").removeClass("app-content");
        $(".main-container").addClass("container");
        $(".main-container").removeClass("container-fluid");
        $(".app-header").addClass("hor-header");
        $(".app-header").removeClass("app-header");
        $(".app-sidebar").addClass("horizontal-main")
        $(".main-sidemenu").addClass("container")
        $('body').removeClass('sidebar-mini');
        $('body').removeClass('sidenav-toggled');
        $('body').removeClass('default-menu');
        $('body').removeClass('icontext-menu');
        $('body').removeClass('icon-overlay');
        $('body').removeClass('closed-menu');
        $('body').removeClass('hover-submenu');
        $('body').removeClass('hover-submenu1');
		if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
			checkHoriMenu();
			responsive();
		}

    }
	/***************** Horizontal Hover has Class *********************/

	/***************** CLOSEDMENU has Class *********************/
	let bodyclosed = $('body').hasClass('closed-menu');
	if (bodyclosed) {
		$('body').addClass('closed-menu');
		if (!document.querySelector('body').classList.contains('login-page')) {
			hovermenu();
		}
		$('body').addClass('sidenav-toggled');
	}
	/***************** CLOSEDMENU has Class *********************/

	/***************** ICONTEXT MENU has Class *********************/
	let bodyicontext = $('body').hasClass('icontext-menu');
	if (bodyicontext) {
		$('body').addClass('icontext-menu');
		if (!document.querySelector('body').classList.contains('login-page')) {
			icontext();
		}
		$('body').addClass('sidenav-toggled');
	}
	/***************** ICONTEXT MENU has Class *********************/

	/***************** ICONOVERLAY MENU has Class *********************/
	let bodyiconoverlay = $('body').hasClass('icon-overlay');
	if (bodyiconoverlay) {
		$('body').addClass('icon-overlay');
		if (!document.querySelector('body').classList.contains('login-page')) {
			hovermenu();
		}
		$('body').addClass('sidenav-toggled');
	}
	/***************** ICONOVERLAY MENU has Class *********************/

	/***************** HOVER-SUBMENU has Class *********************/
	let bodyhover = $('body').hasClass('hover-submenu');
	if (bodyhover) {
		$('body').addClass('hover-submenu');
		if (!document.querySelector('body').classList.contains('login-page')) {
			hovermenu();
		}
		$('body').addClass('sidenav-toggled');
	}
	/***************** HOVER-SUBMENU has Class *********************/

	/***************** HOVER-SUBMENU has Class *********************/
	let bodyhover1 = $('body').hasClass('hover-submenu1');
	if (bodyhover1) {
		$('body').addClass('hover-submenu1');
		if (!document.querySelector('body').classList.contains('login-img')) {
			// hovermenu();
		}
		$('body').addClass('sidenav-toggled');
	}
	/***************** HOVER-SUBMENU has Class *********************/

	/***************** Double-Menu has Class *********************/
	let bodydoublemenu = $('body').hasClass('double-menu');
	if (bodydoublemenu) {
		$('body').addClass('double-menu');
		if (!document.querySelector('body').classList.contains('login-page')) {
			doublemenu();
		}
	}
	/***************** Double-Menu has Class *********************/

	/***************** Double-Menu-Tabs has Class *********************/
	let bodydoublemenutabs = $('body').hasClass('double-menu-tabs');
	if (bodydoublemenutabs) {
		$('body').addClass('double-menu-tabs');
		if (!document.querySelector('body').classList.contains('login-page')) {
			doublemenu();
		}
	}
	/***************** Double-Menu-Tabs has Class *********************/

	if (document.querySelector("body").classList.contains("login-page") && document.querySelector("body").classList.contains("layout-boxed")) {

		document.querySelector("body").classList.remove("layout-boxed")
	}

	checkOptions();
})()

function checkOptions() {

    // rtl
    if (document.querySelector('body').classList.contains('rtl')) {
        $('#myonoffswitch55').prop('checked', true);
    }
    // horizontal
    if (document.querySelector('body').classList.contains('horizontal')) {
        $('#myonoffswitch35').prop('checked', true);
    }
    // horizontal-hover
    if (document.querySelector('body').classList.contains('horizontal-hover')) {
        $('#myonoffswitch111').prop('checked', true);
    }
    // light header
    if (document.querySelector('body').classList.contains('light-header')) {
        $('#myonoffswitch6').prop('checked', true);
    }
    // color header
    if (document.querySelector('body').classList.contains('color-header')) {
        $('#myonoffswitch7').prop('checked', true);
    }
    // gradient header
    if (document.querySelector('body').classList.contains('gradient-header')) {
        $('#myonoffswitch26').prop('checked', true);
    }
    // dark header
    if (document.querySelector('body').classList.contains('dark-header')) {
        $('#myonoffswitch8').prop('checked', true);
    }

    // light menu
    if (document.querySelector('body').classList.contains('light-menu')) {
        $('#myonoffswitch3').prop('checked', true);
    }
    // color menu
    if (document.querySelector('body').classList.contains('color-menu')) {
        $('#myonoffswitch4').prop('checked', true);
    }
    // gradient menu
    if (document.querySelector('body').classList.contains('gradient-menu')) {
        $('#myonoffswitch25').prop('checked', true);
    }
    // dark menu
    if (document.querySelector('body').classList.contains('dark-menu')) {
        $('#myonoffswitch5').prop('checked', true);
    }
    // scrollable-layout
    if (document.querySelector('body').classList.contains('scrollable-layout')) {
        $('#myonoffswitch12').prop('checked', true);
    }
    // default-menu
    if (document.querySelector('body').classList.contains('default-menu')) {
        $('#myonoffswitch13').prop('checked', true);
    }
    // icontext-menu
    if (document.querySelector('body').classList.contains('icontext-menu')) {
        $('#myonoffswitch14').prop('checked', true);
    }
    // icon-overlay
    if (document.querySelector('body').classList.contains('icon-overlay')) {
        $('#myonoffswitch15').prop('checked', true);
    }
    // closed-menu
    if (document.querySelector('body').classList.contains('closed-menu')) {
        $('#myonoffswitch30').prop('checked', true);
    }
    // hover-submenu
    if (document.querySelector('body').classList.contains('hover-submenu')) {
        $('#myonoffswitch17').prop('checked', true);
    }
    // hover-submenu1
    if (document.querySelector('body').classList.contains('hover-submenu1')) {
        $('#myonoffswitch18').prop('checked', true);
    }
    // double-menu
    if (document.querySelector('body').classList.contains('double-menu')) {
        $('#myonoffswitch19').prop('checked', true);
    }
    // double-menu-tabs
    if (document.querySelector('body').classList.contains('double-menu-tabs')) {
        $('#myonoffswitch20').prop('checked', true);
    }
	// default-logo style
	if (document.querySelector('body').classList.contains('default-logo')) {
		$('#switchbtn-defaultlogo').prop('checked', true);
	}
	// center-logo style
	if (document.querySelector('body').classList.contains('center-logo')) {
		$('#switchbtn-centerlogo').prop('checked', true);
	}
}
checkOptions()

function resetData() {
    $('#myonoffswitch34').prop('checked', true);
    $('#myonoffswitch54').prop('checked', true);
    $('#myonoffswitch1').prop('checked', true);
    $('#myonoffswitch3').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    $('#myonoffswitch9').prop('checked', true);
    $('#myonoffswitch11').prop('checked', true);
    $('#myonoffswitch13').prop('checked', true);
    $('body')?.removeClass('dark-mode');
    $('body')?.removeClass('light-menu');
    $('body')?.removeClass('dark-menu');
    $('body')?.removeClass('color-menu');
    $('body')?.removeClass('gradient-menu');
    $('body')?.removeClass('dark-header');
    $('body')?.removeClass('light-header');
    $('body')?.removeClass('color-header');
    $('body')?.removeClass('gradient-header');
    $('body')?.removeClass('layout-boxed');
    $('body')?.removeClass('icontext-menu');
    $('body')?.removeClass('icon-overlay');
    $('body')?.removeClass('closed-menu');
    $('body')?.removeClass('hover-submenu');
    $('body')?.removeClass('hover-submenu1');
    $('body')?.removeClass('double-menu');
    $('body')?.removeClass('double-menu-tabs');
	$(".tab-content-show").addClass("active");
	$(".tab-content-double").removeClass("active")
    $('body')?.removeClass('sidenav-toggled');
    $('body')?.removeClass('scrollable-layout');
	$('body')?.removeClass('default-logo');
	$('body')?.removeClass('center-logo');
    $('body')?.removeClass('rtl');
    $('body')?.addClass('ltr');
    //Vertical
    $('body').removeClass('horizontal');
    $('body').removeClass('horizontal-hover');
    $(".main-content").removeClass("hor-content");
    $(".main-content").addClass("app-content");
    $(".main-container").removeClass("container");
    $(".main-container").addClass("container-fluid");
	$(".header").addClass("app-header");
	$(".header").removeClass("hor-header");
    $(".app-sidebar").removeClass("horizontal-main")
    $(".main-sidemenu").removeClass("container")
    $('#slide-left').removeClass('d-none');
    $('#slide-right').removeClass('d-none');
    $('body').addClass('sidebar-mini');
	$('body').removeClass('default-logo');
	$('body').removeClass('center-logo');

    //ltr
    $('#slide-left').removeClass('d-none');
    $('#slide-right').removeClass('d-none');
    $("html[lang=en]").attr("dir", "ltr");
	$(".select2-container").attr("dir", "ltr");
    $('body').removeClass('rtl');
    $("head link#style").attr("href", $(this));
    (document.getElementById("style").setAttribute("href", "static/assets/plugins/bootstrap/css/bootstrap.min.css"));
    var carousel = $('.owl-carousel');
    $.each(carousel, function (index, element) {
        // element == this
        var carouselData = $(element).data('owl.carousel');
        carouselData.settings.rtl = false; //don't know if both are necessary
        carouselData.options.rtl = false;
        $(element).trigger('refresh.owl.carousel');
    });
    localStorage.setItem('azealtr', true)
    localStorage.removeItem('azeartl')
    if (!document.querySelector('body').classList.contains('login-page') && !document.querySelector('body').classList.contains('error-bg')) {
        checkHoriMenu();
		ActiveSubmenu();
		responsive();
    }

}