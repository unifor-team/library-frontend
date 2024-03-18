(function() {
    var calculateHeight;
  
    calculateHeight = function() {
      var $content, contentHeight, finalHeight, windowHeight;
      $content = $('#overlay-content');
      contentHeight = parseInt($content.height()) + parseInt($content.css('margin-top')) + parseInt($content.css('margin-bottom'));
      windowHeight = $(window).height();
      finalHeight = windowHeight > contentHeight ? windowHeight : contentHeight;
      return finalHeight;
    };
  
    $(document).ready(function() {
      $(window).resize(function() {
        if ($(window).height() < 560 && $(window).width() > 600) {
          $('#overlay').addClass('short');
        } else {
          $('#overlay').removeClass('short');
        }
        return $('#overlay-background').height(calculateHeight());
      });
      $(window).trigger('resize');
      $('#popup-trigger').click(function() {
        return $('#overlay').addClass('open').find('.signup-form input:first').select();
      });
      return $('#overlay-background,#overlay-close').click(function() {
        return $('#overlay').removeClass('open');
      });
    });
  
  }).call(this);

  (function() {
    var calculateHeight;
  
    calculateHeight = function() {
      var $content, contentHeight, finalHeight, windowHeight;
      $content = $('#over-content');
      contentHeight = parseInt($content.height()) + parseInt($content.css('margin-top')) + parseInt($content.css('margin-bottom'));
      windowHeight = $(window).height();
      finalHeight = windowHeight > contentHeight ? windowHeight : contentHeight;
      return finalHeight;
    };
  
    $(document).ready(function() {
      $(window).resize(function() {
        if ($(window).height() < 560 && $(window).width() > 600) {
          $('#over').addClass('short');
        } else {
          $('#over').removeClass('short');
        }
        return $('#over-background').height(calculateHeight());
      });
      $(window).trigger('resize');
      $('#popup-triggers').click(function() {
        return $('#over').addClass('open').find('.signup-form input:first').select();
      });
      return $('#over-background,#over-close').click(function() {
        return $('#over').removeClass('open');
      });
    });
  
  }).call(this);