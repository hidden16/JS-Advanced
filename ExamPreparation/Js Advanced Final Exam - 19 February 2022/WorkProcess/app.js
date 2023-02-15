function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birthDate = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const budget = document.getElementById('sum');
    let totalBudget = 0;
    document.getElementById('add-worker').addEventListener('click', hireWorker);

    function hireWorker(event) {
        event.preventDefault();
        if (!firstName.value && !lastName.value && !email.value && !birthDate.value && !position.value && !salary.value) {
            return;
        }

        const tbody = document.getElementById('tbody');

        const tr = document.createElement('tr');

        createElement('td', firstName.value, tr);
        createElement('td', lastName.value, tr);
        createElement('td', email.value, tr);
        createElement('td', birthDate.value, tr);
        createElement('td', position.value, tr);
        createElement('td', salary.value, tr);

        const td = document.createElement('td');

        const fireButton = createElement('button', 'Fire', td);
        fireButton.className = 'fired';
        
        const editButton = createElement('button', 'Edit', td);
        editButton.className = 'edit';
        
        
        tr.appendChild(td);
        tbody.appendChild(tr);
        
        totalBudget += Number(salary.value);
        budget.textContent = totalBudget.toFixed(2);
        clear();
        fireButton.addEventListener('click', fireWorker.bind(null,fireButton));
        editButton.addEventListener('click', edit.bind(null, editButton));
    }
    function fireWorker(button){
        totalBudget -= Number(button.parentElement.parentElement.querySelectorAll('td')[5].textContent);
        budget.textContent = totalBudget.toFixed(2);
        button.parentElement.parentElement.remove();
    }

    function edit(button){
        const worker = button.parentElement.parentElement.getElementsByTagName('td');
        firstName.value = worker[0].textContent;
        lastName.value = worker[1].textContent;
        email.value = worker[2].textContent;
        birthDate.value = worker[3].textContent;
        position.value = worker[4].textContent;
        salary.value = worker[5].textContent;
        totalBudget -= Number(salary.value);
        budget.textContent = totalBudget.toFixed(2);
        document.querySelector('#tbody tr').remove();
    }

    //extensions
    function clear() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        position.value = '';
        birthDate.value = '';
        salary.value = '';
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
solve()