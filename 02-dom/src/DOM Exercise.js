let div1;
div1 = document.getElementById("div1");


div1.addEventListener("click", function () {
    console.log("this is the div");
});


// let show;
// show = document.getElementById("btnShow");
// show.addEventListener("click",function(){

// })


let add1;
add1 = document.getElementById("btnAdd1");
add2 = document.getElementById("btnAdd2");
let ol = document.querySelector("ol");
let num = 3;


add1.addEventListener("click", function () {
    let li = document.createElement("li");
    num = num + 1;
    li.appendChild(document.createTextNode("Item" + " " + num));
    let liBtn = document.createElement('button');
    liBtn.className = "btnDelete";
    liBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(liBtn);
    ol.appendChild(li);
});

add2.addEventListener('click', function () {
    let li = document.createElement("li");
    num = num + 1;
    li.appendChild(document.createTextNode("Item" + " " + num));
    let liBtn = document.createElement('button');
    liBtn.className = "btnDelete";
    liBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(liBtn);
    ol.insertBefore(li, document.querySelector("li"));
});


const list = document.querySelector("ol");
list.addEventListener('click', function (e) {
    if (e.target.className == 'btnDelete') {
        e.target.parentElement.remove();
    }
})

// ------ Working with Cards --------

let leftSide = document.getElementById("leftSide");
let addCard = document.getElementById("addCard");
let cardNum = 0;



addCard.addEventListener('click', function () {

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

    leftSide.appendChild(newCard);
    console.log(newCard);
});

leftSide.addEventListener('click', function (e) {
    if (e.target.className == 'btnDelCard') {
        e.target.parentElement.remove();
    }

    if (e.target.className == 'btnAddAfter') {
        let newCard = document.createElement('div');
        const addBefore = document.createElement('button');
        const addAfter = document.createElement('button');
        const delCard = document.createElement('button');

        addBefore.appendChild(document.createTextNode('Add Before'));
        addAfter.appendChild(document.createTextNode('Add after'));
        delCard.appendChild(document.createTextNode('Delete'));

        newCard.className = "card";
        addBefore.className = "bthAddBefore";
        addAfter.className = "btnAddAfter";
        delCard.className = "btnDelCard";

        cardNum = cardNum + 1;
        newCard.appendChild(document.createTextNode("Card" + " " + cardNum));

        newCard.appendChild(addBefore);
        newCard.appendChild(addAfter);
        newCard.appendChild(delCard);

        e.target.parentElement.insertAdjacentElement('afterend', newCard);


    }

    if (e.target.className == 'btnAddBefore') {
        
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
        
        e.target.parentElement.insertAdjacentElement('beforebegin', newCard);
        console.log(newCard);
    }


});


