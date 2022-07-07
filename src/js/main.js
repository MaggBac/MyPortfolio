const allNavItems = document.querySelectorAll('.nav-link');
const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const footerYear = document.querySelector('.footer-year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	nav.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })

	allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.remove('is-active')
        })
    })
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

navBtn.addEventListener('click', handleNav);
