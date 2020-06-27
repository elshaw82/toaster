const toasterLever = document.querySelector('.lever');
const myToast = document.querySelector('.toast');


function makeToast(){
    toasterLever.classList.add('make-toast');
    myToast.classList.add('toast-me');
    setTimeout(toastTime, 2000)
}

function toastTime() {
    myToast.classList.remove('toast-me');
    toasterLever.classList.remove('make-toast');
    myToast.classList.add('done');
    myToast.setAttribute('style','background-color:rgb(170, 132, 104);');
    setTimeout(function() { 
        myToast.classList.remove('done');
        myToast.setAttribute('style','background-color:rgb(255, 217, 190); transition:background-color 2s;') 
    }, 2000);
}



