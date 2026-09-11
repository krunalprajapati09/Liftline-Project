gsap.registerPlugin(ScrollTrigger);

/* ==========================================================
   HERO SECTION
========================================================== */

const sectionHero = gsap.timeline({});

sectionHero.from(".hero__heading-1", {
    x: -100,
    duration: 0.7,
    opacity: 0
});

sectionHero.from(".hero__heading-2", {
    x: 100,
    duration: 0.7,
    opacity: 0
}, '<');

sectionHero.from(".hero__left-text", {
    y: 100,
    duration: 0.7,
    opacity: 0
});
sectionHero.from(".hero__cta", {
    y: 100,
    duration: 0.4,
    opacity: 0
}, '<50%');
sectionHero.from(".hero__rating", {
    y: 100,
    duration: 0.4,
    opacity: 0
}, '<');

/**** ScrollTrigger ****/

gsap.to(".overlay", {
    height: "100vh",
    ease: "none",
    scrollTrigger: {
        trigger: '.section--hero',
        start: 'top 10%',
        end: "+=800",
        scrub: 1,
    }
});
gsap.to(".hero__content", {
    y: 150,
    ease: "none",
    duration: 0.4,
    scrollTrigger: {
        trigger: '.section--hero',
        start: 'top 20%',
        end: "+=800",
        scrub: 1,
    }
});
/* ==========================================================
   ABOUT SECTION
========================================================== */
gsap.from(".about__content", {
    y: 100,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".section--about",
        start: 'top 70%',
    }
});


/* ==========================================================
   Banner SECTION
========================================================== */
/**** ScrollTrigger ****/
gsap.to(".banner__item", {
    x: "-100vw",
    ease: "none",
    duration: 1,
    scrollTrigger: {
        trigger: ".section--about",
        start: 'center center',
        end: '+=900',
        scrub: 1.5
    }
});
const workoutContent = gsap.timeline({
    scrollTrigger: {
        trigger: '.workout__content',
        start: "15% 10%",
        end: '+=800',
        pin: true,
    }
});
const workoutCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.workout__content',
        start: "10% 10%",
        end: '+=1000',
        scrub: 1,
        pin: false,

    }
});


workoutCard.from(".workout__img-1", { opacity: 0 })
    .from(".workout__img-1", { y: 300, }, "<")
    .to(".workout__img-1", { scale: 0.95 }, "<")

    .to(".workout__heading-1", { color: '#fff' }, '<')
    .from(".workout__line-1", { width: "0%",}, "<")
    .from(".workout__number-1", { y: -100, }, '<')

    .from(".workout__img-2", { opacity: 0 })
    .from(".workout__img-2", { y: 300, }, '<')
    .to(".workout__img-2", { scale: 0.95 }, "<")
    .to(".workout__heading-2", { color: '#fff' }, '<')
    .from(".workout__line-2", { width: "0%", }, '<')
    .from(".workout__number-2", { y: -100, }, '<')

    .from(".workout__img-3", { opacity: 0 })
    .from(".workout__img-3", { y: 300, }, "<")
    .to(".workout__img-3", { scale: 0.95 }, "<")
    .to(".workout__heading-3", { color: '#fff' }, '<')
    .from(".workout__line-3", { width: "0%", }, '<')
    .from(".workout__number-3", { y: -100, }, '<')

    .from(".workout__img-4", { opacity: 0 })
    .from(".workout__img-4", { y: 300, }, "<")
    .to(".workout__img-4", { scale: 0.95 }, '<')
    .to(".workout__heading-4", { color: '#fff' }, '<')
    .from(".workout__line-4", { width: "0%", }, '<')
    .from(".workout__number-4", { y: -100, }, '<')

/* ==========================================================
   CLASSES SECTION
========================================================== */

$(".class__card").on("mouseenter", function () {
    gsap.to(this, {
        width: "40%"
    });
    gsap.to($(this).find(".class-description"), {
        height: "100%"
    });
});

$(".class__card").on("mouseleave", function () {
    gsap.to(this, {
        width: "25%"
    });
    gsap.to($(this).find(".class-description"), {
        height: "0%"
    });
});

gsap.from(".heading--class,.class__list", {
    y: 100,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".section--classes",
        start: 'top 70%',
    }
});

/* ==========================================================
   TRAINER SECTION
========================================================== */

const trainerHeading = gsap.timeline({
    scrollTrigger: {
        trigger: '.section--trainer',
        start: "top top",
        end: '+=1000',
        scrub: true,
        markers: true
    }
});

trainerHeading.from(".trainer__heading-1", { scale: 0 })

    .to(".trainer__heading-1", { filter: "blur(20px)", duration: 0.2, })
    .to(".trainer__heading-1", { opacity: 0 }, "<")

    .from(".trainer__heading-2", { scale: 0 })
    .to(".trainer__heading-2", { filter: "blur(20px)", duration: 0.2, })
    .to(".trainer__heading-2", { opacity: 0 }, "<")

    .from(".trainer__heading-3", { scale: 0 })

gsap.from(".card-items-1", {
    rotateY: 90,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".trainer__cards",
        start: "42% 90%",
    }
});
gsap.from(".card-items-2", {
    rotateY: 90,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".trainer__cards",
        start: "55% 90%",
    }
});

gsap.from(".card-items-3", {
    rotateY: 90,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".trainer__cards",
        start: "68% 90%",
    }
});
gsap.from(".card-items-4", {
    rotateY: 90,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".trainer__cards",
        start: "78% 90%",
    }
});
/* ==========================================================
   TESTIMONIAL SECTION
========================================================== */

/* ==========================================================
   Slick Slider
========================================================== */
$('.testimonial__card').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: "none",
    arrows: true,
    dots: false,
    rtl: false,
    variableWidth: false,
    fade: true,
    cssEase: 'ease-in-out',
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false
        }
    },
    ]
});

/* ==========================================================
   TESTIMONIAL SECTION
========================================================== */
gsap.from(".plans__cards", {
    y: 200,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".section--plans",
        start: 'top top',
    }
});

/* ==========================================================
   LOCATION SECTION
========================================================== */
let open = false

$(".location__list-item").on("click", function () {
    open = !open;

    gsap.to($(this).find(".location__list-content"), {
        maxHeight: open ? "180px" : "0px",
        duration: 0.5
    })
    gsap.to($(this).find(".icon-span-line-2"), { rotate: open ? 0 : "90deg" });
    gsap.from($(this).find(".location__list-content ul"), {
        y: 200, duration: 0.5, yoyo: true
    });
});


/* ==========================================================
   CONTECT SECTION
========================================================== */

const contectMassage = gsap.timeline({
    scrollTrigger: {
        trigger: '.section--contect',
        start: "center 10%",
        duration: 1,
        ease: "none",
    }
});

contectMassage.from(".contect__massage", { y: 200 })
    .from(".contect__heading", { x: -1000, duration: 1.5, })
