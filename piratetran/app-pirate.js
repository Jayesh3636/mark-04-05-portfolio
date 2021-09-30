console.log('Connected Succesfully!')
const translateBtn = document.querySelector('#translateBtn-p')
const inpText = document.querySelector('#inpText')
const outputSection = document.querySelector('.output')

const serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


// tells the button what to do when clicked 
// main task - translate and show in output
function clickHandler() {
    const inputText = inpText.value
    // server processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        outputSection.innerText = translatedText
    })
    .catch(errorHandling)
}

function errorHandling(err) {
    console.log('Error occured - ', err)
    alert('Server Error, Maybe solved in sometime.')
}


translateBtn.addEventListener('click', clickHandler)