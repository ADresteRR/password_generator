const button = document.getElementsByTagName('button')[0];








button.addEventListener('click', (e) => {
    const pass_len = document.getElementById('length_of_pass');

    console.log(pass_len);
    let len = pass_len.value;
    const elements = "1234567890abcdefghijklmnopqrstuvwxyz@#$%^&*()_+";
    const length = elements.length;
    let password = '';

    for (let i = 0; i < len; i++) {
        password += elements[Math.floor(Math.random() * length)];
    }
    console.log(`your password generated: \n${password}`);
    pass_len.value = "";




    //creating area where created password would be shown
    const generated_password = document.createElement('div');
    // generated_password.classList.add('input__area');
    const password_space = document.createElement('h3');
    password_space.append(`password generated is : ${password}`);
    generated_password.append(password_space);
    button.parentElement.appendChild(generated_password);










})