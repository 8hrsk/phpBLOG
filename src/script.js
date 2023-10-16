document.addEventListener('DOMContentLoaded', () => {

    const mainBtns = {
        loginBtn: document.getElementById('loginBtn'),
        registerBtn: document.getElementById('registerBtn'),        
        createPost: document.getElementById('createPost'),

        submitRegistration: document.getElementById('submitRegistration'),
        submitLogin: document.getElementById('submitLogin'),
    };

    const actions = {
        loginBtnDialog: document.getElementById('loginDialog'),
        registerBtnDialog: document.getElementById('registerDialog'),
        createPostDialog: document.getElementById('createPostDialog')
    };

    const checkBox = {
        passwordRegistration: document.getElementById('passwordRegistration'),
        confirmPasswordRegistration: document.getElementById('confirmPasswordRegistration'),

        usernameRegistration: document.getElementById('usernameRegistration'),
        emailRegistration: document.getElementById('emailRegistration'),

        usernameLogin: document.getElementById('usernameLogin'),
        passwordLogin: document.getElementById('passwordLogin')
    }

    mainBtns.submitRegistration.disabled = true;

    const passwordCheck = (password, confirmPassword) => {
        if (password != confirmPassword || password.length == 0 || password.length > 32) {
            checkBox.confirmPasswordRegistration.classList.add('error');
            checkBox.passwordRegistration.classList.add('error');
            checkBox.confirmPasswordRegistration.classList.remove('success');
            checkBox.passwordRegistration.classList.remove('success');

            return false;
        } else {
            checkBox.confirmPasswordRegistration.classList.remove('error');
            checkBox.passwordRegistration.classList.remove('error');
            checkBox.confirmPasswordRegistration.classList.add('success');
            checkBox.passwordRegistration.classList.add('success');

            return true;
        }
    }

    const checkEmail = (email) => {
        if (email.length == 0 || email.length > 129 || !email.includes('@') || !email.includes('.')) {
            checkBox.emailRegistration.classList.add('error');
            checkBox.emailRegistration.classList.remove('success');

            return false;
        } else {
            checkBox.emailRegistration.classList.remove('error');
            checkBox.emailRegistration.classList.add('success');

            return true;
        }
    }

    const checkUsername = (username) => {
        if (username.length == 0 || username.length > 20) {
            checkBox.usernameRegistration.classList.add('error');
            checkBox.usernameRegistration.classList.remove('success');

            return false;
        } else {
            checkBox.usernameRegistration.classList.remove('error');
            checkBox.usernameRegistration.classList.add('success');

            return true;
        }
    }

    checkBox.confirmPasswordRegistration.addEventListener('input', (e) => {
        console.log(1, checkBox.passwordRegistration.value, checkBox.confirmPasswordRegistration.value);
        let password = checkBox.passwordRegistration.value;
        let confirmPassword = e.target.value;

        let username = checkBox.usernameRegistration.value;
        let email = checkBox.emailRegistration.value;

        if (password.length == 0 && confirmPassword.length == 0) {
            checkBox.confirmPasswordRegistration.classList.add('error');
            checkBox.passwordRegistration.classList.add('error');
            checkBox.confirmPasswordRegistration.classList.remove('success');
            checkBox.passwordRegistration.classList.remove('success');
        } else {
            if (passwordCheck(password, confirmPassword) && checkEmail(email) && checkUsername(username)) {
                mainBtns.submitRegistration.disabled = false;
            }
        }
    })

    window.addEventListener('click', (e) => {
        if (e.target == mainBtns[e.target.id]) {
            window[e.target.id+'Dialog'].showModal();

            setTimeout(() => {
                window.addEventListener('click', (e) => {
                    if (e.target.open) {
                        window[e.target.id].close();
                    }
                })
            });
        }
    });
})