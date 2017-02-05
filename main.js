/*global $*/
function expandAttribute() {
	$('div').on('click', '.attribute_list_group', function(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(this);
		console.log("clicked");
		$(this).parent('div').children('ul').toggleClass('hidden');
		$(this).toggleClass('expanded');
	});
}

$(function(){
	expandAttribute();
});
