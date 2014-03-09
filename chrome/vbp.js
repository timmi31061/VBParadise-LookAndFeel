function setAuthorPostBackgroundColor(color)
{
	var postContainer = document.getElementsByClassName('wbbThreadPostList messageList jsClipboardContainer');
	if (postContainer.length > 0)
	{
		var threadCreatorPostsli = postContainer[0].getElementsByClassName('marginTop messageGroupStarter');
		for (i = 0; i < threadCreatorPostsli.length; i++)
		{
			threadCreatorPostsli[i].getElementsByTagName('article') [0].style.backgroundColor = "#" + color;
		}
	}
}

function setLogoLink(dest)
{
	var Logo = document.getElementById('logo') .getElementsByTagName('a') [0];
	Logo.href = dest;
}

function removeAvatarFrame()
{
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++)
	{
		if (images[i].alt == 'Benutzer-Avatarbild')
		{
			images[i].parentNode.className = '';
		}
	}
}

function setDefaults() {
	chrome.storage.local.set({
			"logolink_activated": true,
			"logolink_target": "http://www.vb-paradise.de/index.php/BoardList/",

			"tc_postcolor_activated": true,
			"tc_postcolor_color": "FFDDB7",

			"remove_avatar_bg_activated": true
		},
		function() {
		});
}

chrome.storage.local.get([
		"logolink_activated",
		"logolink_target",
		"tc_postcolor_activated",
		"tc_postcolor_color",
		"remove_avatar_bg_activated"
	],
	function(res) {
		if(res.logolink_activated == undefined) {
			setDefaults();
			window.location.reload();
			return;
		}

		if(res.logolink_activated) {
			setLogoLink(res.logolink_target);
		}

		if(res.tc_postcolor_activated) {
			setAuthorPostBackgroundColor(res.tc_postcolor_color);
		}

		if(res.remove_avatar_bg_activated) {
			removeAvatarFrame();
		}
	});
