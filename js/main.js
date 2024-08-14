// open/close menu

const menuLink = document.getElementById('menu-link');
const popupArea = document.getElementById('popup-menu');

menuLink.addEventListener('click', () => {
    popupArea.classList.toggle('active');
})

popupArea.addEventListener('click', (e) => {
    if (e.target == popupArea) {
        popupArea.classList.toggle('active')
    }
})


//swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


//animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".title").forEach((title, index) => {
	gsap.from(title, {
		opacity: 0,
		duration: 1.5,
		x: 100,
		scrollTrigger: {
			trigger: title,
			start: "top 80%",
			end: "top 40%",
			onUpdate: (self) => {
				const progress = self.progress;
				title.style.opacity = progress;
			},
		},
	});
});


gsap.to('.big-img', {
    width: '100%',
    height: "1006",
    borderRadius: 0,
    ease: "power2.out",
    top: 0,
    scrollTrigger: {
        trigger: '.big-img',
        start: "top 70%",
        end: "top top",
        scrub: true,
    },
})