function toggle() {
    let btnText = document.getElementsByClassName('button')[0];
    if(btnText.textContent == 'More'){
        document.getElementById('extra').style.display = 'block';
        btnText.textContent = 'Less';
    } else if(btnText.textContent == 'Less'){
        document.getElementById('extra').style.display = 'none';
        btnText.textContent = 'More';
    }
}