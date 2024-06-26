
function createElement(text) {

  const newItem = document.createElement('div');
  const itemText = document.createTextNode(text);
  const removeButton = document.createElement('button');
  const toggleCheckbox = document.createElement('input');


  removeButton.textContent = 'X';
  removeButton.addEventListener('click', function() {
    newItem.remove();
  });


  toggleCheckbox.type = 'checkbox';
  toggleCheckbox.addEventListener('change', function() {
    if (toggleCheckbox.checked) {
      newItem.classList.add('item-checked');
    } else {
      newItem.classList.remove('item-checked');
    }
  });


  newItem.appendChild(itemText);
  newItem.appendChild(removeButton);
  newItem.appendChild(toggleCheckbox);
  newItem.classList.add('item');

  return newItem;
}


document.getElementById('addButton').addEventListener('click', function() {
  const container = document.getElementById('container');
  const text = prompt('Enter the name of your Task:');
  if (text) {
    const newItem = createElement(text);
    container.appendChild(newItem);
  }
});