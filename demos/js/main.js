$(document).ready(function () {
	/* Grid Switch */
	$('#overlay-switch').click(function (event) {
		$(this).toggleClass('off');
		$('#overlay [class*="span"]').toggle(145);
	});
});