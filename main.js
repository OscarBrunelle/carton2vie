function toggle_side_nav() {
	const cl = document.getElementById("sidenav").classList;
	if (cl.contains("sidenav-open")) {
		close_side_nav();
	} else {
		open_side_nav();
	}
}

function close_side_nav() {
	document.getElementById("sidenav").classList.remove("sidenav-open");
}

function open_side_nav() {
	document.getElementById("sidenav").classList.add("sidenav-open");
}