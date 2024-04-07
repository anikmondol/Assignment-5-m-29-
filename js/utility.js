function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// ------------------------------------


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// ------------------------------------


function getInnerText(id){
    const element = document.getElementById(id).innerText;
    return element;
}

// -------------------------------------

function getInnerTextElement(id){
    const element = document.getElementById(id);
    return element;
}

