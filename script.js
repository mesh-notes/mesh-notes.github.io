$( document ).ready(function() {
	typingAnimate();
});

function typingAnimate() {
	var preloadedStrings = ["Edit notes live with people near you. ^1000 <br/> ^500 <br/> ^500 Decentralized. ^1000 Distributed. ^1000 Resilient. ^1000 <br/><p style=\"font-weight:bold;display:inline\"><a href=\"https://itunes.apple.com/us/app/mesh-notes/id1160071680?ls=1&amp;mt=8\">Free.</a></p>^3000", "Useful for ^800<br/>&#8226; Course notes ^600<br/>&#8226; Chats ^600<br/>&#8226; Event planning ^600<br/>&#8226; Group projects ^600<br/>&#8226; Idea mixing ^600<br/>and much more. ^2000", "<a href=\"https://itunes.apple.com/us/app/mesh-notes/id1160071680?ls=1&amp;mt=8\">Get it free now!</a> ^5000", ""];

	$("#typing-element-1").typed({
		strings: preloadedStrings,
		contentType: 'html',
		typeSpeed: 30,
		backDelay: 1000,
		callback: function() {
			setTimeout(typingAnimate, 3000);
		}
	});
	$("#typing-element-2").typed({
		strings: preloadedStrings,
		contentType: 'html',
		typeSpeed: 30,
		backDelay: 1000
	});
}