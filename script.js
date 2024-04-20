const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOunt
    })
        .to(".boundingelem",{
            y:0,
            ease: Expo.easeInOunt,
            duration: 0.8,
            delay: -1,
            stagger: .1
        })
        .from("#herofooter",{
            y: -10,
            opacity: 0,
            duration: 1,
            delay: -1,
            ease: Expo.easeInOunt
        })
}

var timeout;

function circleChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        },100)
    })
}

function circleMouseFollower(xscale,yscale){
     window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
     })
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1
        })
    })
});