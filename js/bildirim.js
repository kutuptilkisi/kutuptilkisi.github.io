if (Notification.permission !== 'denied') {
	Notification.requestPermission(function (permission) {
	if (permission === "granted") {
		var notification = new Notification('kutuptilkisi.github.io', {
		body: 'merhaba!', 
		icon: 'assets/favicon.png'
		});
	}
    });
}
