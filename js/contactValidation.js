(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');
    let phoneInput = document.querySelector('#contact-tel');

    function validateEmail() {
        let value = emailInput.value;
        let hasAtSign = value.indexOf('@') > -1;
        let hasDot = value.indexOf('.') > -1;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }

        if (!hasAtSign || !hasDot) {
            showErrorMessage(emailInput, 'You must enter a valid email address');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        showErrorMessage(messageInput, null)
        return true;
    }

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
    function validatePhone() {
        let value = phoneInput.value;
        let numbers = /^[0-9]+$/;
        let hasHyphen = value.indexOf('-') > -1;
        let hasOpenParentheses = value.indexOf('(') > -1;
        let hasCloseParentheses = value.indexOf(')') > -1;

        if (!value) {
            showErrorMessage(phoneInput, null);
            return true;
        }

        if (!value.match(numbers) && !hasHyphen && !hasOpenParentheses && !hasCloseParentheses) {
            showErrorMessage(phoneInput, 'Please enter a valid phone number.')
            return false;
        }

        if (value.length > 0 && value.length < 7 || value.length > 15) {
            showErrorMessage(phoneInput, 'Please enter a valid phone number.');
            return false;
        }

        showErrorMessage(phoneInput, null)
        return true;
    }

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        let isValidPhone = validatePhone();
        return isValidEmail && isValidMessage && isValidPhone;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Success!');
            emailInput.value = null;
            phoneInput.value= null;
            messageInput.value = null;
            
        }
    })

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
    phoneInput.addEventListener('input', validatePhone);
})();