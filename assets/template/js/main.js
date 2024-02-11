$(document).ready(function(){
    $('.partners_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows:$('.wrapper'),
        prevArrow: '<button id="prev" type="button" class="slick-prev slick-arrow"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#c6a277" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline></svg></button>',
        nextArrow: '<button id="next" type="button" class="slick-next slick-arrow"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#c6a277" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline></svg></button>'
      });


    $('.orange-block').slick({
        variableWidth: true,
        infinite: true,
        draggable:false,
        focusOnSelect:false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase:'linear'
    });

    $('.gallery_slider').slick({
        centerMode: true,
 
        slidesToShow: 3,
        variableWidth: true,
        dots:true,
        prevArrow: '<button id="prev2" type="button" class="slick-prev slick-arrow"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#c6a277" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline></svg></button>',
        nextArrow: '<button id="next2" type="button" class="slick-next slick-arrow"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 9.3 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#c6a277" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 8.5,8.5 0.5,16.5"></polyline></svg></button>'
      
    });

    $('.tab-head').click(function(){
        let currentAttr = $(this).data('tab');

        $('.tab-content').removeClass('active')
        $('.tab-head').removeClass('active')

        $(this).addClass('active');
        $(`.tab-content[data-tab=${currentAttr}]`).addClass('active');
    })


    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var targetId = $(this).attr('href').substring(1);
        var $targetElement = $('#' + targetId);

        if ($targetElement.length) {
            var offsetTop = $targetElement.offset().top;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 1000);
        }
    });

      
})


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY - 500;
    var headerHeight = header.offsetHeight;
    
    var scrollPercentage = scrollPosition / headerHeight;
    var colorOpacity = Math.min(scrollPercentage, 1);
  
    header.style.backgroundColor = 'rgba(50, 50, 50, ' + colorOpacity + ')';
  });