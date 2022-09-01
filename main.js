var items = 0;
if (items != 0) {
    noItemVisibility('hidden')
} else {
    console.log("-" + items)
}



function add() {
    noItemVisibility('hidden')

    //Each div has its own id e.g: id_4, id_5, etc.
    let i = divCount()
    let id = 'id_' + i

    //Create a DIV
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", id)
    newDiv.setAttribute("class", "item")

    //Create an input text
    let newInput = document.createElement("input")
    newInput.setAttribute("type", "text")
    newInput.setAttribute("class", 'newInput form-control')

    //Create an input button + 
    let newAdd = document.createElement("button")
    newAdd.setAttribute("type", "button")
    newAdd.setAttribute("onclick", 'add()')
    newAdd.setAttribute("class", "btn btn-success me-2")
    newAdd.innerHTML = "+"

    //Create an input button -
    let newBT = document.createElement("button")
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
    items++;
    finishBT()
    finishBTvisibility('visible')


}


// Delete <div>
function deleteDiv(i) {

    let id = "id_" + i
    toBeDeleted = document.getElementById(id)
    toBeDeleted.remove()
    items--;
    if (items == 0) {
        noItemVisibility('visible')
        finishBTvisibility('hidden')

    }
    finishBT()

}

function divCount() {
    return document.querySelectorAll('.item').length;
}

// add finish button

function finishBT() {

    let finishBTCount = document.querySelectorAll(".finish").length;

    if (finishBTCount != 0) {
        return
    }

    if (items == 1) {

        //Create an input button 
        let finishBT = document.createElement("button")
        finishBT.setAttribute("type", "button")
        finishBT.setAttribute("onclick", 'finish()')
        finishBT.setAttribute("class", "finish btn btn-secondary me-2 mt-2 ms-3")
        finishBT.innerHTML = "Finish"

        document.getElementById('finishBT').appendChild(finishBT)
    } else {
        return
    }

}

function noItemVisibility(status) {


    document.getElementById("noItem").style.visibility = status;

}

function finishBTvisibility(status) {


    document.getElementById("finishBT").style.visibility = status;

}


function startItems() {
    items = 0;

}