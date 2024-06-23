(function(){
    emailjs.init("C_vl6jAbV0iWKlr2a");
})();

function sendEmail() {
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_6rbkcgo', 'template_77hv4an', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});
