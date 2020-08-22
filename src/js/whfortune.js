@@include('partials/jquery.min.js')
@@include('partials/webp.js')



$(function () {
//set default degree (360*5)
    var degree = 2880;
    //number of clicks = 0
    var clicks = 0;
        /*WHEEL SPIN FUNCTION*/
        $('#spin').click(function(){
            //add 1 every click
            clicks ++;

            /*multiply the degree by number of clicks
          generate random number between 1 - 360,
        then add to the new degree*/
            var newDegree = degree*clicks;
            var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
            totalDegree = newDegree+extraDegree;

            /*let's make the spin btn to tilt every
            time the edge of the section hits
            the indicator*/
            $('#wheel .sec').each(function(){
                var t = $(this);
                var noY = 0;

                var c = 0;
                var n = 1;
                var interval = setInterval(function () {
                    c++;
                    if (c === n) {
                        clearInterval(interval);
                    }

                    var aoY = t.offset().top;
                    $("#txt").html(aoY);
                    console.log(t);

                    /*23.7 is the minumum offset number that
                    each section can get, in a 30 angle degree.
                    So, if the offset reaches 23.7, then we know
                    that it has a 30 degree angle and therefore,
                    exactly aligned with the spin btn*/
                    if(aoY < 23.89){
                        console.log('<<<<<<<<');
                        $('#spin').addClass('spin');
                        setTimeout(function () {
                            $('#spin').removeClass('spin');
                        }, 300);
                    }
                }, 300);

                $('#inner-wheel').css({
                    'transform' : 'rotate(' + totalDegree + 'deg)'
                });

                noY = t.offset().top;

            });
        })
})

