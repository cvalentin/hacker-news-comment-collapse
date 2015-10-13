
function toggle_comment(id){
	console.log(id);
}

//Add collapse UI
function add_collapse_UI(){
	$("div span.comhead").append('<span class="com_collapse"><a href="#collapse" class="com_collapse">[+]</a></span>');

	$("a.com_collapse").each(function (index) {
		item_id = $(this).parent().prev().prev().prev().prev().attr("href");
		id = item_id.substring(8,item_id.length);
		$(this).attr("id", id);
	});
}


function init(){
	add_collapse_UI();
}

function main(){
	$("a.com_collapse").click(function(){
		$(this).parent().parent().parent().next().next().toggle();
	});
}

$(document).ready(function() {
	init();
	main();
});

