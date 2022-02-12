(function () {

	"use strict";

	//===== Prealoder

	var loader = document.querySelector(".loader")

	window.addEventListener("load",vanish);

	function vanish() {

		loader.classList.add("disappear");
	}

	/*=====================================
	Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
	};

	//===== navbar-toggler
	let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	})

})();


(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
 const countDown = new Date('Mar 11, 2022 23:00:00 +0100').getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
             distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

       // do something later when date is reached
        if (distance < 0) {
          document.getElementById("days").innerText = 0,
          document.getElementById("hours").innerText = 0,
          document.getElementById("minutes").innerText = 0,
          document.getElementById("seconds").innerText = 0,
          clearInterval(x);
        }
        seconds
      }, 0)
  }());

// ====== scroll top js
function scrollTo(element, to = 0, duration= 1) {

	const start = element.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;

	const animateScroll = (() => {

		currentTime += increment;

		const val = Math.easeInOutQuad(currentTime, start, change, duration);

		element.scrollTop = val;

		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	});

	animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {

	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

document.querySelector('.scroll-top').onclick = function () {
	scrollTo(document.documentElement); 
}
