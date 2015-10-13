function init(){
//Add collapse UI
	$("div span.comhead").append('<span class="com_collapse"><a href="#collapse" class="com_collapse">[-]</a></span>');

	$("a.com_collapse").each(function (index) {
		var item_id;
		var id;

		item_id = $(this).parent().prev().prev().prev().prev().attr("href");
		id = item_id.substring(8,item_id.length);
		$(this).attr("id", id);
	});
}

function main(){
	$("a.com_collapse").click(function(){
		//toggle UI
		if ($(this).text() == "[+]"){
			$(this).text("[-]");
		}else{
			$(this).text("[+]");
		}
		
		//toggle comment
		$(this).parent().parent().parent().next().next().toggle();

		//toggle children
		var comment_parent_level = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find("td.ind img").attr("width")/20; //width / 20
		
		var next_comment_container = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().next();

		var child_comment = true;

		var breakout = 0;

		while(child_comment){
			next_comment_level = next_comment_container.find("td.ind img").attr("width")/20;
			if (next_comment_level <= comment_parent_level){
				child_comment = false;
			}else{
				next_comment_container.toggle();
				next_comment_container = next_comment_container.next();
			}
		}
		
	});
}

$(document).ready(function() {
	init();
	main();
});

