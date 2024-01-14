"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent); 

function parent() {
    console.log(this.value);  // выведет 'text'
    
    function child() {
        console.log(this.value);  // выведет 'text'
    }
    
    child.call(this);  // используем call для явной передачи контекста
}

