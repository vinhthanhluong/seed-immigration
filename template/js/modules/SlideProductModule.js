export default function SlideProductModule() {
    function slideThumbs() {

        if (document.querySelector('#slide-thumbs')) {
            const swiper = document.querySelector('#slide-thumbs');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination');
            const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-button-next');
            try {
                const thumbsmall = new Swiper('#thumbs-small', {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        320: {
                            spaceBetween: 10,
                            slidesPerView: 3,
                        },

                        768: {
                            spaceBetween: 10,
                            slidesPerView: 4,

                        }
                    }
                });

                const thumbbig = new Swiper('#thumbs-big', {
                    speed: 1000,
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    thumbs: {
                        swiper: thumbsmall,
                    },
                });
                //  click slide
                // if ($('.pro-color.cl-w').length) {
                //     $('.pro-color.cl-w').on('click', function () {
                //         thumbbig.slideTo(1);
                //     });
                // }
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    $('#slide-thumbs').length && slideThumbs();

    //slide thumb foreach
    if ($('.aqweqwed')) {
        document.querySelectorAll('.swiper-thumbs').forEach(el => {
            const swiper = el.querySelector('.slide-thumbs');
            const slider = el.querySelector('.swiper-container');
            const pagination = el.querySelector('.swiper-pagination');
            const prevBtn = el.querySelector('.swiper-button-prev');
            const nextBtn = el.querySelector('.swiper-button-next');

            const thumbBg = el.querySelector('.thumbs-big');
            const thumbSm = el.querySelector('.thumbs-small');


            //loop
            const slideLoop = el.querySelector('.not-loop');
            if (slideLoop) {
                var loops = false;
            } else {
                var loops = true;
            }

            try {
                const thumbSmall = new Swiper(thumbSm, {
                    speed: 1200,
                    slidesPerView: 'auto',
                    // spaceBetween: 10,
                    autoHeight: false,
                    // loop: loops,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                });

                const thumbBig = new Swiper(thumbBg, {
                    speed: 1200,
                    slidesPerView: 'auto',
                    // spaceBetween: 10,
                    // loop: loops,
                    thumbs: {
                        swiper: thumbSmall,
                    },

                    pagination: {
                        el: pagination,
                        clickable: true,
                    },

                    navigation: {
                        nextEl: nextBtn,
                        prevEl: prevBtn,
                    },
                });


            } catch (err) {
                console.log(err);
            }
        });
    }


}