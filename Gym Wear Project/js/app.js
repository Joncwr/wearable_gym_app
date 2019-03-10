(function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());

var page = document.querySelector('#snapListPage'),
listHelper;

page.addEventListener('pagebeforeshow', function() {
var list = document.getElementById('snapList');

if (tau.support.shape.circle) {
    listHelper = tau.helper.SnapListMarqueeStyle.create(list, {marqueeDelay: 1000});
}
});

page.addEventListener('pagehide', function() {
if (tau.support.shape.circle) {
    if (listHelper) {
        listHelper.destroy();
    }
}
});
