export default function ParallaxModule(){
    // const parallax = document.querySelectorAll('.parallax');
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        this.querySelectorAll('.parallax').forEach(el => {
            const speed = el.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed) / 100;
            const y = (window.innerHeight - e.pageY*speed) / 100;

            el.style.transform = `translateX(${x}px) translateY(${y}px)`

        });
    }
}