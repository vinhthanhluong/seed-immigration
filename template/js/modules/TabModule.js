export default function TabModule() {
    if ($('.tab').length) {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$('.tab-title');
        const panes = $$('.tab-content-box');

        if (tabs) {
            tabs.forEach((tab, index) => {
                const pane = panes[index];
                tab.onclick = function () {
                    $('.tab-title.active').classList.remove('active');
                    $('.tab-content-box.active').classList.remove('active');

                    this.classList.add('active');
                    pane.classList.add('active');
                }
            })
        }
    }

    //class
    if ($('.ft-tabs')) {
        $(".tb-title").click(function () {
            var tab_id = $(this).attr("data-tab");

            $(".tb-title").removeClass("active");
            $(".tb-content").removeClass("active");

            $(this).addClass("active");
            $("." + tab_id).addClass("active");
        });
    }

    if ($('.s-tabs')) {
        $(".s-title").click(function () {
            var tab_id = $(this).attr("data-tab");

            $(".s-title").removeClass("active");
            $(".s-content").removeClass("active");

            $(this).addClass("active");
            $("." + tab_id).addClass("active");
        });
    }


    //id 
    if ($('.tab-p')) {
        $(".tab-wrapper").each(function () {
            let tab = $(this);
            tab.find(".tab-link").first().addClass("current");
            let tabID = tab.find(".tab-link.current").attr("data-tab");
            tab.find(tabID).fadeIn().siblings().hide();
            $(tab).on("click", ".tab-link", function (e) {
                e.preventDefault();
                let tabID = $(this).attr("data-tab");
                $(this).addClass("current").siblings().removeClass("current");
                tab.find(tabID).fadeIn().siblings().hide();
            });
        });
    }

}