/* Email JS*/
const contactForm = document.getElementById ('contact-form'),
        contactMessage = document.getElementById ('contact-message')

const sendEmail = (e) => {
    e.preventDefault ()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm ('service_oyl7qhh','template_6jbvxlt','#contact-form','wYJaqXN05jT1tFfhi')
    .then(() => {
        //Show Sent Message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove Message after Five Seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear Input File
        contactForm.reset ()
    }, () => {

        //Show Errow Message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener ('submit', sendEmail)