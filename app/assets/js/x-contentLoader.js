// Generate recipe content based on the page's technical name
function load_recipeDetails() {
	var fileName = location.pathname.split("/").pop();

	// Fetch the recipe details for this page
	fetch(`/api/recipes/${fileName}`)
		.then(
			function(response) {
				// Unsuccessful response
				if (response.status !== 200){
					console.log(`Something went wrong. Status Code: ${response.status}`);
					return;
				}

				// Successful response
				response.json().then(function(data){

					// Load the recipe title
					$("#recipe-title").text(data.displayName);

					// Load the recipe ingredients
					$("#recipe-ingredients").empty();
					for(var i = 0, ingredients = data.ingredients; i < ingredients.length; i++){
						const lineItem = $("<li>").text(ingredients[i].description);
						$("#recipe-ingredients").append(lineItem);
					}

					// Load Instructions
					$("#recipe-instructions").empty().html(data.instructions);

					// Load Preview Image
					if(data.images[0]) {
						// If an image exists, display it
						const previewImg = $("<img>").attr({
							src: data.images[0],
							alt: data.displayName
						});
						$("#preview").empty().append(previewImg);
					} else {
						// If no image exists, remove the preview element
						$("#preview").remove();
					}

				});
			}
		)
		.catch(function(err) {
			console.log('Fetch Error:', err);
		});
};

// Generate a random Akron fact for the page
function load_randomFact(){
	fetch(`/api/randomFact`)
		.then(
			function(response) {
				// Unsuccessful response
				if (response.status !== 200){
					console.log(`Something went wrong. Status Code: ${response.status}`);
					return;
				}

				// Successful response
				response.json().then(function(data){
					// Load the random fact
					$("#random-fact").text(data.info);
				});
			}
		)
		.catch(function(err) {
			console.log('Fetch Error: ', err);
		});
}