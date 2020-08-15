function displayIntro(section) {
	if (sessionStorage.getItem(`hasSeenIntro_${section}`)) {
		$(".intro").removeClass('show');
		$(".content-wrapper").removeClass('delayed-display');
	} else {
		$(".intro").addClass('show');
		$(".content-wrapper").addClass('delayed-display');
		sessionStorage.setItem(`hasSeenIntro_${section}`, true);
	}
}