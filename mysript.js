function addElement() {
    const newLine = document.createElement('div');


    const firstInput = document.createElement('input');
    firstInput.type = 'text';
    newLine.appendChild(firstInput);


    const secondInput = document.createElement('input');
    secondInput.type = 'text';
    newLine.appendChild(secondInput);


    const upButton = document.createElement('button');
    upButton.innerHTML = "&uarr;";
    newLine.appendChild(upButton);

    upButton.onclick = function() {
       let parent = upButton.parentElement;
       var previous = parent.previousSibling;
       if (previous) {
        parent.parentNode.insertBefore(parent,previous);
       }
    }


    const downButton = document.createElement('button');
    downButton.innerHTML = '&darr;';
    newLine.appendChild(downButton);

    downButton.onclick = function() {
        let parent = downButton.parentElement;
        var next = parent.nextSibling;
        if (next) {
         parent.parentNode.insertBefore(next,parent);
        }
     }


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';

    newLine.appendChild(deleteButton);
    deleteButton.onclick = function() {
        let parent = deleteButton.parentElement;
        parent.remove();
    }


    const main = document.getElementById('main');
    main.appendChild(newLine);
}

function saveElements() {
    var saveEl = '{';
    let main = document.getElementById('main');
    let div = main.getElementsByTagName('div');

    for (var i = 0; i < div.length; i++) {
        let input = div[i].getElementsByTagName('input');
        saveEl += '"' + input[0].value + '"' + ' : ' + '"' + input[1].value + '"';
        if (i != div.length - 1) { saveEl += ', '; }
    }
    saveEl += '}';

    let saveDiv = document.getElementById('save');
    saveDiv.textContent = saveEl;
}