// Get the modal
let modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("clsModal");

// When the user clicks on the button, open the modal 
for (btn of document.getElementsByClassName("openModal")) {
    btn.onclick = function () {
        // modal.style.display = "block";
        $('.modal').modal('show');
    }
}

function closeModal(event) {
    // modal.style.display = "none";
    $('.modal').modal("hide");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}