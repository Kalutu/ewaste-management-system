/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mymenu() {
	document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var k;
		for (k = 0; k < dropdowns.length; k++) {
			var openDropdown = dropdowns[k];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
