// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btns = document.getElementsByClassName("openModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("clsModal");

// When the user clicks on the button, open the modal 
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "block";
    }
}

function closeModal(event) {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == span) {
        closeModal();
    }
}