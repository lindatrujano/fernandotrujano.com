// init the controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});

var tl = new TimelineMax();

    //Bring project page up
    tl.to("#unpin", .5, {transform: "translateY(6%)"});

    // tl.to(".profile-pic", .35 ,{top: "1%", width: "60px", height: "60px", right: '55%'}, "-=.35");

    tl.to(".profile-pic", .35 ,{top: "10px", width: "60px", height: "60px", right: '55%'}, "-=.35");

    // tl.fromTo("#name", .35 ,{fontSize: "5em"},{top: "1.5%", fontSize: "3.5em", right: '21%'}, "-=.35");
    tl.fromTo("#name", .35 ,{fontSize: "5em"},{top: "10px", fontSize: "3.5em", right: '21%'}, "-=.35");


    tl.to("#links", .05 ,{left: '50%'}, "-=.35");

    tl.to("#links", .001 ,{fontSize: "10px"}, "-=.3");

    // tl.to("#links", .35 ,{bottom: "94%"}, "-=.35");
    tl.to("#links", .35 ,{top: "30px"}, "-=.35");


    TweenMax.to(window, 2, {scrollTo: {y: "1"}}); //Start at top

// panel section pin
 var scene = new ScrollMagic.Scene({
        triggerElement: "section#pin",
        duration: 1500
    })
    .setTween(tl)
    .setPin("section#pin")
    .addTo(controller)

    .on ("progress", function(e){
        console.log(e.progress);
        if (e.progress <= 0)     TweenMax.to(window, 2, {scrollTo: {y: "1"}}); //Address werid jumbing bug with scrollTo
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
