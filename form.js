const nameField = document.getElementById('name');

console.log(nameField.value)
//tracking changes in input field
nameField.addEventListener('input', (event)=> {
    console.log(event.target.value)
});
//handling form submission
const form =document.getElementById('form')
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    //create an object to hold form data
    const formData ={
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
    }
        console.log('Form submitted', formData);
        
});