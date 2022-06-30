if (Notification.permission !== 'denied') {
	Notification.requestPermission(function (permission) {
	if (permission === "granted") {
		var notification = new Notification('📰=haberler=📰', {
		body: 'haber yok :)', 
		icon: 'assets/favicon.png'
		});
	}
    });
}
