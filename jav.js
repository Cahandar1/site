document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Formun sayfayı yenilemesini engelle

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Form verilerini konsola yazdıralım (İlerleyen adımlarda backend ile mail gönderebiliriz)
        console.log("Ad: " + name);
        console.log("Email: " + email);
        console.log("Mesaj: " + message);

        // Form gönderildikten sonra bir teşekkür mesajı gösterelim
        alert("Teşekkürler! Mesajınız alındı.");
        
        // Formu sıfırlayalım
        form.reset();
    });
});