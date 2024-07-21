// https://smtpjs.com/v3/smtp.js

const handleContactForm = () => {
    Email.send({
        SecureToken : "32ff0537-55ba-469b-aedc-67559923590f",
        To : 'kapex.coder@gmail.com',
        From : document.getElementById("user-email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}