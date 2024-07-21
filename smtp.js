// https://smtpjs.com/v3/smtp.js

const handleContactForm = () => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kapex.coder@gmail.com",
        Password : "A03E4E2075F219EF603F09AA94066D73155A",
        To : 'kapex.coder@gmail.com',
        From : document.getElementById("user-email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}