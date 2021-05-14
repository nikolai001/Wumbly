const screenWidth = screen.width;

const mobile = 576;

// On load animationer

gsap.fromTo(".sektion1 .headLine h1",{x: '-100vw'}, {x: 0, duration: 2,ease: "bounce.out"});

gsap.fromTo(".sektion1 p",{x: '100vw'}, {x: 0, duration: 2,ease: "bounce.out",delay:.5});

gsap.fromTo(".sektion1 .sektionButtons .bg-skyBlue",{x: '-100vw'}, {x: 0, duration: 2,ease: "bounce.out",delay:1});

gsap.fromTo(".sektion1 .sektionButtons .bg-originalOrange",{x: '100vw'}, {x: 0, duration: 2,ease: "bounce.out",delay:1});


// Scroll animationer

// Hover animationer

if ( screenWidth >= mobile ){

}

// Idle animationer