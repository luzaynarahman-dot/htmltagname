
function showmodal(heading, text) {
    const overlay = document.getElementById('modalOverlay');
    const modalHeading = document.getElementById('modalHeading');
    const modalText = document.getElementById('modalText');

    // 1. Text set kora
    modalHeading.innerText = heading;
    modalText.innerText = text;

    // 2. Modal Overlay dekhano
    overlay.style.display = 'flex';

    // 3. Unfolding animation start kora
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
}

function hideModal(){
    const overlay = document.getElementById('modalOverlay');
    
    // 1. Animation remove kora
    overlay.classList.remove('active');

    // 2. Animation sesh hole display none kora
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 400); // CSS transition time-er sathe mil rekhe
}

// Modal-er baire click korle jate bondho hoy
window.onclick = function(event) {
    const overlay = document.getElementById('modalOverlay');
    if (event.target == overlay) {
        hideModal();
    }
}

