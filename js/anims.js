const screenWidth = screen.width;

const mobile = 576;

const tablet = 768;

const desktop = 992;

const loadDelay = 1.4;

// On load animationer

gsap.fromTo(".navbar .logo",{x:'-35vw',opacity:0}, {x:0,opacity:1, duration: 0.7,ease: "back.out"});

gsap.fromTo(".sektion1 .headLine h1",{x:'-100vw',opacity:0}, {x: 0,opacity:1, duration: 2/loadDelay,ease: "back.out",delay:.5/loadDelay});

gsap.fromTo(".sektion1 p",{x: '100vw',opacity:0}, {x: 0,opacity:1, duration: 2/loadDelay,ease: "back.out",delay:1/loadDelay});

gsap.fromTo(".sektion1 .sektionButtons .bg-skyBlue",{x: '-100vw',opacity:0}, {x: 0,opacity:1, duration: 1/loadDelay,ease: "sine.out",delay:1.5/loadDelay});

gsap.fromTo(".sektion1 .sektionButtons .bg-originalOrange",{x: '100vw',opacity:0}, {x: 0,opacity:1, duration: 1/loadDelay,ease: "sine.out",delay:2/loadDelay});

gsap.fromTo(".sektion1 .soMe #fb",{y: '20vh',opacity:0}, {y: 0,opacity:1, duration: 1/loadDelay,ease: "back.out",delay:2.5/loadDelay});

gsap.fromTo(".sektion1 .soMe #fb",{opacity:0}, {opacity:1, duration: 1.5/loadDelay,ease: "none",delay:2.5/loadDelay});

gsap.fromTo(".sektion1 .soMe #li",{y: '20vh'}, {y: 0, duration: 1/loadDelay,ease: "back.out",delay:3/loadDelay});

gsap.fromTo(".sektion1 .soMe #li",{opacity:0}, {opacity:1, duration: 1.5/loadDelay,ease: "none",delay:3/loadDelay});

gsap.fromTo(".sektion1 .soMe #ig",{y: '20vh'}, {y: 0, duration: 1/loadDelay,ease: "back.out",delay:3.5/loadDelay});

gsap.fromTo(".sektion1 .soMe #ig",{opacity:0}, {opacity:1, duration: 1.5/loadDelay,ease: "none",delay:3.5/loadDelay});

gsap.fromTo(".sektion1  .arrow",{opacity:0,y:'5vh'}, {opacity:1,y:0, duration: 1.1/loadDelay,ease: "back.out",delay:4/loadDelay});


// Scroll animationer

if ( screenWidth >= desktop ) {

    const ikonerTimeLine = gsap.timeline({paused: true});
    ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon1", {y: 40, opacity: 0}, {
        y: 0,
        opacity: 1,
        duration: .3,
        ease: 'back.out'
    });
    ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon2", {y: 40, opacity: 0}, {
        y: 0,
        opacity: 1,
        duration: .3,
        ease: 'back.out'
    });
    ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon3", {y: 40, opacity: 0}, {
        y: 0,
        opacity: 1,
        duration: .3,
        ease: 'back.out'
    });
    ikonerTimeLine.fromTo(".sektion2 .gridParent .rightContent .icons #ikon4", {y: 40, opacity: 0}, {
        y: 0,
        opacity: 1,
        duration: .3,
        ease: 'back.out'
    });

    gsap.fromTo(".sektion2 .gridParent .imgContainer", {x: -500}, {
        scrollTrigger: {
            trigger: ".sektion2 .gridParent .imgContainer",
            start: "top bottom",
            end: "bottom bottom",
            immediateRender: false,
            scrub: true
        },
        x: 0
    });

    gsap.fromTo(".sektion2 .gridParent .rightContent", {x: '40vw'}, {
        scrollTrigger: {
            trigger: ".sektion2 .gridParent .rightContent",
            start: "top bottom",
            end: "bottom bottom",
            immediateRender: false,
            scrub: true,
            onUpdate: self => {
                if (self.progress >= 0.90) {
                    ikonerTimeLine.play();
                } else {
                    ikonerTimeLine.reverse();
                }
            }
        },
        x: 0
    });

    gsap.fromTo(".sektion3 .container .cardContainer #kort1", {x: '200'}, {
        scrollTrigger: {
            trigger: ".sektion3 .container .splitPayment",
            start: "top bottom",
            end: "center bottom",
            immediateRender: false,
            scrub: true,
        },
        x: 0
    });

    gsap.fromTo(".sektion3 .container .cardContainer #kort3", {x: '-200'}, {
        scrollTrigger: {
            trigger: ".sektion3 .container .splitPayment",
            start: "top bottom",
            end: "center bottom",
            immediateRender: false,
            scrub: true,
        },
        x: 0
    });

}



// Hover animationer

if ( screenWidth > tablet ){

    const facebookIcon = document.querySelector('#fb');

    let hovering = false;

    function toggleHover(){
        hovering = false;
        console.log(hovering)
    }

    facebookIcon.addEventListener("mouseenter", e =>  {

        let shakingicon =  gsap.timeline({onComplete:toggleHover,paused:true});

        if (hovering == false){
            hovering = true;
            shakingicon.to('#fb',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#fb',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#fb',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#fb',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.play()
        }
    });

    const linkedInIcon = document.querySelector('#li');

    linkedInIcon.addEventListener("mouseenter", e =>  {
        let shakingicon =  gsap.timeline({onComplete:toggleHover,paused:true});
        if (hovering == false){
            hovering = true;
            shakingicon.to('#li',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#li',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#li',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#li',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.play()
        }
    });

    const instagramIcon = document.querySelector('#ig');

    instagramIcon.addEventListener("mouseenter", e =>  {
        let shakingicon =  gsap.timeline({onComplete:toggleHover,paused:true});
        if (hovering == false){
            hovering = true;
            shakingicon.to('#ig',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#ig',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#ig',{rotation:10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.to('#ig',{rotation:-10,repeat:1,yoyo:true,duration:0.15,ease:'back.Inout'});
            shakingicon.play()
        }
    });

    const logo = document.querySelector('.logo');

    logo.addEventListener("mouseenter", e =>  {
        gsap.to('.logo',{scale:1.25,x:10,duration:0.4,ease:'back.Inout'});
    });

    logo.addEventListener("mouseleave", e =>  {
        gsap.to('.logo',{scale:1,x:0,duration:0.4,ease:'back.Inout'});
    });

}

// Idle animationer

const arrowIdle = gsap.timeline({});

arrowIdle.to(".sektion1  .arrow",{y:-10,repeat:-1,yoyo:true,duration:.5,delay:4.5,ease:'back.Inout'});

