let userName = document.querySelector('#user-input');
let mail = document.querySelector('#mail-input');
let people = document.querySelector('#people-input');
let phone = document.querySelector('#phone-input');
let date = document.querySelector('#date-input');
let closeGallery = document.querySelector('.ti-close')
let gallery = document.querySelector('.gallery')
let submit = document.querySelector('.input-submit')

function showError(input){
    let parent = input.parentElement;
    let smalll = parent.querySelector('small')

    parent.classList.add('error');
};

function showSuccess(input){
    let parent = input.parentElement;
    let smalll = parent.querySelector('small')

    parent.classList.remove('error');
};

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()  

        if(input.value == ""){
            isEmptyError = true;
            showError(input)
        }else{
            showSuccess(input)
        }
    });

    return isEmptyError;
};

function checkEmailError(input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, 'Email Invalid')
    };

    return isEmailError;
};

submit.addEventListener('click', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([userName, mail, people, phone, date])
    let isEmailError = checkEmailError(mail);
    
    if(isEmptyError || isEmailError){
        alert("điền thông tin")
    }else{
        function showGallery(){
            gallery.classList.add('show-gallery')
        };
        function hideGallery(){
            gallery.classList.remove('show-gallery')
        };
        submit.addEventListener('click', showGallery);
        closeGallery.addEventListener('click', hideGallery);
    }
});


    
    

