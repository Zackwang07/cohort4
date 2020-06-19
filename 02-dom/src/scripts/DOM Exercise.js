div1.addEventListener("click", function (e) {
    console.log(e.target);
});

let ol = document.querySelector("ol");
let num = 3;

btnAdd1.addEventListener("click", function () {
    let li = document.createElement("li");
    num = num + 1;
    li.appendChild(document.createTextNode("Item" + " " + num));
    let liBtn = document.createElement('button');
    liBtn.className = "btnDelete";
    liBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(liBtn);
    ol.appendChild(li);
});

btnAdd2.addEventListener('click', function () {
    let li = document.createElement("li");
    num = num + 1;
    li.appendChild(document.createTextNode("Item" + " " + num));
    let liBtn = document.createElement('button');
    liBtn.className = "btnDelete";
    liBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(liBtn);
    ol.insertBefore(li, document.querySelector("li"));
});

ol.addEventListener('click', function (e) {
    if (e.target.className === 'btnDelete') {
        e.target.parentElement.remove();
    }
})

// ------ Working with Cards --------

let cardNum = 0;

addCard.addEventListener('click', function () {
    leftSide.appendChild(createNewCard());
});

leftSide.addEventListener('click', function (e) {
    if (e.target.className == 'btnDelCard') {
        e.target.parentElement.remove();
    }
    if (e.target.className == 'btnAddAfter') {
        e.target.parentElement.insertAdjacentElement('afterend', createNewCard());
    }
    if (e.target.className == 'btnAddBefore') {       
        e.target.parentElement.insertAdjacentElement('beforebegin', createNewCard());        
    }
});

function createNewCard(){
    let newCard = document.createElement('div');
    const addBefore = document.createElement('button');
    const addAfter = document.createElement('button');
    const delCard = document.createElement('button');

    addBefore.appendChild(document.createTextNode('Add Before'));
    addAfter.appendChild(document.createTextNode('Add after'));
    delCard.appendChild(document.createTextNode('Delete'));

    newCard.className = "card";
    addBefore.className = "btnAddBefore";
    addAfter.className = "btnAddAfter";
    delCard.className = "btnDelCard";

    cardNum = cardNum + 1;
    newCard.appendChild(document.createTextNode("Card" + " " + cardNum));

    newCard.appendChild(addBefore);
    newCard.appendChild(addAfter);
    newCard.appendChild(delCard);

    return newCard
}


