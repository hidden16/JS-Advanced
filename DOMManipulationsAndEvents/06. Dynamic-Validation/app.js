function validate() {
    const regex = new RegExp('[a-z]+@[a-z]+.[a-z]+');
    const email = document.getElementById('email');
    email.addEventListener('change', validateEmail);
    function validateEmail(){
        const match = regex.exec(email.value);
        if (match == null){
            email.className = 'error';
        }else{
            email.className = '';
        }
    }
}