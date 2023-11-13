const itemToAdd = document.getElementById('itemToAdd');
const addButton = document.getElementById('addButton');
const listOfItems = document.getElementById('listOfItems');
const itemCount = document.getElementById('itemCount');

itemCount.textContent = ` 0`;
itemCount.style.marginLeft = '5px';
itemCount.style.fontWeight = 'bold';

addButton.addEventListener('click', () => {
    let itemValue = itemToAdd.value;
    itemToAdd.value = '';
    let listItem = document.createElement('li');
    let displayItem = document.createElement('span');
    let removeItem = document.createElement('button');
    removeItem.classList.add('btn', 'btn-primary');
    displayItem.textContent = itemValue;
    removeItem.textContent = 'delete';
    listItem.appendChild(displayItem);
    listItem.appendChild(removeItem);
    listOfItems.appendChild(listItem);
    removeItem.addEventListener('click', () => {
        listItem.remove();
        itemToAdd.focus();
        updateItemCount();
    })
    itemToAdd.focus();
    updateItemCount();
})

function updateItemCount () {
    let itemsListed = document.getElementById('listOfItems');
    let countItems = itemsListed.getElementsByTagName('li').length;
    itemCount.textContent = countItems;
}
