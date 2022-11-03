
var observer = new IntersectionObserver(function(entries) {
	// since there is a single target to be observed, there will be only one entry
    var viewport = document.getElementById('js-product-page__sticky-cart');
	if(entries[0]['isIntersecting'] === true) {
		viewport.classList.remove('product-page__sticky-cart--active');
	}
	else {
        viewport.classList.add('product-page__sticky-cart--active');
	}
}, { threshold: [0, 0.5, 1] });
var quantitySelector = document.getElementById('js-sticky-add-to-cart');
observer.observe(quantitySelector);
