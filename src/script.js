document.addEventListener('DOMContentLoaded', () => {

    console.log(document.cookie);

    let userStatus = false;

    (() => {
        if (!document.cookie.includes('username') && !document.cookie.includes('PHPSESSID')) {
            userStatus = false;
        } else {
            userStatus = true;
        }
    })();

    const mainBtns = {
        loginBtn: document.getElementById('loginBtn'),
        registerBtn: document.getElementById('registerBtn'),        
        createPost: document.getElementById('createPost'),
        submitRegistration: document.getElementById('submitRegistration'),
        submitLogin: document.getElementById('submitLogin'),
    };

    const actions = {
        action_1: document.querySelector("#action > li:nth-child(1)"),
        action_2: document.querySelector("#action > li:nth-child(2)"),

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
    };

    const fetchCookies = () => {
        const cookiesArray = document.cookie.split(";");
        return cookiesArray;
    }

    mainBtns.submitRegistration.disabled = true;

    const setError = (element) => {
        element.classList.remove('success');
        element.classList.add('error');
    }

    const setSuccess = (element) => {
        element.classList.remove('error');
        element.classList.add('success');
    }

    const passwordCheck = (password, confirmPassword) => {
        if (password != confirmPassword || password.length == 0 || password.length > 32) {
            setError(checkBox.confirmPasswordRegistration);
            return false;
        } else {
            return true;
        }
    }

    const checkEmail = (email) => {
        if (email.length == 0 || email.length > 129 || !email.includes('@') || !email.includes('.')) {
            return false;
        } else {
            return true;
        }
    }

    const checkUsername = (username) => {
        if (username.length == 0 || username.length > 20) {
            return false;
        } else {
            return true;
        }
    }

    window.addEventListener('input', (e) => {
        const password = checkBox.passwordRegistration.value;
        const confirmPassword = checkBox.confirmPasswordRegistration.value;
        const username = checkBox.usernameRegistration.value;
        const email = checkBox.emailRegistration.value;

        if (username == '' || username.length > 20) {
            setError(checkBox.usernameRegistration);
        } else {
            if (checkUsername(username)) {
                setSuccess(checkBox.usernameRegistration);;
            }
        }

        if (email == '' || email.length > 129 || !email.includes('@') || !email.includes('.')) {
            setError(checkBox.emailRegistration);
        } else {
            if (checkEmail(email)) {
                setSuccess(checkBox.emailRegistration);
            }
        }

        if (password == '' || password.length > 32) {
            setError(checkBox.passwordRegistration);
        } else {
            setSuccess(checkBox.passwordRegistration);
            if (passwordCheck(password, confirmPassword)) {
                setSuccess(checkBox.confirmPasswordRegistration);
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

    const deleteElement = (element) => {
        element.remove();
    }

    const deleteCookie = (cookieName) => {
        document.cookie = cookieName + '=;expires=Thu, 01 Jan, 1970 00:00:00 GMT'
    }

    const mouseOnChangeEvent = (element, textToChange) => {
        const elementText = element.innerText;
        element.addEventListener('mouseenter', () => {
            element.innerText = textToChange;
        })
        element.addEventListener('mouseleave', () => {
            element.innerText = elementText;
        })
    }

    (() => {
        if (userStatus) {
            deleteElement(loginBtn);
            deleteElement(registerBtn);

            const logoutButton = document.createElement('button')
            logoutButton.innerText = "Logout";
            actions.action_2.appendChild(logoutButton);
    
            const logged = document.createElement('div');
            logged.innerText = `You are logged!`;
            logged.classList.add('logged');
            actions.action_1.appendChild(logged);

            logoutButton.addEventListener('click', () => {
                deleteCookie("PHPSESSID");
                deleteCookie("username");
                window.location.reload();
            })

        } else {
            mainBtns.createPost.disabled = true;
            mouseOnChangeEvent(mainBtns.createPost, 'Login first')
        }
    })();
})