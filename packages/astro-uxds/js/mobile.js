$(document).ready(function() {
  //Responsive menu for mobile
  $('#open-menu').click(function() {
      $(".sidebar").addClass('is-visible');
      $(".masthead").addClass('is-visible');
      $(".menu-overlay").css("opacity", "1.0");
      $(".menu-overlay").css("pointer-events", "auto");
  });
  $('.close-menu .close').click(function() {
    $(".sidebar").removeClass('is-visible').addClass('is-hidden');
    $(".masthead").removeClass('is-visible').addClass('is-hidden');
    //   $(".navigation").removeClass('expose');
    $(".menu-overlay").css("opacity", "0");
    $(".menu-overlay").css("pointer-events", "none");
  });
//   $('#close-menu2').click(function() {
//       $(".navigation").addClass('hide');
//       $(".masthead").addClass('hide');
//       $(".navigation").removeClass('expose');
//       $(".masthead").removeClass('expose');
//       $(".menu-overlay").css("opacity", "0");
//       $(".menu-overlay").css("pointer-events", "none");
//   });

  // IMAGE ZOOM
  function imgZoom(theImg, theCaption) {
      // Create new offscreen image object to get native image dimensions so we can set max zoom
      var measuredImage = new Image();
      measuredImage.src = theImg;
      measuredImage.onload = function() {
          $('.img-modal-content').attr('src', theImg);
          $('.img-modal-content').css({ 'max-width': measuredImage.naturalWidth, 'max-height': measuredImage.naturalHeight });
          $('.img-modal-caption').html(theCaption);
          $('.img-modal').fadeIn(250);
      }
  };
  $('.apos-slideshow .apos-slideshow-item img').click(function() {
      imgZoom($(this).attr('src'), $(this).attr('alt'));
  });
  $('.img-modal').click(function() {
      $('.img-modal').fadeOut(250);
  });

  // ANIMATED GIFS
  // The way apos does images is to put the image path both in the .apos-slideshow-item 'backgound-image' property and in
  // and actual img element contained within. The process below basically uses the background image as storage for the path.
  // On page load, it swaps in a standard placeholder png in the img src and adds a class. When a user clicks on the placeholder
  // gif, we pull the path to the actual gif from apos-slideshow-item 'backgound-image' property and then pass it along to 
  // the imgZoom function for display

  //on page load replaces all gif images with placeholder image and adds animated gif class - also sets background size of
  //container item to something small so gif playing in the background won't bleed over the edges of the placeholder 
  $('.apos-slideshow .apos-slideshow-item img[src$=".gif"]').closest('.apos-slideshow-item').css('background-size', '10px 10px');
  $('.apos-slideshow .apos-slideshow-item img[src$=".gif"]').attr('src', '/img/astro2.0/gif-placeholder.png').addClass('animated-gif');
  $('.animated-gif').click(function() {
      // grab the gif url from the background image attribute stored in the parent apos div
      // Edge does not return quotes around the url so strip quotes first to make the string consistent across browsers
      var gifSrc = $(this).closest('.apos-slideshow-item--gif').css('background-image').replace(/["]/g, '').slice(4, -1);
      imgZoom(gifSrc, $(this).attr('alt'));
  });
});