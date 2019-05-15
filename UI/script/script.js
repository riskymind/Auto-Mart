// #### modal ###

//Get the DOM elements
const regModal =  document.getElementById('regModal');
const regButton = document.getElementById('reg');
const loginModal =  document.getElementById('loginModal');
const loginButton = document.getElementById('login');


// Open the registration modal
const openRegModal = ()=> {
    regModal.style.display = 'block';
}

// Open the Login modal
const OpenLoginModal = ()=> {
    loginModal.style.display = 'block';
}

// method to close the modal by clicking outside the modal
const outsideModal = (e)=> {
    if(e.target === regModal) {
        regModal.style.display = 'none';
    }

    if(e.target === loginModal) {
        loginModal.style.display = 'none';
    }
}

// Listening for reg click events
regButton.addEventListener('click', openRegModal);
window.addEventListener('click', outsideModal);

loginButton.addEventListener('click', OpenLoginModal);


