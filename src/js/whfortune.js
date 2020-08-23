@@include('partials/jquery.min.js')
@@include('partials/webp.js')




$(document).ready(function () {
    //set default degree (360*8)
    var degree = 2880;
    //number of clicks = 0
    var clicks = 0;
    $('.js-spin').click(function () {
        clicks++;
        if (clicks > 1){
            return false
        }
        $(this).slideUp();
        $('.fortune__itog').slideUp();

        var $pointer = $('.fortune__point');
        var pointerX = $pointer.offset().left + $pointer.width() * 0.5;
        var pointerY = $pointer.offset().top + ($pointer.height() - 40) * 0.5;
        $pointer.hide();

        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        totalDegree = newDegree + extraDegree;

        $('.fortune__item').each(function () {
            $('.fortune__inner').css({
                'transform': 'rotate(' + totalDegree + 'deg)'
            });
        });

        setTimeout(function () {
            var prize = document.elementFromPoint(pointerX, pointerY);
            var txt = $(prize).data('prize');
            $('.fortune__prize').html(txt);
            $('.fortune__itog').slideDown();
        }, 5500);
    })
})




