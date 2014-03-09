function loadDefaults() {
	document.getElementById("logolink_activated").checked = true;
	document.getElementById("logolink_target").value = "http://www.vb-paradise.de/index.php/BoardList/";

	document.getElementById("tc_postcolor_activated").checked = true;
	document.getElementById("tc_postcolor_color").value = "FFDDB7";

	document.getElementById("remove_avatar_bg_activated").checked = true;
}

function save() {
	chrome.storage.local.set({
			"logolink_activated": document.getElementById("logolink_activated").checked,
			"logolink_target": document.getElementById("logolink_target").value,

			"tc_postcolor_activated": document.getElementById("tc_postcolor_activated").checked,
			"tc_postcolor_color": document.getElementById("tc_postcolor_color").value,

			"remove_avatar_bg_activated": document.getElementById("remove_avatar_bg_activated").value
		},
		function() {
		});
}



function load() {
	chrome.storage.local.get([
		"logolink_activated",
		"logolink_target",
		"tc_postcolor_activated",
		"tc_postcolor_color",
		"remove_avatar_bg_activated"
	],
	function(res) {
		if(res.logolink_activated == undefined) {
			loadDefaults();
			save();
			return;
		}

		document.getElementById("logolink_activated").checked = res.logolink_activated;
		document.getElementById("logolink_target").value = res.logolink_target;
		
		document.getElementById("tc_postcolor_activated").checked = res.tc_postcolor_activated;
		document.getElementById("tc_postcolor_color").value = res.tc_postcolor_color;
		
		document.getElementById("remove_avatar_bg_activated").checked = res.remove_avatar_bg_activated;
	});
}

load();

document.querySelector("#loadDefaults").addEventListener("click", loadDefaults);
document.querySelector("#save").addEventListener("click", save);
