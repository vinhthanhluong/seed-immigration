export default function FormModule() {
    // disable form
    if ($('#disable-form').length) {
        $(".pro-input.disable").prop('disabled', true);

        $(".product-inner.sold-out").click(function (e) {
            e.preventDefault();
        });
    }

    // input eff
    if ($('bx-f').length) {
        let inp = document.querySelectorAll('.bx-f input');

        inp.forEach(el => {
            let wrap = el.parentElement;

            el.addEventListener('focusin', () => {
                wrap.classList.add('active');
            });

            el.addEventListener('focusout', () => {
                el.value ? '' : wrap.classList.remove('active');
            });
        });
    }

    //up load file 
    let file = document.querySelectorAll('.fileJS');
    file.forEach((el) => {
        let inp = el.querySelector('.fileInp');
        let txt = el.querySelector('.fileTxt');

        inp.addEventListener('change', () => {
            let upname = inp.value.split(`\\`);
            let name = upname[upname.length - 1];
            txt.innerHTML = name;
        });
    });

    //up load img
    if ($('.file-img').length) {
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                imgupload.src = URL.createObjectURL(file)
            }
        }

        // <form runat="server">
        //     <input accept="image/*" type='file' id="imgInp" />
        //     <img id="imgupload" src="#" alt="your image" />
        // </form>
    }

    //range 2 thumb
    if ($('.bx-range-2-thumb').length) {
        window.onload = function () {
            slideOne();
            slideTwo();
        }

        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValOne = document.getElementById("range1");
        let displayValTwo = document.getElementById("range2");
        let minGap = 0;
        let sliderTrack = document.querySelector(".slider-track");
        let sliderMaxValue = document.getElementById("slider-1").max;

        sliderOne.addEventListener('input', slideOne);
        sliderTwo.addEventListener('input', slideTwo);

        function slideOne() {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }
            displayValOne.textContent = sliderOne.value;
            // fillColor();
        }
        function slideTwo() {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayValTwo.textContent = sliderTwo.value;
            // fillColor();
        }
        // function fillColor() {
        //     percent1 = (sliderOne.value / sliderMaxValue) * 100;
        //     percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        //     sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #172929 ${percent1}% , #172929 ${percent2}%, #dadae5 ${percent2}%)`;
        // }

        //html
        // <div class="bx-range">
        //     <div class="slider-track"></div>
        //     <input class="f-range" type="range" min="10" max="20" value="10" id="slider-1">
        //     <input class="f-range" type="range" min="10" max="20" value="20" id="slider-2">
        // </div>
    }


}