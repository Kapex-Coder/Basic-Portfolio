// https://smtpjs.com/v3/smtp.js

const handleContactForm = () => {
    Email.send({
        SecureToken : "9fbd48a0-687a-4010-87fa-1e2644e1e185",
        To : 'kapex.coder@gmail.com',
        From : document.getElementById("user-email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}