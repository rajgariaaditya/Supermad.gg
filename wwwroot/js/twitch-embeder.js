export function embedTwitch(id) {
	var host = window.location.hostname;	
	new Twitch.Embed(id, {
		layout: "video",
		width: "100%",
		height: 500,
		channel: "supermad",
		parent: host
	});
}