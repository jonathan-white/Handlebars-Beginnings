function load_searchResults(){

	// Obtain query parameter from URL
	const urlParams = new URLSearchParams(window.location.search);
	const query = urlParams.get('q');

	$.get(`/api/findRecipes/${query}`, function(data) {
		console.log(data);

		$("#searchbox").val(query);

		$(".search-results-subtitle").text(`Recipes found for "${query}" in the collection.`);

		if(data["title"].length === 0 && data["category"].length === 0 && data["ingredients"].length === 0 &&
				data["keywords"].length === 0 && data["rating"].length === 0) {
			const resultsHeader = $("<h2>");
			resultsHeader.text(`No Matches`);
			$("#searchResults").append(resultsHeader);
			return;
		}

		// Results with Matching Title
		// ================================================================
		generateResults(data, "title");

		// Results with Matching Keywords
		// ================================================================
		generateResults(data, "keywords");

		// Results with Matching Ingredients
		// ================================================================
		generateResults(data, "ingredients");

		// Results with Matching Category
		// ================================================================
		generateResults(data, "category");

		// Results with Matching Rating
		// ================================================================
		generateResults(data, "rating");
	});
};

function generateResults(data, searchType) {

	// If the searchtype has results, create a unique section header
	if(data[searchType].length) {
		const resultsHeader = $("<h2>");
		resultsHeader.text(`${data[searchType].length} ${searchType.charAt(0).toUpperCase() + 
			searchType.slice(1)} ${data[searchType].length > 1 ? 'Matches' : 'Match'}:`);
		$("#searchResults").append(resultsHeader);
	}

	// Display the results
	for(var i = 0; i < data[searchType].length; i++){

		// Create a new list item
		const listItem = $("<li class='recipe-entry'>");

		// Create a new link that points to the recipe page
		const link = $(`<a class='recipe-link' href='/recipes/${data[searchType][i].section}/${data[searchType][i].techTitle}'>`);

		// Apply the DisplayName to the link's text
		link.text(data[searchType][i].displayName);

		const rating = $(`<div class='rating stars-${data[searchType][i].rating}'>`);

		link.append(rating);

		// Add the new link to the new list item
		listItem.append(link);

		// Add the new list item to the recipes list
		$("#searchResults").append(listItem);
	}
}