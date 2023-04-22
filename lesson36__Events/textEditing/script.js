let divElement = document.querySelector('.text')
let text = divElement.innerHTML
let textareaElement = document.createElement('textarea')
textareaElement.innerHTML = text;

function editText() {
    document.addEventListener('keydown', function(event){
        if (event.ctrlKey && event.key == 'e'){
            event.preventDefault()
            divElement.parentNode.replaceChild(textareaElement, divElement)
        } else if (event.ctrlKey && event.key == 's'){
            event.preventDefault()
            let updatedText = textareaElement.value
            divElement.innerHTML = updatedText
            textareaElement.parentNode.replaceChild(divElement, textareaElement)
        }
    })
}

editText()
