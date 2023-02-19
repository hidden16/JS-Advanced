window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const numOfPeople = document.getElementById('people-count');
    const fromDate = document.getElementById('from-date');
    const days = document.getElementById('days-count');
    document.getElementById('next-btn').addEventListener('click', nextStep);
    function nextStep(event) {
        event.preventDefault();
        if (firstName.value == '' || lastName.value == '' || numOfPeople.value == '' || fromDate.value == '' || days.value == '') {
            return;
        }
        const li = document.createElement('li');
        li.className = 'ticket';

        const article = createElement('article', '', li);

        createElement('h3', `Name: ${firstName.value} ${lastName.value}`, article);
        createElement('p', `From date: ${fromDate.value}`, article);
        createElement('p', `For ${days.value} days`, article);
        createElement('p', `For ${numOfPeople.value} people`, article);
        const editButton = createElement('button', 'Edit', li);
        editButton.className = 'edit-btn';
        const continueButton = createElement('button', 'Continue', li);
        continueButton.className = 'continue-btn';
        document.getElementsByClassName('ticket-info-list')[0].appendChild(li);
        clear();

        editButton.addEventListener('click', editTicket.bind(null, editButton));
        continueButton.addEventListener('click', continueStep.bind(null, li));

        document.getElementById('next-btn').disabled = true;
    }

    function continueStep(li) {
        document.getElementsByClassName('confirm-ticket')[0].appendChild(li);
        li.getElementsByClassName('edit-btn')[0].remove();
        li.getElementsByClassName('continue-btn')[0].remove();
        const confirmBtn = createElement('button', 'Confirm', li);
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', confirm);
        const cancelBtn = createElement('button', 'Cancel', li);
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', cancel.bind(null, cancelBtn));
    }
    
    function confirm() {
        document.getElementById('main').remove();
        const body = document.getElementById('body');
        const h1 = createElement('h1', 'Thank you, have a nice day!', body);
        h1.id = 'thank-you';
        const backBtn = createElement('button', 'Back', body);
        backBtn.id = 'back-btn';
        backBtn.addEventListener('click', reloadPage);
    }

    function reloadPage(){
        location.reload();
    }
    function cancel(cancelBtn) {
        cancelBtn.parentElement.remove();
        document.getElementById('next-btn').disabled = false;
    }

    function editTicket(button) {
        let h3 = button.parentElement.querySelector('article h3').textContent;
        const name = h3.slice(6);
        const firstNameText = name.split(' ')[0];
        const lastNameText = name.split(' ')[1];
        firstName.value = firstNameText;
        lastName.value = lastNameText;

        let pDate = button.parentElement.querySelectorAll('article p')[0].textContent;
        const dateText = pDate.slice(11);
        fromDate.value = dateText;

        let pDays = button.parentElement.querySelectorAll('article p')[1].textContent;
        const daysText = pDays.split(' ')[1];
        days.value = daysText;

        let pPeople = button.parentElement.querySelectorAll('article p')[2].textContent;
        const peopleText = pPeople.split(' ')[1];
        numOfPeople.value = peopleText;

        button.parentElement.remove();
        document.getElementById('next-btn').disabled = false;
    }


    function clear() {
        firstName.value = '';;
        lastName.value = '';
        numOfPeople.value = '';
        fromDate.value = '';
        days.value = '';
    }
    function createElement(type, text, parent) {
        const element = document.createElement(type);
        element.textContent = text;
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}