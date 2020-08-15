function fetchRecipesBySection(section){
	fetch(`/api/recipes-by-section/${section}`)
		.then(
			function(response) {
				if(response.status !== 200){
					console.log(`Something went wrong. Status Code: ${response.status}`);
					return;
				}

				response.json().then(function(data){
					for(var i = 0; i < data.length; i++){

						// Create a new list item
						var listItem = $("<li class='recipe-entry'>");

						// Create a new link that points to the recipe page
						var link = $(`<a class='recipe-link' href='/recipes/${section}/${data[i].techTitle}'>`);

						// Apply the DisplayName to the link's text
						link.text(data[i].displayName);

						var rating = $(`<div class='rating stars-${data[i].rating}'>`);

						link.append(rating);

						// Add the new link to the new list item
						listItem.append(link);

						// Add the new list item to the recipes list
						$(".recipes-list").append(listItem);
					}
				})
			}
		)
		.catch(function(err){
			console.log('Fetch Error: Status Code ' + err)
		})
}