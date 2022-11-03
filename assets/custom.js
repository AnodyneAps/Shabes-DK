/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$('.ProductItem__ColorSwatchItem:not(a)').on('mouseover', function () {
  $(this).find('input[type=radio]').checked = ! $(this).find('input[type=radio]').checked;
  $(this).find('label').trigger('click');
});
$('a.ProductItem__ColorSwatchItem').on('mouseover', function () {
  $(this).find('input[type=radio]').checked = ! $(this).find('input[type=radio]').checked;
  $(this).parents('.ProductItem').find('.ColorSwatch').removeClass('is-active');
  $(this).find('.ColorSwatch').addClass('is-active');
  
  var productItem = $(this).parents('.ProductItem'), variantUrl = $(this).find('input[type=radio]').attr('data-variant-url');
  productItem.find('.ProductItem__ImageWrapper').attr('href', variantUrl);
  productItem.find('.ProductItem__Title > a').attr('href', variantUrl); // If we have a custom image for the variant, we change it

  var originalImageElement = productItem.find('.ProductItem__Image:not(.ProductItem__Image--alternate)');
  originalImageElement.attr('data-image-id', $(this).find('input[type=radio]').attr('data-image-id'));
  originalImageElement.attr('srcset', $(this).find('input[type=radio]').attr('data-image-url'));
  originalImageElement.attr('data-widths', $(this).find('input[type=radio]').attr('data-image-widths'));
  originalImageElement.attr('data-sizes', 'auto');
});
$('a.ProductItem__ColorSwatchItem').on('mouseout', function () {
  var productItem1 = $(this).parents('.ProductItem'), variantUrl1 = $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-variant-url');
  productItem1.find('.ProductItem__ImageWrapper').attr('href', variantUrl1);
  productItem1.find('.ProductItem__Title > a').attr('href', variantUrl1);
  
  var originalImageElement1 = productItem1.find('.ProductItem__Image:not(.ProductItem__Image--alternate)');
  originalImageElement1.attr('data-image-id', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-id'));
  originalImageElement1.attr('srcset', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-url'));
  originalImageElement1.attr('data-widths', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-widths'));
  originalImageElement1.attr('data-sizes', 'auto');
  
  $(this).parents('.ProductItem__ColorSwatchList').find('.ColorSwatch').removeClass('is-active');
  $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').next('.ColorSwatch').addClass('is-active');
});
$('a.ProductItem__ColorSwatchItem, .More--colors .HorizontalList__Item').on('click', function () {
  window.location.href = $(this).attr('href');
});


  // Get the modal
  var modal = document.getElementById("shippingModal");

  var btns = document.getElementsByClassName('js-modal-btn');
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("sh-close")[0];
  
  // When the user clicks the button, open the modal 

  for (var i = 0;i<btns.length;i+=1){
    var btn = btns[i];
    btn.onclick = function() {
        modal.style.display = "block";
    }
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

///////////////////////////////
// *** TEKST OPEN CLOSE *** //
/////////////////////////////

  var Allreadmore = document.getElementsByClassName('text_area_open');

  for (var i = 0;i<Allreadmore.length;i+=1){
    var btn = Allreadmore[i];
    btn.onclick = function() {
      //var carousel = btn.closest('.carousel')
      //var flkty = Flickity.data(carousel); 
      var commonParrent = this.parentElement;
      commonParrent.classList.toggle('text_area--open');
      console.log(flkty)
      flkty.resize();
    }
  }

  flkty.on( 'change', function( index ) {
    var sliderOpen = this.slider.getElementsByClassName('text_area--open')[0];
    if (sliderOpen) {
      var button = sliderOpen.getElementsByClassName('text_area_open')[0];
      if (button) {
        button.click()
      }
    }
    
  });

