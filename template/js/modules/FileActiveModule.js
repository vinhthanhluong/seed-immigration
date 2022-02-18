export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.profile-box').length) {
        $('.head').on('click', function () {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
        });
    }

    if ($('.popup-info').length) {
        $('.overplay , .p-close').on('click', function () {
            $('.popup-info').addClass('hidden');
        });
    }
}