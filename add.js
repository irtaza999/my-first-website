document.getElementById('addform').addEventListener('submit', addItem);
document.getElementById('filter').addEventListener('keyup', filterItems);
Array.from(document.getElementsByClassName('delete')).forEach(button => button.addEventListener('click', deleteItem));

function addItem (e) {
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');

  li.className = 'list-group-item bg-light';
  li.innerHTML = ${newItem} <button class="btn btn-danger btn-sm float-right delete">x</button>;

  document.getElementById('items').insertBefore(li, document.getElementById('items').firstChild);

  li.querySelector('.delete') .addEventListener('click', deleteItem);

}

function deleteItem (e) {
  if (confirm('Do you want to delete this item?')) {
    e.target.closest('li').remove();

  }

}