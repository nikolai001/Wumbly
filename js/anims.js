const screenWidth = screen.width;

const mobile = 576;

const loadDelay = 0.4;

// On load animationer

gsap.fromTo(".navbar .logo",{x:'-35vw'}, {x:0, duration: 0.7,ease: "back.out"});

gsap.fromTo(".sektion1 .headLine h1",{x:'-100vw'}, {x: 0, duration: 2,ease: "back.out",delay:loadDelay});

gsap.fromTo(".sektion1 p",{x: '100vw'}, {x: 0, duration: 2,ease: "back.out",delay:.5+loadDelay});

gsap.fromTo(".sektion1 .sektionButtons .bg-skyBlue",{x: '-100vw'}, {x: 0, duration: 1,ease: "sine.out",delay:1+loadDelay});

gsap.fromTo(".sektion1 .sektionButtons .bg-originalOrange",{x: '100vw'}, {x: 0, duration: 1,ease: "sine.out",delay:1+loadDelay});

gsap.fromTo(".sektion1 .soMe #fb",{y: '20vh'}, {y: 0, duration: 1,ease: "back.out",delay:1+loadDelay});

gsap.fromTo(".sektion1 .soMe #fb",{opacity:0}, {opacity:1, duration: 1.5,ease: "none",delay:1+loadDelay});

gsap.fromTo(".sektion1 .soMe #li",{y: '20vh'}, {y: 0, duration: 1,ease: "back.out",delay:1.3+loadDelay});

gsap.fromTo(".sektion1 .soMe #li",{opacity:0}, {opacity:1, duration: 1.5,ease: "none",delay:1.3+loadDelay});

gsap.fromTo(".sektion1 .soMe #ig",{y: '20vh'}, {y: 0, duration: 1,ease: "back.out",delay:1.6+loadDelay});

gsap.fromTo(".sektion1 .soMe #ig",{opacity:0}, {opacity:1, duration: 1.5,ease: "none",delay:1.6+loadDelay});

gsap.fromTo(".sektion1  .arrow",{opacity:0,y:'5vh'}, {opacity:1,y:0, duration: 1.1,ease: "back.out",delay:1.6+loadDelay});


// Scroll animationer

const ikonerTimeLine = gsap.timeline({ paused:true});
ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon1", {y:40,opacity:0}, {y:0,opacity:1,duration:.5,ease:'back.out'});
ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon2", {y:40,opacity:0}, {y:0,opacity:1,duration:.5,ease:'back.out'});
ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon3", {y:40,opacity:0}, {y:0,opacity:1,duration:.5,ease:'back.out'});
ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon4", {y:40,opacity:0}, {y:0,opacity:1,duration:.5,ease:'back.out'});

gsap.fromTo(".sektion2 .gridParent .imgContainer", {x:-500}, {
    scrollTrigger:{
        trigger:".sektion2 .gridParent .imgContainer",
        start:"top bottom",
        end:"bottom bottom",
        immediateRender: false,
        scrub:true
    },
    x:0
});

gsap.fromTo(".sektion2 .gridParent .rightContent", {x:'40vw'}, {
    scrollTrigger:{
        trigger:".sektion2 .gridParent .rightContent",
        start:"top bottom",
        end:"bottom bottom",
        immediateRender: false,
        scrub:true,
        onUpdate: self => {
            if(self.progress >= 0.90) {
                ikonerTimeLine.play();
            } else {
                ikonerTimeLine.reverse();
            }
        }
    },
    x:0
});

// Hover animationer

if ( screenWidth >= mobile ){

}

// Idle animationer