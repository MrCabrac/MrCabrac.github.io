// Devsite code
class DevsiteCode extends HTMLElement{
    constructor(){
        super()

        
    }  

    getId(){
        return this.id
    }
}



customElements.define("devsite-code", DevsiteCode)

const podNameinput = document.querySelector('.pod-name');
const namespaceinput = document.querySelector('.namespace');

var podNameVariable = document.getElementsByClassName('devsite-var-pod-name');
var namespaceVariable = document.getElementsByClassName('devsite-var-namespace');

podNameinput.oninput  = (event) => {
    // console.log(event.target.value);
    // podNameVariable.setAttribute("scope", event.target.value);
    for (var i = 0; i < podNameVariable.length; i++) {
        podNameVariable[i].setAttribute("scope", event.target.value);
    }
}

namespaceinput.oninput  = (event) => {
    // console.log(event.target.value);
    // podNameVariable.setAttribute("scope", event.target.value);
    for (var i = 0; i < namespaceVariable.length; i++) {
        namespaceVariable[i].setAttribute("scope", event.target.value);
    }
}

