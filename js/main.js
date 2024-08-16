const body = document.body;

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


//burger
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    body.classList.toggle('stopScroll');
    mobileMenu.classList.toggle('active')
})


//swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
        450: {
            slidesPerView: 1.3,
        },
        570: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        }
    }
});


//animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".title").forEach((title, index) => {
	gsap.from(title, {
		opacity: 0,
		duration: 1.5,
		x: 200,
		scrollTrigger: {
			trigger: title,
			start: "top 80%",
			end: "top 50%",
			onUpdate: (self) => {
				const progress = self.progress;
				title.style.opacity = progress;
			},
		},
	});
});


gsap.fromTo('.big-img', 
    {
        top: -50,
        width: '231px',
        minHeight: '120px',
        borderRadius: '100px'
    },
    {
    width: '100%',
    height: "100%",
    borderRadius: 0,
    ease: "power2.out",
    top: 0,
    scrollTrigger: {
        trigger: '.big-img',
        start: "top 70%",
        end: "top 20%",
        scrub: true,
    },
})
 

gsap.fromTo(
    '.big-img-mobile',
    {
        width: 113,
        height: 73,
        borderRadius: 100,
    },
    {
        width: '200%',
        height: 600,
        left: '-50%',
        borderRadius: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.big-img-mobile',
            start: "top 50%",
            end: "top 10%",
            scrub: true,
        },
    }
);