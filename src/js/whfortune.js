@@include('partials/jquery.min.js')
@@include('partials/webp.js')




$(document).ready(function () {
    //set default degree (360*8)
    var degree = 2880;
    //number of clicks = 0
    var clicks = 0;
    /*WHEEL SPIN FUNCTION*/

    $('#spin').click(function () {
        //add 1 every click
        clicks++;

        var $pointer = $('.fortune__point');
        var pointerX = $pointer.offset().left + $pointer.width() * 0.5;
        var pointerY = $pointer.offset().top + $pointer.height() * 0.5;
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
            $('.fortune__prize').html($(prize).data('prize'));
        }, 5500);
    })
})




