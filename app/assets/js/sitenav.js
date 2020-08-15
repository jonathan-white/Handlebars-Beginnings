function load_navigation() {

// Side Navigation
// ========================================================
	const sidebar_links = [
		{ srcPath: "/credits", linkDesc: "Credits and Acknowledgements" },
		{ srcPath: "/our-beginnings", linkDesc: "Our Beginnings" },
		{ srcPath: "/tasters", linkDesc: "Tasters and Testers" },
		{ srcPath: "/contributors", linkDesc: "Recipe Contributors" },
		{ srcPath: "/foods-in-bloom", linkDesc: "Foods in Bloom" },
		{ srcPath: "/complements", linkDesc: "Wine and Cheese Complements" },
		{ srcPath: "/recipes/casual", linkDesc: "Casual" },
		{ srcPath: "/recipes/classic", linkDesc: "Classic" },
		{ srcPath: "/recipes/elegant", linkDesc: "Elegant" },
		{ srcPath: "/store", linkDesc: "Store" }		
	];

	for(var i = 0; i < sidebar_links.length; i++){
		const link = $(`<a class='sidenav-link' href='${sidebar_links[i].srcPath}'>`);
		const listItem = $(`<li class='sidenav-item'>`).text(sidebar_links[i].linkDesc);
		link.append(listItem);
		$(".sidenav-links-list").append(link);
	};

// Top Navigation
// ========================================================
	const topnav_links = [
		{ srcPath: "/recipes/casual", linkDesc: "Casual" },
		{ srcPath: "/recipes/classic", linkDesc: "Classic" },
		{ srcPath: "/recipes/elegant", linkDesc: "Elegant" }
	];

	const search = $("<div class='search'>");

	const searchbox = $(`<input id="searchbox" type="text" placeholder="I'm hungry for..."' autocomplete="off">`);
	const searchresults = $("<div id='quick-search-results'>");
	search.append(searchbox, searchresults);
	$("#navbar").append(search);

	for(var i = 0; i < topnav_links.length; i++){
		const link = $(`<a href='${topnav_links[i].srcPath}'>`);
		link.text(topnav_links[i].linkDesc);
		$("#navbar").append(link);
	};

	$("#searchbox").keypress(function(event) {

		var query = $(this).val();
		if(event.which == 13 && query.length > 0) {
			window.location.href = `/search?q=${query}`;
		}

		query = encodeURIComponent(query + event.key);

		if(query.length > 1){
			runQuickSearch(query);
		}
	});

	$("#searchbox").keydown(function(event) {
		const key = event.keyCode || event.charCode;

		if(key == 8 || key == 46) {
			query = encodeURIComponent($(this).val());

			if(query.length > 1){
				runQuickSearch(query);
			}else {
				$("#quick-search-results").empty();
			}
		}
	});

	function runQuickSearch(query){
		$("#quick-search-results").empty();
		fetch(`/api/quickSearch/${query}`)
			.then((response) => {
				if(response.status !== 200){
					console.log(`We have a problem. Status Code: ${response.status}`);
				}

				response.json().then(function(data){
					// console.log(data);
					data.slice(0,9).forEach(r => {
						const listLink = $(`<a class="results-link" href="/recipes/${r.section}/${r.techTitle}">`);
						const listItem = $("<li class='results-item'>").text(r.displayName);
						listLink.append(listItem);
						$("#quick-search-results").append(listLink);
					});
				})
			})
			.catch(err => {
				console.log(`Fetch Error: Status Code: ${err}`)
			})
	};
};