$.get("/api/flowers", function(data) {
	for(var i = 0; i < data.length; i++){
		var title = $("<h2>").text(data[i].name);
		var text = $("<p class='flower-text'>").text(data[i].descr);
		var card = $("<li class='flower-entry'>").data("img",data[i].image);
		card.append(title,text);
		$(".edible-flowers").append(card);

		$(".flower-entry").mouseover(function(event) {

			$("#flower-preview").show().css({
				backgroundImage: `url(${$(this).data("img")})`,
				backgroundSize: 'cover',
				filter: 'opacity(.2)'
			});

		});
	}
});