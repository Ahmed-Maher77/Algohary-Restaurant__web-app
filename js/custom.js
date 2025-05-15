// to get current year
function getYear() {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// isotope js
$(window).on("load", function () {
	$(".filters_menu li").click(function () {
		$(".filters_menu li").removeClass("active");
		$(this).addClass("active");

		var data = $(this).attr("data-filter");
		$grid.isotope({
			filter: data,
		});
	});

	var $grid = $(".grid").isotope({
		itemSelector: ".all",
		percentPosition: false,
		masonry: {
			columnWidth: ".all",
		},
	});

	// Search functionality
	$("#searchInput").on("input", function () {
		var searchTerm = $(this).val().toLowerCase();
		var hasResults = false;

		$grid.isotope({
			filter: function () {
				var $item = $(this);
				var title = $item.find("h5").text().toLowerCase();
				var description = $item.find("p").text().toLowerCase();

				// Check if the search term matches either title or description
				var matches =
					title.includes(searchTerm) || description.includes(searchTerm);
				if (matches) hasResults = true;
				return matches;
			},
		});

		// Show/hide no results message and related elements
		if (searchTerm && !hasResults) {
			$(".no-results-message").fadeIn(300);
			$(".filters_menu").fadeOut(300);
			$(".btn-box").fadeOut(300);
		} else {
			$(".no-results-message").fadeOut(300);
			$(".filters_menu").fadeIn(300);
			$(".btn-box").fadeIn(300);
		}
	});

	// Clear search when filter is clicked
	$(".filters_menu li").click(function () {
		$("#searchInput").val("");
		$(".no-results-message").fadeOut(300);
		$(".filters_menu").fadeIn(300);
		$(".btn-box").fadeIn(300);
	});
});

// nice select
$(document).ready(function () {
	$("select").niceSelect();

	// Handle search form click
	$(".form-inline").on("click", function (e) {
		e.preventDefault();

		// Check if we're on the menu page
		if (window.location.pathname.includes("menu.html")) {
			// If on menu page, focus the search input
			$("#searchInput").focus();
		} else {
			// If not on menu page, redirect to menu page with a hash
			window.location.href = "menu.html#search";
		}
	});

	// Check for search hash on menu page load
	if (window.location.hash === "#search") {
		$("#searchInput").focus();
	}
});

/** google_map js **/
function myMap() {
	// Restaurant location (Cairo, Egypt)
	const restaurantLocation = {
		lat: 30.0444,
		lng: 31.2357,
	};

	// Map options
	const mapOptions = {
		center: restaurantLocation,
		zoom: 15,
		styles: [
			{
				featureType: "all",
				elementType: "geometry",
				stylers: [{ color: "#242f3e" }],
			},
			{
				featureType: "all",
				elementType: "labels.text.stroke",
				stylers: [{ lightness: -80 }],
			},
			{
				featureType: "administrative",
				elementType: "labels.text.fill",
				stylers: [{ color: "#746855" }],
			},
			{
				featureType: "administrative.locality",
				elementType: "labels.text.fill",
				stylers: [{ color: "#d59563" }],
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [{ color: "#d59563" }],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [{ color: "#263c3f" }],
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [{ color: "#6b9a76" }],
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [{ color: "#38414e" }],
			},
			{
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [{ color: "#212a37" }],
			},
			{
				featureType: "road",
				elementType: "labels.text.fill",
				stylers: [{ color: "#9ca5b3" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [{ color: "#746855" }],
			},
			{
				featureType: "road.highway",
				elementType: "geometry.stroke",
				stylers: [{ color: "#1f2835" }],
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [{ color: "#f3d19c" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#17263c" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [{ color: "#515c6d" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.stroke",
				stylers: [{ lightness: -20 }],
			},
		],
	};

	// Initialize map
	const map = new google.maps.Map(
		document.getElementById("googleMap"),
		mapOptions
	);

	// Add marker
	const marker = new google.maps.Marker({
		position: restaurantLocation,
		map: map,
		title: "Algohary Restaurant",
		animation: google.maps.Animation.DROP,
		icon: {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 10,
			fillColor: "#ffbe33",
			fillOpacity: 1,
			strokeColor: "#ffffff",
			strokeWeight: 2,
		},
	});

	// Add info window
	const infoWindow = new google.maps.InfoWindow({
		content: `
			<div style="padding: 10px;">
				<h3 style="margin: 0 0 5px 0; color: #222831;">Algohary Restaurant</h3>
				<p style="margin: 0; color: #666;">Cairo, Egypt</p>
			</div>
		`,
	});

	// Add click listener to marker
	marker.addListener("click", () => {
		infoWindow.open(map, marker);
	});

	// Add hover effects
	marker.addListener("mouseover", () => {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	});

	marker.addListener("mouseout", () => {
		marker.setAnimation(null);
	});
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
	loop: true,
	margin: 0,
	dots: false,
	nav: true,
	navText: [],
	autoplay: true,
	autoplayHoverPause: true,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>',
	],
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		1000: {
			items: 2,
		},
	},
});

// form validation
function handleSubmit(event) {
	event.preventDefault();
	// Add your form handling logic here
	console.log("Form submission prevented.");
}

function createMenuBox(item) {
	return `
		<div class="col-sm-6 col-lg-4 all ${item.category}">
			<div class="box">
				<div>
					<div class="img-box">
						<img src="${item.image}" alt="${item.title}" />
					</div>
					<div class="detail-box">
						<h5>${item.title}</h5>
						<p>${item.description}</p>
						<div class="options">
							<h6>$${item.price.toFixed(2)}</h6>
							<button class="add-to-cart-btn">
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background: new 0 0 456.029 456.029" xml:space="preserve"><g><g><path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"/></g></g><g><g><path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"/></g></g><g><g><path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"/></g></g></svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}

function renderMenuBoxes(target, start, count) {
	const grid = document.getElementById(target);
	let html = "";
	for (let i = start; i < Math.min(menuData.length, start + count); i++) {
		html += createMenuBox(menuData[i]);
	}
	grid.insertAdjacentHTML("beforeend", html);
	// If Isotope is used, layout refresh
	if (window.$ && window.$(".grid").data("isotope")) {
		window
			.$(".grid")
			.isotope("appended", window.$(`#${target} > div`).slice(-count));
		window.$(".grid").isotope("layout");
	}
}

// On DOM ready
$(function () {
	// Detect which page
	var isMenuPage = $("#viewMoreBtn").length > 0;
	var initialCount = 9;
	var increment = 3;
	var rendered = 0;

	// Clear grid
	$("#menuGrid").empty();

	// Render initial boxes
	renderMenuBoxes("menuGrid", rendered, initialCount);
	rendered += initialCount;

	if (isMenuPage) {
		// Show/hide button
		function updateBtn() {
			if (rendered >= menuData.length) {
				$("#viewMoreBtn").hide();
			} else {
				$("#viewMoreBtn").show();
			}
		}
		updateBtn();
		$("#viewMoreBtn")
			.off("click")
			.on("click", function () {
				renderMenuBoxes("menuGrid", rendered, increment);
				rendered += increment;
				updateBtn();
			});
	}
});

// --- Cart Functionality ---
function getCart() {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart = cart.filter(
		(item) => item && typeof item.price === "number" && item.title && item.image
	);
	cart.forEach((item) => {
		if (typeof item.qty !== "number" || item.qty < 1) item.qty = 1;
	});
	return cart;
}

function saveCart(cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
	const cart = getCart();
	let count = cart.reduce(
		(sum, item) => sum + (typeof item.qty === "number" ? item.qty : 1),
		0
	);
	$("#cartCountBadge").text(count);
}

function renderCartSidebar() {
	const cart = getCart();
	const $list = $("#cartItemsList");
	$list.empty();
	if (!cart || cart.length === 0) {
		$list.append(
			'<li style="text-align:center;color:#bbb;">Cart is empty</li>'
		);
		$("#cartTotalPrice").remove();
	} else {
		cart.forEach((item, idx) => {
			const qty = typeof item.qty === "number" && item.qty > 0 ? item.qty : 1;
			$list.append(`
				<li style="display:flex;align-items:center;gap:10px;">
					<img src="${item.image}" alt="${
				item.title
			}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;">
					<div style="flex:1;min-width:0;">
						<div style="font-weight:600;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${
							item.title
						}</div>
						<div style="color:#ffbe33;font-size:0.95rem;">$${item.price.toFixed(2)}</div>
					</div>
					<div style="display:flex;align-items:center;gap:4px;">
						<button class="cart-qty-btn cart-qty-minus" data-idx="${idx}" title="Decrease">-</button>
						<span class="cart-qty-num" style="min-width:22px;text-align:center;">${qty}</span>
						<button class="cart-qty-btn cart-qty-plus" data-idx="${idx}" title="Increase">+</button>
					</div>
					<button class="cart-item-remove" data-idx="${idx}" title="Remove" style="background:none;border:none;padding:0 0 0 6px;cursor:pointer;display:flex;align-items:center;">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
					</button>
				</li>
			`);
		});
		// Total price
		let total = cart.reduce(
			(sum, item) =>
				sum +
				item.price *
					(typeof item.qty === "number" && item.qty > 0 ? item.qty : 1),
			0
		);
		if ($("#cartTotalPrice").length === 0) {
			$(".cart-sidebar-footer").append(
				'<div id="cartTotalPrice" style="margin-top:10px;font-weight:bold;font-size:1.1rem;text-align:left;color:#fff;">Total: $0.00</div>'
			);
		}
		$("#cartTotalPrice").text("Total: $" + total.toFixed(2));
	}
}

// On page load, render cart
$(document).ready(function () {
	renderCartSidebar();
	updateCartCount();
});

// Add to Cart (event delegation for dynamic buttons)
$(document).on("click", ".add-to-cart-btn", function (e) {
	e.preventDefault();
	let cart = getCart();
	const $box = $(this).closest(".box");
	let title = $box.find("h5").text();
	let price = parseFloat(
		$box
			.find("h6")
			.text()
			.replace(/[^\d.]/g, "")
	);
	let image = $box.find("img").attr("src");
	let id = title + price + image;
	let found = cart.find((item) => item.id === id);
	if (found) {
		found.qty = (found.qty || 1) + 1;
		showToast("Increased quantity!");
	} else {
		cart.push({ id, title, price, image, qty: 1 });
		showToast("Added to cart!");
	}
	saveCart(cart);
	updateCartCount();
	renderCartSidebar();
	animateCartBadge();
});

// Quantity plus
$(document).on("click", ".cart-qty-plus", function (e) {
	e.preventDefault();
	e.stopPropagation();
	let cart = getCart();
	const idx = $(this).data("idx");
	if (cart[idx]) {
		cart[idx].qty = (typeof cart[idx].qty === "number" ? cart[idx].qty : 1) + 1;
		saveCart(cart);
		updateCartCount();
		renderCartSidebar();
	}
});
// Quantity minus
$(document).on("click", ".cart-qty-minus", function (e) {
	e.preventDefault();
	e.stopPropagation();
	let cart = getCart();
	const idx = $(this).data("idx");
	if (cart[idx]) {
		cart[idx].qty = (typeof cart[idx].qty === "number" ? cart[idx].qty : 1) - 1;
		if (cart[idx].qty <= 0) cart.splice(idx, 1);
		saveCart(cart);
		updateCartCount();
		renderCartSidebar();
	}
});
// Remove item
$(document).on("click", ".cart-item-remove", async function (e) {
	e.preventDefault();
	e.stopPropagation();
	let cart = getCart();
	const idx = $(this).data("idx");
	if (typeof idx !== "undefined" && cart[idx]) {
		const ok = await cartShowConfirm("Remove this item from the cart?");
		if (ok) {
			cart.splice(idx, 1);
			saveCart(cart);
			updateCartCount();
			renderCartSidebar();
		}
	}
});
// Clear all
$(document).on("click", "#clearCartBtn", async function (e) {
	e.preventDefault();
	e.stopPropagation();
	let cart = getCart();
	if (cart.length === 0) return;
	const ok = await cartShowConfirm(
		"Are you sure you want to clear the entire cart?"
	);
	if (ok) {
		cart = [];
		saveCart(cart);
		updateCartCount();
		renderCartSidebar();
	}
});
// Close cart sidebar on X button (robust)
$(document).on("click", "#closeCartSidebar", function (e) {
	e.preventDefault();
	e.stopPropagation();
	hideCartSidebar();
});

// Toast message
function showToast(msg) {
	let $toast = $('<div class="cart-toast"></div>').text(msg);
	$("body").append($toast);
	$toast.css({
		position: "fixed",
		bottom: "40px",
		right: "40px",
		background: "#222831",
		color: "#fff",
		padding: "12px 28px",
		borderRadius: "25px",
		fontWeight: "bold",
		zIndex: 3000,
		boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
		opacity: 0.95,
	});
	setTimeout(() => $toast.fadeOut(400, () => $toast.remove()), 1200);
}

// Animate cart badge
function animateCartBadge() {
	const $badge = $("#cartCountBadge");
	$badge.css({ transform: "scale(1.3)", transition: "transform 0.2s" });
	setTimeout(() => $badge.css({ transform: "scale(1)" }), 200);
}

// Hide sidebar on outside click
$(document).on("mousedown", function (e) {
	if ($("#cartSidebar").hasClass("open")) {
		if (!$(e.target).closest("#cartSidebar, #cartIcon").length) {
			hideCartSidebar();
		}
	}
});

// Toggle cart sidebar
$("#cartIcon").on("click", function (e) {
	e.preventDefault();
	renderCartSidebar();
	updateCartCount();
	$("#cartSidebar").toggleClass("open");
});

// --- Custom Modal for Cart Confirmations ---
function cartShowConfirm(message) {
	return new Promise((resolve) => {
		const $modal = $("#cartConfirmModal");
		$("#cartModalMsg").text(message);
		$modal.show();
		function cleanup(result) {
			$modal.hide();
			$("#cartModalCancel").off("click");
			$("#cartModalConfirm").off("click");
			resolve(result);
		}
		$("#cartModalCancel").on("click", () => cleanup(false));
		$("#cartModalConfirm").on("click", () => cleanup(true));
	});
}

function showCartSidebar() {
	$("#cartSidebar").addClass("open");
}
function hideCartSidebar() {
	$("#cartSidebar").removeClass("open");
}
