export default function SlideModule() {
    if (document.querySelector('.swiper-banner')) {
        const swiper = document.querySelector('.swiper-banner');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            });
            
            // swiper.slideTo(1);
            swiper.on('slideChangeTransitionStart', function () {
                const swiper_S = swiper.el.querySelector('.swiper-slide-active video');
                
                if (swiper_S) {
                    swiper.el.querySelectorAll('.swiper-slide video').forEach((x) => {
                        x.pause();
                    })
                }
            });

            function muteVideoWhenOverScroll() {
                const pinStopVideo = document.querySelector('.swiper-banner').offsetHeight;
                if (window.scrollY >= pinStopVideo) {
                    document.querySelectorAll('.swiper-banner video').forEach((v) => {
                        v.pause();
                    })
                }
            }
            window.addEventListener('scroll', muteVideoWhenOverScroll);
        }
        catch (err) {
            console.log(err)
        }
    }

    document.querySelectorAll('.swiper-custom').forEach(el => {
        let slider = el.querySelector('.swiper');
        let pagination = el.querySelector('.swiper-pagination');
        let prevBtn = el.querySelector('.swiper-button-prev');
        let nextBtn = el.querySelector('.swiper-button-next');

        //not slide
        let touchMove = el.querySelector('.notslide');
        if (touchMove) {
            var notSlide = false;
        } else {
            var notSlide = true;
        }

        //pagi dynamic
        let pagiDynamic = el.querySelector('.dynamic');
        if (pagiDynamic) {
            var dynamic = true;
        } else {
            var dynamic = false;
        }

        //loop
        let slideLoop = el.querySelector('.not-loop');
        if (slideLoop) {
            var loops = false;
        } else {
            var loops = true;
        }

        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                loop: loops,
                allowTouchMove: notSlide,

                autoplay: {
                    delay: 4000,
                },

                pagination: {
                    el: pagination,
                    clickable: true,
                    dynamicBullets: dynamic,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-demo')) {
        const swiper = document.querySelector('.swiper-demo');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}