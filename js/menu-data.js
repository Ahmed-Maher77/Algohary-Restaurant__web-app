const menuData = [
	{
		id: 1,
		title: "Margherita Pizza",
		description:
			"Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil. Made with our signature thin crust and homemade tomato sauce.",
		price: 14.99,
		image: "images/f1.png",
		category: "pizza",
	},
	{
		id: 2,
		title: "Classic Cheeseburger",
		description:
			"Premium beef patty with melted cheddar cheese, fresh lettuce, tomatoes, and our special sauce. Served with a side of crispy fries.",
		price: 12.99,
		image: "images/f2.png",
		category: "burger",
	},
	{
		id: 3,
		title: "Pepperoni Pizza",
		description:
			"Loaded with premium pepperoni, mozzarella cheese, and our special blend of Italian herbs. Perfect for sharing with friends and family.",
		price: 16.99,
		image: "images/f3.png",
		category: "pizza",
	},
	{
		id: 4,
		title: "Fettuccine Alfredo",
		description:
			"Homemade fettuccine pasta tossed in our rich and creamy Alfredo sauce, topped with freshly grated parmesan cheese and parsley.",
		price: 15.99,
		image: "images/f4.png",
		category: "pasta",
	},
	{
		id: 5,
		title: "Truffle Fries",
		description:
			"Crispy golden fries tossed with truffle oil, parmesan cheese, and fresh herbs. Served with our house-made truffle aioli dipping sauce.",
		price: 8.99,
		image: "images/f5.png",
		category: "fries",
	},
	{
		id: 6,
		title: "BBQ Chicken Pizza",
		description:
			"Grilled chicken, red onions, and bell peppers topped with our signature BBQ sauce and a blend of mozzarella and cheddar cheese.",
		price: 17.99,
		image: "images/f6.png",
		category: "pizza",
	},
	{
		id: 7,
		title: "Double Bacon Burger",
		description:
			"Two juicy beef patties with crispy bacon, cheddar cheese, caramelized onions, and our special BBQ sauce. Served with a side of fries.",
		price: 15.99,
		image: "images/f7.png",
		category: "burger",
	},
	{
		id: 8,
		title: "Mushroom Swiss Burger",
		description:
			"Premium beef patty topped with sautéed mushrooms, melted Swiss cheese, and our house-made garlic aioli. Served with a side of fries.",
		price: 14.99,
		image: "images/f8.png",
		category: "burger",
	},
	{
		id: 9,
		title: "Seafood Linguine",
		description:
			"Fresh linguine pasta with shrimp, mussels, and calamari in a white wine garlic sauce. Topped with fresh herbs and lemon zest.",
		price: 19.99,
		image: "images/f9.png",
		category: "pasta",
	},
	// Add 21 more items with similar structure, using f1.png-f9.png in a loop for images and rotating categories
	...Array.from({ length: 21 }, (_, i) => {
		const idx = i + 10;
		const images = [
			"f1.png",
			"f2.png",
			"f3.png",
			"f4.png",
			"f5.png",
			"f6.png",
			"f7.png",
			"f8.png",
			"f9.png",
		];
		const categories = [
			"pizza",
			"burger",
			"pizza",
			"pasta",
			"fries",
			"pizza",
			"burger",
			"burger",
			"pasta",
		];
		return {
			id: idx,
			title: `Menu Item ${idx}`,
			description: `Description for menu item ${idx}. Delicious and freshly made!`,
			price: 10 + (idx % 10) + 0.99,
			image: `images/${images[i % images.length]}`,
			category: categories[i % categories.length],
		};
	}),
];

// For module or global use
window.menuData = menuData;
