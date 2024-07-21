// https://smtpjs.com/v3/smtp.js

const handleContactForm = () => {
    const name = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const formBody = `
        Name: ${name} <br>
        Email: ${userEmail} <br>
        Message: ${message}
    `

    Email.send({
        SecureToken: "9fbd48a0-687a-4010-87fa-1e2644e1e185",
        From: "kapex.coder@gmail.com",
        To: "kapex.coder@gmail.com",
        Subject: `Portfolio Contact Form: ${subject}`,
        Body: formBody
    }).then(
        message => alert(message)
    );
}