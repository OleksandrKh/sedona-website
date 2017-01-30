window.onload = function() {
	var form = document.getElementById("searchForm"),
		btn = document.getElementById("show-hotels"),
        findBtn = document.getElementById("find-btn");
    
	btn.addEventListener('click', function(e) {
		e.preventDefault();
		var btnData = btn.getAttribute("data-toggle"),
			opacity;

		if (btnData == "false") {
			form.style.opacity = 1;
			btn.setAttribute("data-toggle", "true");
		} else {
			form.style.opacity = 0;
			btn.setAttribute("data-toggle", "false");
		}
	});
    
    findBtn.onclick = function(e) {
        return false;
    }
};