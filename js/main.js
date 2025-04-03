const useBurger = () => {
	const burgerBtn = document.querySelector('[data-burger="btn"]');
	const body = document.body;
	const burgerMenu = document.querySelector('[data-burger="menu"]');
	const overlay = document.querySelector('[data-burger="overlay"]');
	const menuLinksWrapper = document.querySelector('.nav__list');

	const closeBurger = () => {
		overlay.classList.remove('overlay--visible');
		burgerBtn.classList.remove('burger--active');
		burgerMenu.classList.remove('nav--visible');
		body.classList.remove('body--fixed');
	};

	burgerBtn.addEventListener('click', () => {
		overlay.classList.toggle('overlay--visible');
		burgerBtn.classList.toggle('burger--active');
		burgerMenu.classList.toggle('nav--visible');
		body.classList.toggle('body--fixed');
	});

	overlay.addEventListener('click', closeBurger);

	menuLinksWrapper.addEventListener('click', (link) => {
		if (link.target.classList.contains('nav__link-control')) return;

		if (
			link.target.classList.contains('nav__link') ||
			link.target.classList.contains('nav__sublink')
		) {
			closeBurger();
		}
	});
};
useBurger();

const useNavAccordion = () => {
	const accordionLists = document.querySelectorAll('.nav__list');

	accordionLists.forEach((element) => {
		element.addEventListener('click', (event) => {
			const accordionControl = event.target.closest('.nav__link-control');
			if (!accordionControl) return;
			event.preventDefault();
			const accordionItem = accordionControl.parentElement;
			const accordionContent = accordionControl.nextElementSibling;

			const accordionList = accordionItem.parentElement;
			const accordionOpenedItem =
				accordionList.querySelector('.nav__item--opened');
			const accordionOpenedContent = accordionList.querySelector(
				'.nav__item--opened .nav__sublist',
			);

			if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
				accordionOpenedItem.classList.remove('nav__item--opened');
				accordionOpenedContent.style.maxHeight = null;
			}

			accordionItem.classList.toggle('nav__item--opened');

			if (accordionItem.classList.contains('nav__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
			} else {
				accordionContent.style.maxHeight = null;
			}
		});
	});
};
useNavAccordion();

const useProjectsSlider = () => {
	new Swiper('.projects__slider', {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.projects__navigation-button--next',
			prevEl: '.projects__navigation-button--prev',
		},
	});
};
useProjectsSlider();

const useMortgageTypeSlider = () => {
	new Swiper('.mortgage-types__slider', {
		slidesPerView: 1,
		centeredSlides: true,
		initialSlide: 1,
		spaceBetween: 30,
		pagination: {
			el: '.mortgage-types__slider-pagination',
			type: 'fraction',
		},
		breakpoints: {
			577: {
				slidesPerView: 1.5,
			},
			769: {
				slidesPerView: 2,
			},
			993: {
				slidesPerView: 2.5,
			},
			1201: {
				slidesPerView: 3,
			},
		},
	});
};
useMortgageTypeSlider();

const useTestimonialsSlider = () => {
	new Swiper('.testimonials__slider', {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: '.testimonials__navigation-button--next',
			prevEl: '.testimonials__navigation-button--prev',
		},
	});
};
useTestimonialsSlider();

const usePhone = () => {
	const input = document.querySelector('#phone');

	intlTelInput(input, {
		initialCountry: 'auto',
		geoIpLookup: (callback) => {
			fetch('https://ipapi.co/json')
				.then((res) => res.json())
				.then((data) => callback(data.country_code))
				.catch(() => callback('ru'));
		},
		utilsScript:
			'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/23.4.0/js/utils.js' ||
			'/intl-tel-input/js/utils.js?1721468771539',
		strictMode: true,
	});
};
usePhone();

const useOurWorksSliders = () => {
	document.querySelectorAll('.our-works__slider').forEach((sliderElem) => {
		new Swiper(sliderElem, {
			slidesPerView: 1,
			pagination: {
				el: '.our-works__slider-pagination',
				type: 'fraction',
			},
			spaceBetween: 30,
			centeredSlides: true,
			initialSlide: 1,
			breakpoints: {
				501: {
					slidesPerView: 1.2,
				},
				577: {
					slidesPerView: 1.5,
				},
				769: {
					slidesPerView: 2,
				},
				993: {
					slidesPerView: 2.5,
				},
				1201: {
					slidesPerView: 3,
					centeredSlides: false,
				},
			},
		});
	});
};
useOurWorksSliders();
