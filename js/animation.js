window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

// window.mobilecheck = function(){ return true } ;  //Force mobile


var tl = new TimelineMax({
    onComplete: function(){
        $('#unpin').css('overflow', "auto");
    }
});

    //Bring project page up
    tl.to("#unpin", .5, {transform: "translateY(60px)"});

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {//Firefox vendor tools
         tl.fromTo(".profile-pic", .35 ,{left: "calc((50vw + 0em) - 125px)"}, {top: "10px", width: "60px", height: "60px", left: '-moz-calc(0vw + 1em + 0px)'}, "-=.35");
    }
    else {
        tl.fromTo(".profile-pic", .35 ,{left: "calc((50vw + 0em) - 125px)"}, {top: "10px", width: "60px", height: "60px", left: 'calc((0vw + 1em) + 0px)'}, "-=.35");
    }


    // tl.fromTo(".profile-pic", .35 ,{left: "-moz-calc(50vw + 0em - 125px)"}, {top: "10px", width: "60px", height: "60px", left: '-moz-calc(0vw + 1em + 0px)'}, "-=.35");

    // tl.fromTo(".profile-pic", .35 ,{left: "-webkit-calc(50vw + 0em - 125px)"}, {top: "10px", width: "60px", height: "60px", left: '-webkit-calc(0vw + 1em + 0px)'}, "-=.35");
    tl.fromTo("#name", .35 ,{fontSize: "5em", top:"calc(41% + 0px)" },{top: "calc(0% + 5px)", fontSize: "3.5em"}, "-=.35");
    if (window.innerWidth < 445) tl.to("#last-name", .35, {opacity: 0, fontSize: ".5em"}, "-=.35").to("#name", .35, {left: "-15%"}, '-=.35') //delete last name if small window
    else tl.to("#name", .35 ,{ right: '21%'}, "-=.35");

    // tl.to("#links", .05 ,{left: '50%'}, "-=.35");

    tl.fromTo("#links", .05 ,{left: "calc(0vw + 0em)"},{left: "calc(57vw + 1em)"}, "-=.35");


    tl.to("#links", .001 ,{fontSize: "1em"}, "-=.3");

    tl.to("#links", .35 ,{top: "30px"}, "-=.35");
    tl.to("#description", .35 ,{opacity: 0}, "-=.35");

    TweenMax.to(window, 2, {scrollTo: {y: "1"}}); //Start at top

    if (window.mobilecheck()) tl.pause();


 if (!window.mobilecheck()){

    // init the controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });

     var scene = new ScrollMagic.Scene({
            triggerElement: "section#pin",
            duration: 1500
        })
        .setTween(tl)
        .setPin("section#pin")
        .addTo(controller)

        .on ("progress", function(e){
            console.log(e.progress);
            if (e.progress <= 0)    {
                console.log("Correct scroll")
                TweenMax.to(window, 2, {scrollTo: {y: "1"}}); //Address werid jumbing bug with scrollTo
            }
        })

        .on("end", function(e){
            console.log("done");
            if (e.scrollDirection == "FORWARD"){
                $('#unpin').css('overflow', "auto");
                $("#projects").css ('cursor', 'auto')
            }
            else if (e.scrollDirection == "REVERSE"){
                $('#unpin').css('overflow', 'hidden');
                $("#projects").css ('cursor', 'pointer')
            }
        })
    //Scroll to the projects
    $("#projects").click(function(e){
        console.log("Projects click");
        e.preventDefault();
        TweenMax.to(window, 2, {scrollTo: {y: "max"}});
    });
 }

//Mobile support - don't use ScrollMagic
else {
    tl.timeScale(.75);

    var scrollUp = 0;
    // Processes a scroll Up event and reverses the animation if necessary
    function processScrollUp() {
        scrollUp ++;
        if ($("#unpin").scrollTop() === 0 && scrollUp > 5) {
            $('#unpin').css('overflow', "hidden");
            tl.reverse();
        }
    }

    // Processes a scroll Down event and starts the animation if necessary
    function processScrollDown(){
        console.log("scroll down")
        scrollUp = 0
        if ($("body").scrollTop() < 5) {
            tl.play();
        }
    }

    //Handle Mouse Scroll
    $(window).bind('mousewheel', function(event) { //This is probably not needed for mobile, but I'll leave it in for now
        event.originalEvent.wheelDelta >= 0 ? processScrollUp() : processScrollDown();
    });

    // Handle mobile touch event
    var lastY = 0 ;
    document.addEventListener("touchmove", function(e) {
        currentY =  e.changedTouches[0].clientY;
        if (lastY) lastY < currentY ? processScrollUp(): processScrollDown();
        lastY = currentY;
     }, true);

    $("#projects").click(function(e){
        tl.play();
    });
}
