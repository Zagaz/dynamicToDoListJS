function add() {
    
    //Each div has its own id e.g: id_4, id_5, etc.
    let i = divCount()
    let id = 'id_' + i

    //Create a DIV
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", id)
    newDiv.setAttribute("class", "item")

    //Create an input text
    var newInput = document.createElement("input")
    newInput.setAttribute("type", "text")
    newInput.setAttribute("class", 'newInput form-control')

    //Create an input button + 
    var newAdd = document.createElement("button")
    newAdd.setAttribute("type", "button")
    newAdd.setAttribute("onclick", 'add()')
    newAdd.setAttribute("class", "btn btn-success me-2")
    newAdd.innerHTML = "+"

    //Create an input button -
    var newBT = document.createElement("button")
    newBT.setAttribute("type", "button")
    newBT.setAttribute("onclick", 'deleteDiv(' + i + ')')
    newBT.setAttribute("class", "btn btn-danger")
    newBT.innerHTML = "-"

    // 1st append to #main the new <div>
    document.getElementById('main').appendChild(newDiv)
    //Apend to the <div> the elements
    newDiv.appendChild(newInput)
    newDiv.appendChild(newAdd)
    newDiv.appendChild(newBT)
}


// Delete <div>
function deleteDiv(i) {

    let id = "id_" + i
    toBeDeleted = document.getElementById(id)
    toBeDeleted.remove()

}

function divCount() {
    return document.querySelectorAll('.item').length;
}