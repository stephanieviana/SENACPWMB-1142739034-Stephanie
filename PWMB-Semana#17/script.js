document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);

    document.getElementById('contactForm').reset();
});
