const screenWidth = screen.width;

const mobile = 576;

// On load animationer

gsap.fromTo(".sektion1 .headLine h1",{translate: '-100vw'}, {translate: 0, duration: 2,ease: "bounce.out"});

gsap.fromTo(".sektion1 p",{translate: '100vw'}, {translate: 0, duration: 2,ease: "bounce.out",delay:.5});

gsap.fromTo(".sektion1 .sektionButtons .bg-skyBlue",{translate: '-100vw'}, {translate: 0, duration: 2,ease: "bounce.out",delay:1});

gsap.fromTo(".sektion1 .sektionButtons .bg-originalOrange",{translate: '100vw'}, {translate: 0, duration: 2,ease: "bounce.out",delay:1});


// Scroll animationer

// Hover animationer

if ( screenWidth >= mobile ){

}

// Idle animationer