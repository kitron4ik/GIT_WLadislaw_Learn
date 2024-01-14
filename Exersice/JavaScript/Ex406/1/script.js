"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func); 

function func() {
    alert(square.call(this));  // используем call для явной передачи контекста

    function square() {
        return this.value * this.value;
    }
}

