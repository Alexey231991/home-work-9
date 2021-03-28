const wrapper = document.querySelector('#wrapper');


let input = document.createElement('input');
wrapper.append(input);

let button = document.createElement('button');
wrapper.append(button);

button.innerHTML = 'Отправить'

function addItem (name) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = name;
    li.append(span);

    let editButton = document.createElement('button');
    li.append(editButton);

    editButton.innerHTML = 'Редактировать';
    editButton.addEventListener('click', function () {
        let newName = prompt('Введите новое имя');
        span.innerHTML = newName;
    })

    let deleteButton = document.createElement('button');
    li.append(deleteButton);

    deleteButton.innerHTML = 'Удалить'
    deleteButton.addEventListener('click', function () {
        li.remove();
    })

    ul.append(li);
}

let ul = document.createElement('ul');
wrapper.append(ul);
button.addEventListener('click', function () {
    if (input.value === '') {
        return;
    };
    
    addItem(input.value);
    input.value = '';
})

const names = ['Игорь', 'Владимир', 'Степан'];
names.forEach( function (name) {
    addItem(name);
})
