function submitForm(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return;
    }

    // You can perform additional validation or submit the form data as needed
    console.log('Form submitted successfully!');
}
