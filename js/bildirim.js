if (Notification.permission !== 'denied') {
    // daha önce bildirimlere onay verilmediyse önce onay istenecek
	Notification.requestPermission(function (permission) {
	// Kullanıcı onaylamadı ise tekrar soralım
	if (permission === "granted") {
	    // onaylarsa bilgilendirme bildirimi gönderilecek
		var notification = new Notification('Kodaktuel.com', {
		body: 'Artık Kodaktuel.com yazılarından anında haberdar olacaksınız. Teşekkür ederiz.', 
		icon: 'http://kodaktuel.com//upload/dosya/kodaktuellogo_15798a891749d0.png'
		});
	}
    });
}
