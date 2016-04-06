var keyCode = 191;

window.addEventListener('keydown', function (event) {
	if (event.keyCode !== keyCode) {
		return;
	}

	event.preventDefault();

	var form = document.forms[0];

	if (typeof form === 'undefined') {
		return;
	}

	[].forEach.call(form.elements, function (element) {
		if (element.type === 'text' || element.type === 'email') {
			return element.focus();
		}
	});
});
