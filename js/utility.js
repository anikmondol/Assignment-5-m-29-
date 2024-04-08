function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// -------------------------------
function addDisabled(elementId){
    const element = document.getElementsByName(elementId);
    for (const iterator of element) {
        iterator.classList.add('disabled');
    }
    
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

// -------------------------------------


function grandTotal(category) {
    const TotalElement = getInnerTextElement('total_total').innerText;
    const Total = parseInt(TotalElement);
  
    if (category === 'bus') {
      
    }
    else {
      setInnerText('grand_total', Total);
  
    }
  }

// ----------------------------------------------



