const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'),
  sumPlant = document.querySelector('.sum-plant');

let toDos = [];
let toDoSum = 0;
const CHECKED_CN = 'todo--checked';

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentElement;
  const id = li.id;
  toDos.splice(id - 1, 1);
  const newToDos = toDos;
  toDos = [];
  while (toDoList.hasChildNodes()) {
    toDoList.removeChild(toDoList.firstChild);
  }
  newToDos.forEach((toDo) => {
    makeToDo(toDo.text);
  });
  saveToDos();
  paintSum();
}

function checkToDo() {
  const li = this;
  const id = li.id;
  const lastCN = li.classList[li.classList.length - 1];
  if (lastCN !== CHECKED_CN) {
    li.classList.add(CHECKED_CN);
    toDos[id - 1].checked = true;
    toDos[id - 1].sum += 1;
  } else {
    li.classList.remove(CHECKED_CN);
    toDos[id - 1].checked = false;
    toDos[id - 1].sum -= 1;
  }
  saveToDos();
  paintSum();
}

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function makeToDo(text, checked, sum) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  const newId = toDos.length + 1;
  li.id = newId;
  li.classList.add('todo');
  span.classList.add('todo--text');
  delBtn.classList.add('todo--del');
  span.innerText = text;
  if (checked === true) {
    li.setAttribute('checked', 'checked');
    li.classList.add(CHECKED_CN);
  }
  li.addEventListener('click', checkToDo);
  delBtn.innerText = '⨉';
  delBtn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  if (checked === undefined) {
    checked = false;
  }
  if (sum === undefined) {
    sum = 0;
  }
  const toDoObj = {
    id: newId,
    text: text,
    checked: checked,
    sum: sum,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  makeToDo(currentValue);
  toDoInput.value = '';
}

function loadLSToDos() {
  const loadedToDos = JSON.parse(localStorage.getItem('toDos'));
  if (loadedToDos !== null) {
    loadedToDos.forEach((toDo) => {
      makeToDo(toDo.text, toDo.checked, toDo.sum);
    });
  }
}

function paintSum(){
  toDoSum = 0;
  toDos.forEach(i => 
    toDoSum += i.sum
  );
  if (toDoSum < 4) {
    sumPlant.setAttribute('src',`img/plant${toDoSum + 1}.png`);
  } else {
    sumPlant.setAttribute('src','img/plant4.png');
  } 
};

function init() {
  toDoForm.addEventListener('submit', handleSubmit);
  loadLSToDos();
  paintSum();
}

init();
