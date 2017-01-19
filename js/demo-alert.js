$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		.moveTo(600, 450, {
					callback: function() {
					//	alert("0");
					},
					name: "start"
				})

				.lineTo(685, 420, {
					callback: function() {
					//	alert("1");
					},
					name: "first"
				})

				// Line to 'description' element
				.lineTo(770, 390, {
					callback: function() {
					//	alert("2");
					},
					name: "second"
				})
				.lineTo(855, 360, {
					callback: function() {
					//	alert("3");
					},
					name: "third"
				})
				.lineTo(940, 330, {
					callback: function() {
					//	alert("4");
					},
					name: "fourth"
				})
				.lineTo(1025, 300, {
					callback: function() {
					//	alert("5");
					},
					name: "end"
				});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".content__safe-drive__text").scrollPath({drawPath: true, wrapAround: false});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}