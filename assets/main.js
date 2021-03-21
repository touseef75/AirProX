$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive:{
        0:{
            items:0
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})