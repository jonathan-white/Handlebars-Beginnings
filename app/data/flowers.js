var flowers = [
	{
		"name":"Lavender",
		"descr":"A perennial shrub with graceful purple flowers and a scent that is associated more with potpourri than cooking. However, its leaves and flowers can be used in vinegar or jellies, or used sparingly in salads, ice creams, and custards.",
		"uses":["vinegar","jellies", "salads","ice creams", "custards"],
		"image":"/assets/images/bg/lavender.jpg",
	},
	{
		"name":"Lilac",
		"descr":"The pyramidal lavender clusters of its flowers are known for their scent, which carries over into their taste, and can be candied or used in herb butters, scented sugars, or as a garnish. The blossoms should be picked as soon as they open.",
		"uses":["herb butter","scented sugar","garnish"],
		"image":"/assets/images/bg/lilac.jpg",
	},
	{
		"name":"Allium",
		"descr":"A perennial herb that blooms during May and June with pretty lilac-pink flowers that can be used, in addition to the hollow leaves, as a garnish or substitute for scallions.",
		"uses":["garnish","substitute for scallions"],
		"image":"/assets/images/bg/allium.jpg",
	},
	{
		"name":"Bee Balm",
		"descr":"Bees and hummingbirds are attracted to this citrus-tasting herb whose leaves and colorful scarlet flowers can be used with fruits, duck, and pork, or in salads, teas, and jellies.",
		"uses":["fruits","duck","pork","salads","teas","jellies"],
		"image":"/assets/images/bg/bee-balm.jpg",
	},
	{
		"name":"Fennel",
		"descr":"Fennel's mild licorice-flavored leaves and large yellow ublema flowers should be used fresh, not dried, in soups and salads.",
		"uses":["soups","salads"],
		"image":"/assets/images/bg/fennel.jpg",
	},
	{
		"name":"Borage",
		"descr":"The bright blue star-shaped flowers have a cucumber-like flavor and are often used in salads. The flowers may also be floated in drinks or candied for a dessert garnish",
		"uses":["salads","drinks","dessert garnish"],
		"image":"/assets/images/bg/borage.jpg",
	},
	{
		"name":"Calendula",
		"descr":"The ray petal is the edible portion of the blossom and provides an attractive garnish. It is often used to color butter and cheese and is commonly known as the pot marigold. It can be used as a substitute for saffron and has a tangy peppery taste.",
		"uses":["butter","cheese","garnish"],
		"image":"/assets/images/bg/calendula.jpg",
	},
	{
		"name":"Clove Pinks",
		"descr":"This wild ancestor of the modern carnation has a spicy, mild clove flavor. The semi-double fragrant flowers of this perennial can be used fresh to flavor syrups, fruit cups, or beverages, but be sure to remove the bitter white base first.",
		"uses":["syrups", "fruit cups", "beverages"],
		"image":"/assets/images/bg/clove-pink.jpg",
	},
	{
		"name":"Daisy",
		"descr":"A perennial flower that has a mild flower, the daisy can be eaten fresh in salads or used as a garnish.",
		"uses":["salads","garnish"],
		"image":"/assets/images/bg/daisy.jpg",
	},
	{
		"name":"Dandelion",
		"descr":"This familiar yellow flower can be minced and added to butters, spreads, and vinegar.",
		"uses":["butters","spreads", "vinegar"],
		"image":"/assets/images/bg/dandelion.jpg",
	},
	{
		"name":"Day Lily",
		"descr":"The yellow, tawny orange flowers of all day lilies are edible, but sample first to determine taste before chopping into salads or soups. Pick the flower buds after they have elongated but before they open, as the smaller buds tend to taste better.",
		"uses":["salads","soups"],
		"image":"/assets/images/bg/daylily.jpg",
	},
	{
		"name":"Scented Geraniums",
		"descr":"A perennial grown as an annual or houseplant, these come in a wide variety of colors and scents, which are released by being rubbed or by the hot sun. Use for baked goods, ice creams, jellies, candied garnishes, and scented sugar.",
		"uses":["baked goods", "ice creams", "jellies", "candied garnishes", "scented sugar"],
		"image":"/assets/images/bg/pink-geranium.jpg",
	},
	{
		"name":"Hollyhocks",
		"descr":"The flowers are best used as an attractive container for a dish or as a garnish, but can also be made into fritters or flavoring for tea.",
		"uses":["garnish","fritters","tea"],
		"image":"/assets/images/bg/hollyhock.jpg",
	},
	{
		"name":"Honeysuckle",
		"descr":"Known for its delightful fragrance and sweet taste, the honeysuckle can be used in puddings, ice creams, or syrups.",
		"uses":["puddings","ice creams","syrups"],
		"image":"/assets/images/bg/honeysuckle.jpg",
	},
	{
		"name":"Johnny-jump-ups",
		"descr":"These flowers make a pretty candied garnish on a dessert or can brighten up a spring salad or punch bowl. Their mild taste is reminiscent of sweet baby lettuce.",
		"uses":["dessert garnish","salad","punch bowl"],
		"image":"/assets/images/bg/johnny-jump-up.jpg",
	},
	{
		"name":"Marigold",
		"descr":"Although all are edible, the Tangerine Gem and Lemon Gem varieties have a more pleasant flavor; there is a Peruvian variety used in salsa. Most marigolds are a good accompaniment to salads, soups, and sauces.",
		"uses":["salads", "soups", "sauces","salsa"],
		"image":"/assets/images/bg/marigolds.jpg",
	},
	{
		"name":"Nasturtium",
		"descr":"The slightly peppery taste of the young leaves, flowers, and buds, combined with their vibrant colors, brighten any green salad. The flowers also provide a unique container for cold salads, but the bitter-tasting base should be removed first.",
		"uses":["salads"],
		"image":"/assets/images/bg/nasturtium.jpg",
	},
	{
		"name":"Pansy",
		"descr":"Similar in taste to Johnny-jump-ups, the flowers are often used as a garnish on desserts or floating in cold drinks or soups. They should be picked when they first open.",
		"uses":["dessert garnish","soups","drinks"],
		"image":"/assets/images/bg/pansy.jpg",
	},
	{
		"name":"Pineapple Sage",
		"descr":"Rough, dark green leaves and bright scarlet tubular flowers that bloom in late summer characterize this tender perennial. The flowery, pineapple taste, with a hint of sage muskiness, can season fruit salads, tea, desserts, and tea breads.",
		"uses":["fruit salads","tea","desserts","tea breads"],
		"image":"/assets/images/bg/pineapple-sage.jpg",
	},
	{
		"name":"Roses",
		"descr":"Older varieties seem to have more scent and therefore more taste, but many varieties can be quite bitter, so sample first. The hips and petals can be used for making tea, jelly, jam, syrup, or wine. The petals can also be candied or used to make rosewater, scented sugar, or butter.",
		"uses":["tea","jelly","jam","syrup","wine","rosewater","scented sugar","butter"],
		"image":"/assets/images/bg/rose.jpg",
	},
	{
		"name":"Squash Blossoms",
		"descr":"The golden-orange flowers should be picked when fully open, but don't pick them all, or there'll be no squash! The blossoms can be chopped into soups, salads, or vegetable dishes. Be sure to remove stamens and pistils before cooking.",
		"uses":["soups","salads","vegetable dishes"],
		"image":"/assets/images/bg/squash-blossoms.jpg",
	},
	{
		"name":"Sweet Woodruff",
		"descr":"A staple of the May punch bowl, the tiny star-shaped white flowers of this shade-loving perennial can also garnish tea cakes, desserts, salads, and fruits, especially berries.",
		"uses":["garnish","tea cakes","desserts","salads","fruits","berries"],
		"image":"/assets/images/bg/sweet-woodruff.jpg",
	},
	{
		"name":"Thyme",
		"descr":"The lilac-colored flowers tend to be mild with a floral scent, perfect for garnishing salads, pastas, or desserts.",
		"uses":["garnish","salads","pastas","desserts"],
		"image":"/assets/images/bg/thyme.jpg",
	},
	{
		"name":"Tulip",
		"descr":"Like the nasturtium, these brightly colored flowers are best used as a garnish or container for a cold dish, such as chicken or egg salad. Their light flavor is similar to peas. The best variety for culinary use is the Darwin hybrid.",
		"uses":["garnish","chicken salads","egg salads"],
		"image":"/assets/images/bg/tulip.jpg",
	},
	{
		"name":"Violet",
		"descr":"Like the Johnny-jump-up and pansy, this hardy perennial has a sweeter, stronger scent. Its flowers and heart-shaped leaves can be used as a garnish. The flowers can be made into violet water, which can flavor tea, breads, fruit compotes, and chilled soups.",
		"uses":["garnish","violet water","tea","breads","fruit compotes","chilled soups."],
		"image":"/assets/images/bg/violet.jpg",
	}
];

module.exports = flowers;