function signupFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // * If the form is submitted with all 3 values
    // * submit a post request to the /api/users endpoint
    // * adding the user information to the database
    if(username && email && password){
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),

            headers: { 'Content-Type': 'application/json' }
            
        }).then((response) =>{console.log(response)})
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);