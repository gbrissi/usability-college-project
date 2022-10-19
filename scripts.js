const form = document.getElementById('contact-form')
const nameForm = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const formSubmit = () => {
    if(nameForm.value == 0 || email.value == 0 || subject.value == 0 || message.value == 0) {
        alert('Preencha todos os campos!')
    } else {
        alert('Mensagem enviada com sucesso!')
        form.reset();
    }
}

