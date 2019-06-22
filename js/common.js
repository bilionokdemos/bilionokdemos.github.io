$(function() {

	$('.hamburger').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$(".header-menu").toggleClass("menu-active");
	});
	
		$('.open-popup-link').magnificPopup({
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});



	var products = []
	var item = $('.products-price').length;

	function SortDescending() {
		let suprice = [];
		$(".products-price").each(function (i) {
			suprice.push(parseInt($(this).text().match(/\d+/g), 10))
			products.push($(this));
		});

		let m = -1;
		let max = 0;
		let order = 0

		for (var i = 0; i < item; i++) {
			for (var k = 0; k < item; k++) {
				if (suprice[k] > m) {
					m = suprice[k]
					max = k;
				}
			}
			m = 0;
			suprice[max] = -1

			order = order + 1;
			products[max].closest(".products-item").css("order", order)
		}

	}

	function SortIncrease() {
		let suprice = [];
		$(".products-price").each(function (i) {
			suprice.push(parseInt($(this).text().match(/\d+/g), 10))
			products.push($(this));
		});

		let m = 9999999;
		let max = 0;
		let order = 0

		for (var i = 0; i < item; i++) {
			for (var k = 0; k < item; k++) {
				if (suprice[k] < m) {
					m = suprice[k]
					max = k;
				}
			}
			m = 9999999;
			suprice[max] = 9999999

			order = order + 1;
			products[max].closest(".products-item").css("order", order)
		}
	}

	$(".cheap").click(function () {
		SortDescending();
	})

	$(".expensive").click(function () {
		SortIncrease();
	});



});
