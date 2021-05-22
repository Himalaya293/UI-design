const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


contentArray.forEach(divMaker);

function divMaker(text) {
    var div = document.createElement("div");
    var h2_myInput = document.createElement('h2');

    div.className = 'flashcard';

    h2_myInput.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
    h2_myInput.innerHTML = text.my_myInput;


    div.appendChild(h2_myInput);

    div.addEventListener("click", function() {
        if (h2_myInput.style.display == "none")
            h2_myInput.style.display = "block";
        else
            h2_myInput.style.display = "none";
    })

    flashcards.appendChild(div);
}

function addFlashcard() {
    var flashcard_info = {
        'my_myInput': myInput.value,

    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    myInput.value = '';
}

function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox() {
    createCard.style.display = "block";
}

function hideCreateCardBox() {
    createCard.style.display = "none";
}


//////////////////////
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}