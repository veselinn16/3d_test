const DOMStrings = {
    front: 'front',
    right: 'anim-right',
    back: 'back',
    left: 'left',
    top: 'top',
    bottom: 'bottom'
}

$(function() {
	$('.anim').on('click', function() {
		var anim = $(this).attr('data-anim');
		$('#cube').removeClass().addClass(anim);
	});
});