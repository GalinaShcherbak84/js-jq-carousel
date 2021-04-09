$(document).ready(function(){
    //refs
    var nextBtn = $('.next');
    var prevBtn = $('.prev');
    var navDots = $('.nav i');
    
    // Naviga con il mouse
    //Next
    nextBtn.click(function(){
        //console.log('next');
        nextPrevSlide('next');
    })
    //Prev
    prevBtn.click(function(){
        //console.log('prev');
        nextPrevSlide('prev');
    })
    //Navigazione con keyboard
    $(document).keydown(function(e){
        console.log(e);
        console.log(e.keyCode);
        if(e.keyCode == 37){
            nextPrevSlide('prev');
        }else if(e.keyCode == 39){
            nextPrevSlide('next');
        }

    })
    //Dot navigation
    navDots.click(function(){
        nextPrevSlide($(this));
    })
//End doc ready
})
// functions
// Naviga tra le slides
function nextPrevSlide(direction){
    console.log(direction);
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');
    //reset
    activeImage.removeClass('active');
    activeCircle.removeClass('active');
    //next
    if(direction === 'next'){
        if(activeImage.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }
    //prev
    else if(direction === 'prev'){
        if(activeImage.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else{
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }else{
        direction.addClass('active');
        console.log(direction.index());
        var pos = direction.index();
        $('.images img').eq(pos).addClass('active');
    }
}
 